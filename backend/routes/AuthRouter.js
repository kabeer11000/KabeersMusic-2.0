var express = require('express');
var router = express.Router();
var axios = require('axios');

function serialize(object) {
    return Object.entries(object)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
}

const makeid = t => {
    let o = "";
    const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let a;
    for (a = 0; a < t; a++) o += r.charAt(Math.floor(Math.random() * r.length));
    return o
};
const access_token_expired_code = 400;
/* GET Home page. */
router.get('/callback', function (req, res, next) {
    if (!req.query.code) return res.status(302).json('Nothing Here');
    if (req.query.state !== req.session.state) return res.status(402).json('Invalid State');

    axios({
        method: 'post',
        url: 'https://kabeers-auth.herokuapp.com/auth/token',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: serialize({
            client_secret: 'pojsd682jxp31accE3mHsMtBRGVtIk0AmTV0jU3g',
            client_public: 'S565ds6887df646k5Y4f56IOiDWxRXS840lnnmD',
            auth_code: req.query.code,
            grant_types: 's564d68a34dCn9OuUNTZRfuaCnwc6:feed|s564d68a34dCn9OuUNTZRfuaCnwc6:history.readwrite'
        })
    })
        .then(function (response) {
            req.session.state = null;
            res.cookie('token', JSON.stringify({
                expire: '2h',
                exp: Date.now(),
                token: response.data[0]['s564d68a34dCn9OuUNTZRfuaCnwc6'].access_token
            }));
            res.cookie('oauth_refresh_token', response.data[0]['s564d68a34dCn9OuUNTZRfuaCnwc6'].refresh_token, {maxAge: 8.64e+8,});
            //res.status(200).json({ expire: '2h', exp: Date.now(), token: response.data[0]['s564d68a34dCn9OuUNTZRfuaCnwc6'].access_token });
            res.redirect('/');
        })
        .catch(function (error) {
            return res.status(access_token_expired_code).json(error);
        });
});

router.get('/redirect', (req, res) => {
    // AStroWorld_Cn9OuUNTZRfuaCnwc6:username|AStroWorld_Cn9OuUNTZRfuaCnwc6:email|AStroWorld_Cn9OuUNTZRfuaCnwc6:user_id
    const info = {
        clientId: 'S565ds6887df646k5Y4f56IOiDWxRXS840lnnmD',
        scopes: ['s564d68a34dCn9OuUNTZRfuaCnwc6:feed', 's564d68a34dCn9OuUNTZRfuaCnwc6:history.readwrite'].join('|'),
        callback: encodeURI('http://localhost:9000/auth/callback')
    };
    const id = makeid(10);
    req.session.state = id;
    const authUrl = `https://kabeers-auth.herokuapp.com/auth/authorize?client_id=${info.clientId}&scope=${info.scopes}&response_type=code&redirect_uri=${info.callback}&state=${id}&nonce=${makeid(5)}&prompt=none`;
    res.redirect(authUrl);
});

router.get('/store/tokens/refresh', (req, res) => {
    if (!req.cookies['oauth_refresh_token']) return res.status(402).json('Refresh Token Does Not Exists');
    const refresh_token = req.cookies['oauth_refresh_token'];
    var $jwt_payload = JSON.parse(Buffer.from(req.cookies['oauth_refresh_token'].split('.')[1], 'base64'));
    if ($jwt_payload.iat > $jwt_payload.exp) return res.json('Refresh Token Expired');
    axios({
        method: 'post',
        url: 'https://kabeers-auth.herokuapp.com/auth/refresh',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: serialize({
            client_secret: 'pojsd682jxp31accE3mHsMtBRGVtIk0AmTV0jU3g',
            client_public: 'S565ds6887df646k5Y4f56IOiDWxRXS840lnnmD',
            refresh_token: refresh_token,
        })
    })
        .then(function (response) {
            res.status(200).json({
                expire: '1h',
                exp: Date.now(),
                access_token: response.data,
            });
        })
        .catch(function (error) {
            return res.status(400).json(error.message);
        });
});
module.exports = router;
