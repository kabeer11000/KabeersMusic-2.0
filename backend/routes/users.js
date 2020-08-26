var express = require('express');
var router = express.Router();
const fs = require('fs');
const youTube = require('youtube-dl');

/* GET users listing. */
function playlist(url) {
  const video = youTube('http://www.youtube.com/watch?v=90AiXO1pAiA');

// called when the download starts.
  video.on('info', function (info) {
    console.log('Download started');
    console.log('filename: ' + info.filename);
    console.log('size: ' + info.size);
  });

  video.pipe(fs.createWriteStream('downloads/downloaded_video.mp4'));
}

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
  playlist('https://www.youtube.com/playlist?list=PL4o29bINVT4EG_y-k5jGoOu3-Am8Nvi10');
});

module.exports = router;
