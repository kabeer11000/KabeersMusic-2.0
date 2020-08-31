const ytdl = require("ytdl-core");
const express = require("express");
const cors = require("cors");
const cors_proxy = require('cors-anywhere');
const rateLimit = require("express-rate-limit");
var path = require('path');

const app = express();


const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 10 minutes 20 request
    max: 100 // limit each IP to 100 requests per windowMs TODO Default 10
});

//  apply to all requests
app.use('/api/', limiter);

var allowedOrigins = ['http://localhost:3000',
    'https://ylight.xyz'];
/*
app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin
        // (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));
app.options("*", cors());
*/
app.use(cors());
const port = process.env.PORT || 5000;
//app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/song', async (req, res) =>
    ytdl
        .getInfo(req.query.id)
        .then(info => {
            const audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
            res.set('Cache-Control', 'public, max-age=20000'); //6hrs aprox
            res.json(audioFormats[1].url)
        })
        .catch(err => res.status(400).json(err.message))
);
app.get('/proxy/:proxyUrl*', (req, res) => {
    req.url = req.url.replace('/proxy/', '/'); // Strip '/proxy' from the front of the URL, else the proxy won't work.
    proxy.emit('request', req, res);
});
app.get('/views/component/home', (req, res) => {
    return res.send(null);
});

app.use(express.static(path.join(__dirname, 'public/build')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/build', 'index.html'));
});
let proxy = cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeaders: [], // Do not require any headers.
    removeHeaders: [] // Do not remove any headers.
});


app.listen(port, () => console.log(`Server is listening on port ${port}.`));
module.exports = app;
// https://www.googleapis.com/youtube/v3/videos?part=snippet&videoCategoryId=10&type=video&key=AIzaSyB1msCdExGF2q9oyAjUq4bmSQq6i89VId8&chart=mostPopular
// key=AIzaSyB1msCdExGF2q9oyAjUq4bmSQq6i89VId8
