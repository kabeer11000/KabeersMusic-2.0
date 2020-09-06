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
  res.send({
    "topBolloywood": [{
      "kind": "youtube#playlistItem",
      "etag": "q_0gw55Y1FYJm88D_Xtq80a7VNE",
      "id": "UExjUk43dUs5Q0ZwUGt2Q2MtMDh0V09RbzZQQWc0dTBsQS5DQjZCNEI4REFBQ0QyRUVE",
      "snippet": {
        "publishedAt": "2020-08-26T00:54:26Z",
        "channelId": "UCTjwvQhUQZCWTc2KcIPUofg",
        "title": "Lonely Rain Mashup (Monsoon Mashup) VDJ Mahe ||Bollywood Song HD",
        "description": "Presenting \"Lonely Rain Mashup (Monsoon Mashup)\" | Hindi Dance Mix | \"REMIX\" - \"MASHUP\" - \"DJ Party\" | Latest Bollywood Songs 2020.\n♪ Song:- Lonely Rain Mashup (Monsoon Mashup).\n♪ Music:-  Debb\n♪ Video:- VDJ Mahe.\n♪ Released:- 2020.\n\nLove Makes Life Live - Brace yourself, in this video, we bring to you \"Lonely Rain Mashup (Monsoon Mashup)\" by Debb & VDJ Mahe.\n\nDo let us know what you think and provide feedback in the comments section.\n\n👉 Subscribe Now: http://bit.ly/VDJMahe 🔔 Stay updated!\n\n💳 Donate & Support VDJ Mahe\n► http://bit.ly/2DHGYJT\n\nAbout VDJ Mahe:\nVDJ Mahe has worked on many official remixes and mashups. As an accomplished artist, he has worked with all top India DJs and has been a personal video maker for most of them. Delivering massive value to his clients has been the focus of his career for the past 7 years and One of the Best Visual Artist For Indian DJs. So Enjoy My Music Videos. [ VJ (Visual Jockey) | VIDEO EDITOR (Editing Promo Videos, Remixes, Mashups, and Aftermovies) ]\n\nTop Love Songs | Hindi Romantic Songs | VDJ Mahe Mashup 2020 | Best of Hindi Love Songs\n\n✅ For branding and business inquiries ► vdjmahe24@gmail.com\n\n💾 Listen & Free Mp3 Download ► \n\nAll Rights to Music Label Co. & No Copyright infringement intended.\n\n#VDJMahe #HD #New #Remix #Mashup  #Official #Music #Video #2020 #VDJMaheVisuals #DJ #Hindi #Song #Bollywood #Latest\n\nEnjoy & stay connected with me!\n\n► Paypal Donate & Support: 🔻\nhttps://bit.ly/2NzDKgs\n\n► Follow me on Instagram: \nhttps://www.instagram.com/vdjmahe.official\n\n► Follow me on Hearthis:\nhttps://hearthis.at/vdjmahe.official\n\n► Like me on Facebook: \n👉 https://www.facebook.com/VDJMahe.Official\n\n👉 https://www.facebook.com/VDJMahe.Music\n\n► Follow me on Twitter: \nhttps://twitter.com/vdjmahe\n\n► My Website: \nhttps://vdjmahe.blogspot.com \n👉( https://www.vdjmahe.com )\n\nBest Regard \n- VDJ Mahe👉",
        "thumbnails": {
          "default": {"url": "https://i.ytimg.com/vi/89DfMhkEqh0/default.jpg", "width": 120, "height": 90},
          "medium": {"url": "https://i.ytimg.com/vi/89DfMhkEqh0/mqdefault.jpg", "width": 320, "height": 180},
          "high": {"url": "https://i.ytimg.com/vi/89DfMhkEqh0/hqdefault.jpg", "width": 480, "height": 360},
          "standard": {"url": "https://i.ytimg.com/vi/89DfMhkEqh0/sddefault.jpg", "width": 640, "height": 480},
          "maxres": {"url": "https://i.ytimg.com/vi/89DfMhkEqh0/maxresdefault.jpg", "width": 1280, "height": 720}
        },
        "channelTitle": "Bollywood Music - Topic",
        "playlistId": "PLcRN7uK9CFpPkvCc-08tWOQo6PAg4u0lA",
        "position": 0,
        "resourceId": {"kind": "youtube#video", "videoId": "89DfMhkEqh0"}
      }
    }, {
      "kind": "youtube#playlistItem",
      "etag": "WxwqcQQefYl9YEyqN5ZHhardt5I",
      "id": "UExjUk43dUs5Q0ZwUGt2Q2MtMDh0V09RbzZQQWc0dTBsQS4yOEI1MkNFMURCRTM0NUYz",
      "snippet": {
        "publishedAt": "2020-08-26T00:54:26Z",
        "channelId": "UCTjwvQhUQZCWTc2KcIPUofg",
        "title": "O mere dil ke chain kumar sanu ... MIX",
        "description": "SUBSCRIBE MY CHANNEL PLZZ🙏🙏\nHINDI SONG\r\nREMIX SONG\r\nBOLLYWOOD SONG\r\nSADABAHAR GAANE\nMy favourite song",
        "thumbnails": {
          "default": {"url": "https://i.ytimg.com/vi/vxjOU0ZTPF4/default.jpg", "width": 120, "height": 90},
          "medium": {"url": "https://i.ytimg.com/vi/vxjOU0ZTPF4/mqdefault.jpg", "width": 320, "height": 180},
          "high": {"url": "https://i.ytimg.com/vi/vxjOU0ZTPF4/hqdefault.jpg", "width": 480, "height": 360},
          "standard": {"url": "https://i.ytimg.com/vi/vxjOU0ZTPF4/sddefault.jpg", "width": 640, "height": 480},
          "maxres": {"url": "https://i.ytimg.com/vi/vxjOU0ZTPF4/maxresdefault.jpg", "width": 1280, "height": 720}
        },
        "channelTitle": "Bollywood Music - Topic",
        "playlistId": "PLcRN7uK9CFpPkvCc-08tWOQo6PAg4u0lA",
        "position": 1,
        "resourceId": {"kind": "youtube#video", "videoId": "vxjOU0ZTPF4"}
      }
    }, {
      "kind": "youtube#playlistItem",
      "etag": "NshATBf927_1utFa5pF4FfBSjpk",
      "id": "UExjUk43dUs5Q0ZwUGt2Q2MtMDh0V09RbzZQQWc0dTBsQS41RTU3NTEzNEVCNDgzODg5",
      "snippet": {
        "publishedAt": "2020-08-26T00:54:26Z",
        "channelId": "UCTjwvQhUQZCWTc2KcIPUofg",
        "title": "Pyar Deewana Hota Hai - Kati Patang - Rajesh Khanna, Asha Parekh - Superhit Old Hindi Song",
        "description": "Watch this super hit romantic old Hindi song Pyar Deewana Hota Hai sung by Kishore Kumar from classic blockbuster film Kati Patang (1970) starring Rajesh Khanna & Asha Parekh. Music composed by R.D Burman, and Lyrics are penned by Anand Bakshi. Other Cast include: Prem Chopra, Bindu, Nasir Hussain, Madan Puri.\n\nShare on Facebook - http://goo.gl/PQu7rS\nTweet about this - http://goo.gl/mKjU45\n\n\n\nFollow us G+ http://plus.google.com/+rajshri\n\nLike us on Facebook - https://www.facebook.com/rajshri\n\nFollow us on Twitter - https://twitter.com/Rajshri\n\nFollow us on Pinterest - http://www.pinterest.com/rajshrivideos\n\nVisit Rajshri's Website - http://www.rajshri.com Subscribe to Rajshri - https://bit.ly/2NFOiwm\n\nSubscribe To Our Channel : http://bit.ly/SubscribeToRajshri\n\nFollow us on G+ http://plus.google.com/+rajshri\n\nLike us on Facebook - https://www.facebook.com/rajshri\n\nFollow us on Twitter - https://twitter.com/Rajshri\n\nFollow us on Pinterest - http://www.pinterest.com/rajshrivideos\n\nVisit Rajshri's Website - http://www.rajshri.com",
        "thumbnails": {
          "default": {"url": "https://i.ytimg.com/vi/lslZptXok8o/default.jpg", "width": 120, "height": 90},
          "medium": {"url": "https://i.ytimg.com/vi/lslZptXok8o/mqdefault.jpg", "width": 320, "height": 180},
          "high": {"url": "https://i.ytimg.com/vi/lslZptXok8o/hqdefault.jpg", "width": 480, "height": 360},
          "standard": {"url": "https://i.ytimg.com/vi/lslZptXok8o/sddefault.jpg", "width": 640, "height": 480},
          "maxres": {"url": "https://i.ytimg.com/vi/lslZptXok8o/maxresdefault.jpg", "width": 1280, "height": 720}
        },
        "channelTitle": "Bollywood Music - Topic",
        "playlistId": "PLcRN7uK9CFpPkvCc-08tWOQo6PAg4u0lA",
        "position": 2,
        "resourceId": {"kind": "youtube#video", "videoId": "lslZptXok8o"}
      }
    }, {
      "kind": "youtube#playlistItem",
      "etag": "FVZRLuhu-2zmj2Az_QRpHrbrnsQ",
      "id": "UExjUk43dUs5Q0ZwUGt2Q2MtMDh0V09RbzZQQWc0dTBsQS5DOTkwM0FDQUU0M0UzRUU3",
      "snippet": {
        "publishedAt": "2020-08-26T00:54:26Z",
        "channelId": "UCTjwvQhUQZCWTc2KcIPUofg",
        "title": "Yeh Jo Mohabbat Hai  - Kati Patang - Rajesh Khanna Songs - Old Hindi Songs",
        "description": "Enjoy this super hit classic romantic song Yeh Jo Mohabbat Hai sung by Kishore Kumar from classic Bollywood romantic movie Kati Patang (1970) starring Rajesh Khanna & Asha Parekh in the lead. Music directed by R.D Burman, and Lyrics are penned by Anand Bakshi. Other Cast include : Prem Chopra, Bindu, Nasir Hussain, Madan Puri.\n\nShare on Facebook - http://goo.gl/OnJ70A\nTweet about this - http://goo.gl/nEY8cg\n\n\n\nFollow us G+ http://plus.google.com/+rajshri\n\nLike us on Facebook - https://www.facebook.com/rajshri\n\nFollow us on Twitter - https://twitter.com/Rajshri\n\nFollow us on Pinterest - http://www.pinterest.com/rajshrivideos\n\nVisit Rajshri's Website - http://www.rajshri.com Subscribe to Rajshri - https://bit.ly/2NFOiwm\n\nSubscribe To Our Channel : http://bit.ly/SubscribeToRajshri\n\nFollow us on G+ http://plus.google.com/+rajshri\n\nLike us on Facebook - https://www.facebook.com/rajshri\n\nFollow us on Twitter - https://twitter.com/Rajshri\n\nFollow us on Pinterest - http://www.pinterest.com/rajshrivideos\n\nVisit Rajshri's Website - http://www.rajshri.com",
        "thumbnails": {
          "default": {"url": "https://i.ytimg.com/vi/YIWX9vCffms/default.jpg", "width": 120, "height": 90},
          "medium": {"url": "https://i.ytimg.com/vi/YIWX9vCffms/mqdefault.jpg", "width": 320, "height": 180},
          "high": {"url": "https://i.ytimg.com/vi/YIWX9vCffms/hqdefault.jpg", "width": 480, "height": 360}
        },
        "channelTitle": "Bollywood Music - Topic",
        "playlistId": "PLcRN7uK9CFpPkvCc-08tWOQo6PAg4u0lA",
        "position": 3,
        "resourceId": {"kind": "youtube#video", "videoId": "YIWX9vCffms"}
      }
    }, {
      "kind": "youtube#playlistItem",
      "etag": "IeWBle0NZD04OT21tXPmBoCzolo",
      "id": "UExjUk43dUs5Q0ZwUGt2Q2MtMDh0V09RbzZQQWc0dTBsQS44NTg2MDUwNTQ2MkRFODI5",
      "snippet": {
        "publishedAt": "2020-08-26T00:54:26Z",
        "channelId": "UCTjwvQhUQZCWTc2KcIPUofg",
        "title": "Namak halaal jawani janeman haseen dilruba remix",
        "description": "Namak halaal jawani janeman haseen dilruba remix",
        "thumbnails": {
          "default": {"url": "https://i.ytimg.com/vi/0Y6hr6112xI/default.jpg", "width": 120, "height": 90},
          "medium": {"url": "https://i.ytimg.com/vi/0Y6hr6112xI/mqdefault.jpg", "width": 320, "height": 180},
          "high": {"url": "https://i.ytimg.com/vi/0Y6hr6112xI/hqdefault.jpg", "width": 480, "height": 360},
          "standard": {"url": "https://i.ytimg.com/vi/0Y6hr6112xI/sddefault.jpg", "width": 640, "height": 480},
          "maxres": {"url": "https://i.ytimg.com/vi/0Y6hr6112xI/maxresdefault.jpg", "width": 1280, "height": 720}
        },
        "channelTitle": "Bollywood Music - Topic",
        "playlistId": "PLcRN7uK9CFpPkvCc-08tWOQo6PAg4u0lA",
        "position": 4,
        "resourceId": {"kind": "youtube#video", "videoId": "0Y6hr6112xI"}
      }
    }], "latestSongs": [{
      "kind": "youtube#playlistItem",
      "etag": "Dl6gofHrYxHLODO9ED_rRvDoIOU",
      "id": "UExGZ3F1TG5MNTlha0EyUGZsRnBlUUc5TDAxVkZnOTB3Uy4zNTEyRDM0NENEQThDMUNC",
      "snippet": {
        "publishedAt": "2020-08-26T09:40:34Z",
        "channelId": "UC-9-kyTW8ZkZNDHQJ6FgpwQ",
        "title": "BTS (방탄소년단) 'Dynamite' Official MV",
        "description": "BTS (방탄소년단) 'Dynamite' Official MV\n\n\nCredits:\nDirector: Yong Seok Choi (Lumpens)\nAssistant Director: Jihye Yoon (Lumpens)\n\nDirector of Photography: Hyunwoo Nam (GDW)\nB Camera Operator: Eumko\nFocus Puller: Sangwoo Yun, Youngwoo Lee\n2nd AC: Eunki Kim\n3rd AC: Kyuwon Seo\nDIT: Eunil Lee\n\nGaffer: Song Hyunsuk\nLighting Crew: Choi Jung Hyun, Hwang Uigyu, Kim Hyun Ju, Park Cheonil, Park Yeonghwan, Yeom Jaehyeok\n\nJimmy Jib Operator: Youngjung Kim\nJimmy Jib Assistant: Hyun in Kim, Sung Hoon Kim\n\nArt Director: Bona Kim, Jinsil Park (MU:E)\nAssistant Art Team: Yeri Kang (MU:E)\nArt-team Manager: ilho Heo (MU:E)\n\nProducer: Emma Sungeun Kim (GE Production)\nLocation Manager: Ji Hoon Han\n\nVFX STUDIO: PLASTIC BEACH\nVFX Supervisor: Ohzeon\nVFX Assistant Supervisor: Jojeem\nVFX Project Manager: Chanyoung Song, Jieun Jeong\nVFX Producer: Kyutae Jang\n3D Artist: Kwangwon Lee, Doyeon Kim, Jeonghwa Lee, Jiwon Jeon\n2D Artist: Gihoon Jang, Hyunjun Lee\n\nVisual Creative: Nu Kim, Sabinne Cheon, Lee Sun Kyoung, Kim Ga Eun, Jung Su Jung\nBrand Experience Design: Kris Seongmin Gim, Hyeri Lee \nPerformance Directing: Son Sung Deuk, Lee Ga Hun, Lee Byung Eun, Hyewon Park\nArtist Management: Kim Shin Gyu, Kim Su Bin, Kim Dae Young, Park Jun Tae, An Da Sol, Ahn Jong Hun, Yun Tae Woong, Lee Seung Byeong, Lee Jung Min\n\nBig Hit Entertainment. Rights are reserved selectively in the video. Unauthorized reproduction is a violation of applicable laws. Manufactured by Big Hit Entertainment, Seoul, Korea.\n\nConnect with BTS: \nhttps://ibighit.com/bts \nhttp://twitter.com/BTS_bighit\nhttp://twitter.com/BTS_twt \nhttp://www.facebook.com/bangtan.official \nhttps://www.youtube.com/user/BANGTANTV \nhttp://instagram.com/BTS.bighitofficial \nhttps://channels.vlive.tv/FE619 \nhttps://www.tiktok.com/@bts_official_bighit\nhttps://weverse.onelink.me/qt3S/94808190\nhttps://www.weibo.com/BTSbighit\nhttps://www.weibo.com/BTSmembers \nhttp://i.youku.com/btsofficial \nhttp://btsblog.ibighit.com\n\n\n#BTS #방탄소년단 #BTS_Dynamite #Dynamite #MV",
        "thumbnails": {
          "default": {"url": "https://i.ytimg.com/vi/gdZLi9oWNZg/default.jpg", "width": 120, "height": 90},
          "medium": {"url": "https://i.ytimg.com/vi/gdZLi9oWNZg/mqdefault.jpg", "width": 320, "height": 180},
          "high": {"url": "https://i.ytimg.com/vi/gdZLi9oWNZg/hqdefault.jpg", "width": 480, "height": 360},
          "standard": {"url": "https://i.ytimg.com/vi/gdZLi9oWNZg/sddefault.jpg", "width": 640, "height": 480},
          "maxres": {"url": "https://i.ytimg.com/vi/gdZLi9oWNZg/maxresdefault.jpg", "width": 1280, "height": 720}
        },
        "channelTitle": "Music",
        "playlistId": "PLFgquLnL59akA2PflFpeQG9L01VFg90wS",
        "position": 0,
        "resourceId": {"kind": "youtube#video", "videoId": "gdZLi9oWNZg"}
      }
    }, {
      "kind": "youtube#playlistItem",
      "etag": "evgfQzvjDaLhJMDe97-y7BXdBS0",
      "id": "UExGZ3F1TG5MNTlha0EyUGZsRnBlUUc5TDAxVkZnOTB3Uy4yMkZFNzM1NjY4MzEzODJC",
      "snippet": {
        "publishedAt": "2020-08-26T09:40:34Z",
        "channelId": "UC-9-kyTW8ZkZNDHQJ6FgpwQ",
        "title": "Drake - Laugh Now Cry Later (Official Music Video) ft. Lil Durk",
        "description": "Laugh Now Cry Later ft. Lil Durk available everywhere now: http://drake.lnk.to/lncl\n\nConnect with Drake:\nhttps://www.instagram.com/champagnepapi \nhttps://www.facebook.com/Drake \nhttps://twitter.com/drake \nhttps://www.drakeofficial.com \n\nDirector: Dave Meyers\nExecutive Producer: Nathan Scherrer\nProduction Company: Freenjoy\n\nProducers: Nathan Scherrer & Matt O'Connor\nDirector of Photography: Scott Cunningham \nProduction Designer: Eric Shoonover\n\nEditor: Greg Scruton at Cabin Edit\nColourist: Stefan Sonnenfeld at Company3\nVFX Supervisor: Les Umberger at Mod Creations\nSound Mix: Tom Paolantonio at Lime Studios\n\nLyrics:\n\nSometimes we laugh and sometimes we cry but I guess you know now\nBaby\nI took a half and she took the whole thing slow down\nBaby\nWe took a trip now we on your block and it’s like a ghost town\nBaby \nWhere do these niggas be at when they say they doing all this and all that\nTired of beefing of bums you can’t even pay me enough me to react \n\nBeen waking up in the crib and sometimes I don’t even know where I’m at\nPlease don’t play that niggas songs in this party I can’t even listen to that\nAnytime that I run into somebody it must be a victory lap eh \nShawty come sit on my lap eh\nThey saying Drizzy just snap\nDistance between us is not like a store this isn’t a close able gap\nI’ve seen some niggas attack\nAnd don’t end up making it back\n\nI know that they at the crib going crazy down bad what they had didn’t last Damn baby\nSometimes we laugh and sometimes we cry but I guess you know now\nbaby\nI took a half and she took the whole thing slow down\nBaby\nWe took a trip now we on your block and it’s like a ghost town\nBaby\nWhere do these niggas be at when they say they doing all this and all that \n\nI’m in the trenches relax\nCan you not play that lil boy in the club cause we do not listen to rats\nWe in the line I buy her a wig she tellin me Tay is the best\nPoint at that nigga who act like a killer\nBut you only want from the neck\nI’m like the baby I’m not just a rapper you play with me you gon get stressed\nOoooh\nBring Drake to the hood\nSurround Drake around Drakes\nEven though I got a case\nImma do what it takes\n\nAnd I never been embraced\nAnd the moneys hard to make\nSo I bet they on they face right\n\nI know that they at the crib going crazy down bad what they had didn’t last Damn baby\nSometimes we laugh and sometimes we cry but I guess you know now\nbaby\nI took a half and she took the whole thing slow down\nBaby\nWe took a trip now we on your block and it’s like a ghost town\nBaby\nWhere do these niggas be at when they say they doing all this and all that \n\nWhen he tell the story that’s not how it went\nKnow they be lying 100 percent \nMove out the Ritz forgot bout the Bent\nValet just called to tell me come get it\nI knocked that boy off  I don’t want no credit\nIf it Was me they wouldn’t regret it\nleft me for dead and now they want dead it\nheart is still beating\nMy niggas still eating\nThe backyard it look like the Garden of Eden\nPillow talk with Me she spilling the tea and then shawty came back and said she didn’t mean it\nIts hard to believe it\n\nI know that they at the crib going crazy down bad what they had didn’t last Damn baby\nSometimes we laugh and sometimes we cry but I guess you know now\nbaby\nI took a half and she took the whole thing slow down\nBaby\nWe took a trip now we on your block and it’s like a ghost town\nBaby\nWhere do these niggas be at when they say they doing all this and all that\n\n#Drake #LilDurk #LaughNowCryLater",
        "thumbnails": {
          "default": {"url": "https://i.ytimg.com/vi/JFm7YDVlqnI/default.jpg", "width": 120, "height": 90},
          "medium": {"url": "https://i.ytimg.com/vi/JFm7YDVlqnI/mqdefault.jpg", "width": 320, "height": 180},
          "high": {"url": "https://i.ytimg.com/vi/JFm7YDVlqnI/hqdefault.jpg", "width": 480, "height": 360},
          "standard": {"url": "https://i.ytimg.com/vi/JFm7YDVlqnI/sddefault.jpg", "width": 640, "height": 480},
          "maxres": {"url": "https://i.ytimg.com/vi/JFm7YDVlqnI/maxresdefault.jpg", "width": 1280, "height": 720}
        },
        "channelTitle": "Music",
        "playlistId": "PLFgquLnL59akA2PflFpeQG9L01VFg90wS",
        "position": 1,
        "resourceId": {"kind": "youtube#video", "videoId": "JFm7YDVlqnI"}
      }
    }, {
      "kind": "youtube#playlistItem",
      "etag": "gkIK1ahSvrhORG5M-QXx4JwXago",
      "id": "UExGZ3F1TG5MNTlha0EyUGZsRnBlUUc5TDAxVkZnOTB3Uy5FOEUyNjA1QjU0NjdCOUEy",
      "snippet": {
        "publishedAt": "2020-08-26T09:40:34Z",
        "channelId": "UC-9-kyTW8ZkZNDHQJ6FgpwQ",
        "title": "Migos - Need It (Official Video) ft. YoungBoy Never Broke Again",
        "description": "Listen to Migos \"Need It\" featuring NBA Youngboy here: https://QualityControl.lnk.to/NeedIt \n\nFollow Migos on socials:\nhttps://instagram.com/migos\nhttps://facebook.com/THEMigosAtl\nhttps://twitter.com/migos\n\nLyrics:\n\n[Intro: Offset & YoungBoy Never Broke Again]\nLet's go\nI'm surrounded by some real niggas (Lil Top)\nHey (Yeah), yessir (They won't do it), Buddah Bless this beat\n\n[Chorus: Offset & YoungBoy Never Broke Again]\nI said I need it\nThis Draco undefeated (Rrah)\nHit your block and then I bleed it (Yeah)\nGo long, these bullets, he receive it\nI can't see it (I can't)\nMy wrist look like a snow cone, make her eat it (Woah)\nOnce I see her, I give her that dope dick just like it's ether\nThen I leave her, I can't get caught up, I can't be on Cheaters\nThere go them people, you know what it is\nGo put the dope up 'fore they breach us\nBefore they breach us\nI'ma get out this bitch and I'm strikin', I'm throwin' my heater\nWhole lotta money, and still they keep comin'\nForever I'm livin' my life like a bleeder (Slime)\n\n[Verse 1: Offset, YoungBoy Never Broke Again & Both]\nDope boy (Dope)\nI'm straight out the Nawf, I came up sellin' hard (Hard)\nHeroin (Dawg)\nI'm straight from the Nawf, I went, bought me a don (the Nawf)\nI jumped off the porch and went bought me a gun\nWe boardin' the jet 'cause my dawg got a warrant\nWe don't give a fuck, bring the stick, where we goin'?\nI'm booted up off that Molly, I cover my gun\nThis stick got a ELO, my aim on point (On point)\nShootin' that Glock give me pain in my joints (Pew-pew)\nWe shoot a fifty-round drum, honey bun (Bun)\nI want two thousand, I want both of they tongues\nI know how to handle it, bust on my damages\nThese niggas can't run, we gon' peel everyone\nYou know where I'm from, give a fuck how you come\nGot a stick in the car and it sound like a bomb (Boom)\nI came in this bitch with a mil' worth of cash (M)\nLike Bandicoot, we 'bout to crash (Crash)\nNo remorse, I put five to your dash (Bitch)\nOff the porch, bought a Porsche, then I drag\nOff the building, them young niggas slide (Slide)\nPut up 30, now you do the math (Fool)\nIf you seek on my son, I won't hide (I won't hide)\nBullets rain, we give him a bath\n\n[Chorus: Offset & YoungBoy Never Broke Again]\nI said I need it (Ha)\nThis Draco undefeated (Rrah)\nHit your block and then I bleed it (Yeah)\nGo long, these bullets, he receive it\nI can't see it (I can't)\nMy wrist look like a snow cone, make her eat it (Woah)\nOnce I see her, I give her that dope dick just like it's ether\nThen I leave her, I can't get caught up, I can't be on Cheaters\nThere go them people, you know what it is\nGo put the dope up 'fore they breach us\nBefore they breach us\nI'ma get out this bitch and I'm strikin', I'm throwin' my heater\nWhole lotta money, and still they keep comin'\nForever I'm livin' my life like a bleeder\n\n[Verse 2: Takeoff & Quavo]\nFrom the bando to bandit, we makin' it happen\nI like a bitch bougie but keep me a ratchet\nWinning's fantastic, Cartiers straight out the plastic\nDiamonds in all of my glasses (Chill)\nI'm fuckin' more bitches than Magic\nStraight out the basket, they say them young niggas havin' (Hey)\nThe money too old, it's growin' maggots, nasty\nFinger-fuck it with the Magnum (MAG)\nI'm thinkin' they forgot the way we paved\nWe been givin' too many niggas these passes (Too many)\nFuck it, drop a bag and cash it (Fuck it)\nWho gonna press 'em the fastest? (Who?)\nExtendo barrel elastic, new attachment, shit get tactic (Tactical)\nThey stole the flow (Go), now they tryna run off with the fashion\nMy neck, I freeze it (Ice), just give us the reason\nMake that smoke look easy (Ooh-ooh, easy, woo)\nCouple blue hunnids with the stones, it's bleedin' (Cash, bleedin')\nWhat's your issue? (Woo) If you got a trigger, just squeeze it (Bah, squeeze it, bah, squeeze it)\nWhole block outside, it's a street fest\nAin't no peace treaty (Nah)\nThese stones around my Jesus, they ain't treated (No)\nThey got me heated (Hot)\nDon't play with the gang (Ooh-ooh), they know that we be undefeated\nI get to squeezin' (I get to squeezin')\nWhen we talkin' beef, they say that they vegan\nJumpin', no reason (Jumpin', no reason, woo)\nWe coppin' more ice and tuck in the freezer (Ice)\n\n[Chorus: Offset, YoungBoy Never Broke Again & Quavo]\nI said I need it\nThis Draco undefeated (Rrah)\nHit your block and then I bleed it (Yeah)\nGo long, these bullets, he receive it (Oh-oh)\nI can't see it (I can't)\nMy wrist look like a snow cone (Oh-oh), make her eat it\nOnce I see her, I give her that dope dick just like it's ether (Oh-oh)\nThen I leave her, I can't get caught up, I can't be on Cheaters\nThere go them people (Them people), you know what it is\nGo put the dope up 'fore they breach us\nBefore they breach us\nI'ma get out this bitch and I'm strikin', I'm throwin' my heater\nWhole lotta money, and still they keep comin'\nForever I'm livin' my life like a bleeder (Slime)\n   \n#Migos #NBAYoungboy #NeedIt\n\nMusic video by Migos performing Need It. © 2020 Quality Control Music, LLC, under exclusive licen...",
        "thumbnails": {
          "default": {"url": "https://i.ytimg.com/vi/u0LaoQks5mY/default.jpg", "width": 120, "height": 90},
          "medium": {"url": "https://i.ytimg.com/vi/u0LaoQks5mY/mqdefault.jpg", "width": 320, "height": 180},
          "high": {"url": "https://i.ytimg.com/vi/u0LaoQks5mY/hqdefault.jpg", "width": 480, "height": 360},
          "standard": {"url": "https://i.ytimg.com/vi/u0LaoQks5mY/sddefault.jpg", "width": 640, "height": 480},
          "maxres": {"url": "https://i.ytimg.com/vi/u0LaoQks5mY/maxresdefault.jpg", "width": 1280, "height": 720}
        },
        "channelTitle": "Music",
        "playlistId": "PLFgquLnL59akA2PflFpeQG9L01VFg90wS",
        "position": 2,
        "resourceId": {"kind": "youtube#video", "videoId": "u0LaoQks5mY"}
      }
    }, {
      "kind": "youtube#playlistItem",
      "etag": "x2yj96HrRM2I6yLblUFYO1L0c-4",
      "id": "UExGZ3F1TG5MNTlha0EyUGZsRnBlUUc5TDAxVkZnOTB3Uy5BMzIyOTlEQTg3RjYxQkM2",
      "snippet": {
        "publishedAt": "2020-08-26T09:40:34Z",
        "channelId": "UC-9-kyTW8ZkZNDHQJ6FgpwQ",
        "title": "Cardi B - WAP feat. Megan Thee Stallion [Official Music Video]",
        "description": "Cardi B - WAP feat. Megan Thee Stallion\nStream/Download - https://CardiB.lnk.to/WAP\n\r\nSubscribe for more official content from Cardi B: https://CardiB.lnk.to/Subscribe\r\n\r\nFollow Cardi B\r\nhttp://cardibofficial.com\r\nhttp://Twitter.com/IAmCardiB\r\nhttp://Facebook.com/IAmCardiB\r\nhttp://Instagram.com/f/iamcardib\r\nhttp://Soundcloud.com/IAmCardiB\r\n\r\nExclusive Bardi Gang merchandise available here: http://smarturl.it/BardiGangMerchYT\r\n\r\nLABEL\nAtlantic Records\nCommissioner: Kareem Johnson / OverScene LLC\nSVP / Head of Marketing:  Marsha St. Hubert\n \nPRODUCTION\nProd Co: Boy in the Castle\nDirector: Colin Tilley\nCreative Director: Kollin Carter & Patientce Foster\nExec Producer: Jamee Ranta\nProducer: Whitney Jackson\nDirector of Photography: Elias Talbot\n1st AD: Ev Salomon \nEditor: Vinnie Hobbs\nBeauty: Sunset Edit\n\nChoreography: J.K. Creatives, Inc.\nChoreographer: JaQuel Knight\nAssistant Choreographers : Darina Littleton and Ashley Seldon\n \nCARDI B GLAM\nStyling: Kollin Carter\nStyling Asst: Jennifer Udechukwu\nHair: Tokyo Stylez\nMakeup: Erika Roman\nNails: Jenny Bui (Nails on 7th) \n \nMEGAN THEE STALLION GLAM\nStyling: EJ King\nHair: Kellon Deryck\nMakeup: Megan Thee Stallion\nNails: Coca Michelle\nThe official YouTube channel of Atlantic Records artist Cardi B. Subscribe for the latest music videos, performances, and more.",
        "thumbnails": {
          "default": {"url": "https://i.ytimg.com/vi/hsm4poTWjMs/default.jpg", "width": 120, "height": 90},
          "medium": {"url": "https://i.ytimg.com/vi/hsm4poTWjMs/mqdefault.jpg", "width": 320, "height": 180},
          "high": {"url": "https://i.ytimg.com/vi/hsm4poTWjMs/hqdefault.jpg", "width": 480, "height": 360},
          "standard": {"url": "https://i.ytimg.com/vi/hsm4poTWjMs/sddefault.jpg", "width": 640, "height": 480}
        },
        "channelTitle": "Music",
        "playlistId": "PLFgquLnL59akA2PflFpeQG9L01VFg90wS",
        "position": 3,
        "resourceId": {"kind": "youtube#video", "videoId": "hsm4poTWjMs"}
      }
    }, {
      "kind": "youtube#playlistItem",
      "etag": "clVtUW8H_GlhzbtTAdlI1L4tnWI",
      "id": "UExGZ3F1TG5MNTlha0EyUGZsRnBlUUc5TDAxVkZnOTB3Uy41M0Y0NDU1RDUzNUY5NUIw",
      "snippet": {
        "publishedAt": "2020-08-26T09:40:34Z",
        "channelId": "UC-9-kyTW8ZkZNDHQJ6FgpwQ",
        "title": "YoungBoy Never Broke Again - Kacey talk",
        "description": "YoungBoy Never Broke Again - \nStill Flexin, Still Steppin OUT NOW!\nStream/Download: https://youngboy.lnk.to/StillFlexinStillSteppinID \n\nSubscribe for more official content from YoungBoy NBA: \nhttps://youngboy.lnk.to/Subscribe\n\nConnect with YoungBoy Never Broke Again:\nhttp://www.youngboynba.com\nhttps://www.facebook.com/nbayoungboy\nhttps://www.twitter.com/GGYOUNGBOY\nhttps://www.instagram.com/nba_youngboy\nhttps://www.soundcloud.com/nba-youngboy\n\nThe official YouTube channel of Atlantic Records artist YoungBoy Never Broke Again. Subscribe for the latest music videos, performances, and more.\n\n#YoungBoyNeverBrokeAgain",
        "thumbnails": {
          "default": {"url": "https://i.ytimg.com/vi/0C80BSgjb8M/default.jpg", "width": 120, "height": 90},
          "medium": {"url": "https://i.ytimg.com/vi/0C80BSgjb8M/mqdefault.jpg", "width": 320, "height": 180},
          "high": {"url": "https://i.ytimg.com/vi/0C80BSgjb8M/hqdefault.jpg", "width": 480, "height": 360},
          "standard": {"url": "https://i.ytimg.com/vi/0C80BSgjb8M/sddefault.jpg", "width": 640, "height": 480},
          "maxres": {"url": "https://i.ytimg.com/vi/0C80BSgjb8M/maxresdefault.jpg", "width": 1280, "height": 720}
        },
        "channelTitle": "Music",
        "playlistId": "PLFgquLnL59akA2PflFpeQG9L01VFg90wS",
        "position": 4,
        "resourceId": {"kind": "youtube#video", "videoId": "0C80BSgjb8M"}
      }
    }], "romanticSongs": [{
      "kind": "youtube#playlistItem",
      "etag": "Tcen2rms-t2pxjGs0VxYzF1gPWk",
      "id": "UEw2NEc2ajhlUE51cmVNOFlDS3k1blJGeXpZZjhJMm5veS5FQUY2Qzk4RUFDN0ZFRkZF",
      "snippet": {
        "publishedAt": "2019-07-12T06:15:55Z",
        "channelId": "UC-atxQX5dauuJWQYvImLovQ",
        "title": "Ed Sheeran - Thinking Out Loud [Official Video]",
        "description": "Tickets for the Divide tour here - http://www.edsheeran.com/tour\n\nThe official video for 'Thinking Out Loud', Ed learnt to dance! \n'x', available to buy via iTunes here: http://smarturl.it/x-itunesdlx\nFeaturing and taught by @dance10Brittany and @dance10Paul\n\nSubscribe to my channel: http://bit.ly/SubscribeToEdSheeran\nGo behind the scenes of the video: http://bit.ly/ThinkingOutLoudBTS\nHear the rest of my album, 'x': http://bit.ly/XOfficialPlaylist\nAudio of 'Thinking Out Loud': http://youtu.be/WpyfrixXBqU\n\nHey German fans! View here: http://smarturl.it/ThinkingOutLoud-DE\n\nBuy on CD & Vinyl here: http://smarturl.it/x-album\nBuy on Google Play: http://smarturl.it/x-googleplaydlx\n\nFollow me on...\nFacebook: http://www.facebook.com/EdSheeranMusic\nTwitter: http://twitter.com/edsheeran\nInstagram: http://instagram.com/teddysphotos\nOfficial Website: http://edsheeran.com\n\n** The best artists, the best albums, the best price **\nGet the FREE app now & be the first to discover TOP MUSIC DEALS\nhttp://Smarturl.it/top-music-deal",
        "thumbnails": {
          "default": {"url": "https://i.ytimg.com/vi/lp-EO5I60KA/default.jpg", "width": 120, "height": 90},
          "medium": {"url": "https://i.ytimg.com/vi/lp-EO5I60KA/mqdefault.jpg", "width": 320, "height": 180},
          "high": {"url": "https://i.ytimg.com/vi/lp-EO5I60KA/hqdefault.jpg", "width": 480, "height": 360},
          "standard": {"url": "https://i.ytimg.com/vi/lp-EO5I60KA/sddefault.jpg", "width": 640, "height": 480},
          "maxres": {"url": "https://i.ytimg.com/vi/lp-EO5I60KA/maxresdefault.jpg", "width": 1280, "height": 720}
        },
        "channelTitle": "#RedMusic: LoveMusic",
        "playlistId": "PL64G6j8ePNureM8YCKy5nRFyzYf8I2noy",
        "position": 0,
        "resourceId": {"kind": "youtube#video", "videoId": "lp-EO5I60KA"}
      }
    }, {
      "kind": "youtube#playlistItem",
      "etag": "0xr0-eVeV5ju_LdfLbkE-r9t544",
      "id": "UEw2NEc2ajhlUE51cmVNOFlDS3k1blJGeXpZZjhJMm5veS4zMEQ1MEIyRTFGNzhDQzFB",
      "snippet": {
        "publishedAt": "2017-11-09T18:54:48Z",
        "channelId": "UC-atxQX5dauuJWQYvImLovQ",
        "title": "Ed Sheeran - Perfect (Official Music Video)",
        "description": "Tickets for the Divide tour here - http://www.edsheeran.com/tour\n\n🎧: https://ad.gt/yt-perfect\n💰: https://atlanti.cr/yt-album\nSubscribe to Ed's channel: http://bit.ly/SubscribeToEdSheeran\n\nFollow Ed on...\nFacebook: http://www.facebook.com/EdSheeranMusic\nTwitter: http://twitter.com/edsheeran\nInstagram: http://instagram.com/teddysphotos\nOfficial Website: http://edsheeran.com\n\nDirector | dp Jason Koenig\nProducer: Honna Kimmerer\nStarring: Ed Sheeran & Zoey Deutch \nDirector of Photography: Johnny Valencia\nProduction Company: Anonymous Content\nExec Producer: Nina Soriano\nProduction Manager: Doug Hoff\nCommissioner: Dan Curwin\nProduction Designer: John Lavin\nLead Casting: Amy Hubbard \n \nWritten by: Jason Koenig, Ed Sheeran, Jenny Koenig, Andrew Kolvet, Murray Cummings\n\nEdited by: Jason Koenig & Johnny Valencia\nVFX: Ian Hubert\nGraphic design by Chris Ballasciotes\n\nCast: Bo Valencia, Dennis Ranalta, Arthur Pauli\n \nSki Cinematography: Corey Koniniec\nSpecialty Camera op: Ryan Haug\n1st AC: Ryan Brown\n \n1st Assistant Director: Ole Zapatka\nArt Director: Klaus Hartl\nSnow fx: Lucien Stephenson\n\nGaffer: Thomas Berz\nStylist: Claudia Lajda\nHair & Makeup: Christel Thoresen\nAustrian Casting: Ursula Kiplinger\n \nAdditional VFX: Zoic\n\nSpecial Thanks to: The Hintertux Glacier, Austria;\nHohenhaus Tenne, and Hotel Neuhintertux",
        "thumbnails": {
          "default": {"url": "https://i.ytimg.com/vi/2Vv-BfVoq4g/default.jpg", "width": 120, "height": 90},
          "medium": {"url": "https://i.ytimg.com/vi/2Vv-BfVoq4g/mqdefault.jpg", "width": 320, "height": 180},
          "high": {"url": "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg", "width": 480, "height": 360},
          "standard": {"url": "https://i.ytimg.com/vi/2Vv-BfVoq4g/sddefault.jpg", "width": 640, "height": 480}
        },
        "channelTitle": "#RedMusic: LoveMusic",
        "playlistId": "PL64G6j8ePNureM8YCKy5nRFyzYf8I2noy",
        "position": 1,
        "resourceId": {"kind": "youtube#video", "videoId": "2Vv-BfVoq4g"}
      }
    }, {
      "kind": "youtube#playlistItem",
      "etag": "mTgHinXLQtFgb-EYm0_t8zN9QYo",
      "id": "UEw2NEc2ajhlUE51cmVNOFlDS3k1blJGeXpZZjhJMm5veS5CNzc3NkExNzJGNUI3RDY0",
      "snippet": {
        "publishedAt": "2020-07-30T18:29:21Z",
        "channelId": "UC-atxQX5dauuJWQYvImLovQ",
        "title": "Blake Rose - Lost (Live Session) [Official Video]",
        "description": "Listen to “Lost”: https://blakerose.lnk.to/lost \n\nFollow Blake Rose:\nhttps://www.instagram.com/BlakeRoseMusic\nhttps://www.facebook.com/BlakeRoseMusic\nhttps://twitter.com/BlakeRoseMusic\nhttps://www.tiktok.com/@blakerosemusic\n\n- Lost -\n\nComing in off a late night\nBut I’ve got no one to lay by \nYeah, what I would do just to kill the wire\nTelling me I’ve got to call\nBut living without you don’t feel right \nFrom the ‘75 playing the day by\nTo the cigarettes under the midnights \nYeah, maybe it won’t hurt to call\n\nOh yeah you gotta, you gotta, you gotta admit we were so dumb\nSo dumb \nOh baby how did we, how did we, how did we manage to mess this up? \nMess this up\n\nI’m wide awake \nMissing your face \nMissing your taste \nWishing you were lost with me \nNow I’m driving your way \nIn the middle of the rain \nWishing you were close to me \nNo I don’t wanna wait \nI don’t wanna say \nRemember what we used to be \nCoz I don’t wanna live that way \nSo tell me that it’s not too late \n\nPulling up on the one five \nTrying to get you off my mind \nBeen telling myself that it’s a waste of time \nBut maybe I’m dumb not to call \nCoz baby living without you ain’t right \nFrom stumbling Home after midnight \nTo seeing the same films a hundred times \nYeah maybe it won’t hurt to call \n\nOh yeah you gotta, you gotta, you gotta admit we were so dumb\nSo dumb \nOh baby how did we, how did we, how did we manage to mess this up? \nMess this up\n\nI’m wide awake \nMissing your face \nMissing your taste \nWishing you were lost with me \nNow I’m driving your way \nIn the middle of the rain \nWishing you were close to me \nNo I don’t wanna wait \nI don’t wanna say \nRemember what we used to be \nCoz I don’t wanna live that way \nSo tell me that it’s not too late \n\nSo lost for you \nSo lost for you\nSo lost for you\nSo tell me that it’s not too late \nSo lost for you \nSo lost for you\nSo lost for you\nSo tell me that it’s not too late \n\nI’m wide awake \nMissing your face \nMissing your taste \nWishing you were lost with me \nNow I’m driving your way \nIn the middle of the rain \nWishing you were close to me \nNo I don’t wanna wait \nI don’t wanna say \nRemember what we used to be \nCoz I don’t wanna live that way \nSo tell me that it’s not one big mistake\n\nMissing your face \nMissing your taste \nWishing you were lost with me \nNow I’m driving your way \nIn the middle of the rain \nWishing you were close to me \nNo I don’t wanna wait \nI don’t wanna say \nRemember what we used to be \nCoz I don’t wanna live that way \nSo tell me that it’s not too late \n\nSo lost for you \nSo lost for you\nSo lost for you\nSo tell me that it’s not too late \nSo lost for you \nSo lost for you\nSo lost for you\nSo tell me that it’s not too late\n\n#BlakeRose #Lost #Live",
        "thumbnails": {
          "default": {"url": "https://i.ytimg.com/vi/G4V-8mO_5d4/default.jpg", "width": 120, "height": 90},
          "medium": {"url": "https://i.ytimg.com/vi/G4V-8mO_5d4/mqdefault.jpg", "width": 320, "height": 180},
          "high": {"url": "https://i.ytimg.com/vi/G4V-8mO_5d4/hqdefault.jpg", "width": 480, "height": 360},
          "standard": {"url": "https://i.ytimg.com/vi/G4V-8mO_5d4/sddefault.jpg", "width": 640, "height": 480},
          "maxres": {"url": "https://i.ytimg.com/vi/G4V-8mO_5d4/maxresdefault.jpg", "width": 1280, "height": 720}
        },
        "channelTitle": "#RedMusic: LoveMusic",
        "playlistId": "PL64G6j8ePNureM8YCKy5nRFyzYf8I2noy",
        "position": 2,
        "resourceId": {"kind": "youtube#video", "videoId": "G4V-8mO_5d4"}
      }
    }, {
      "kind": "youtube#playlistItem",
      "etag": "v4XPF80ImKNx1HDYkA1j9btTj60",
      "id": "UEw2NEc2ajhlUE51cmVNOFlDS3k1blJGeXpZZjhJMm5veS4yNEVFNDRFQzIwRjFGRjhB",
      "snippet": {
        "publishedAt": "2020-08-26T05:29:17Z",
        "channelId": "UC-atxQX5dauuJWQYvImLovQ",
        "title": "John Legend - All of Me (Official Video)",
        "description": "\"All of Me\" by John Legend\nListen to John Legend: https://JohnLegend.lnk.to/listenYD\n\nSubscribe to the official John Legend YouTube channel: https://JohnLegend.lnk.to/subscribeYD\n\nWatch more John Legend videos: https://JohnLegend.lnk.to/listenYC/youtube\n\nFollow John Legend:\nFacebook: https://JohnLegend.lnk.to/followFI\nInstagram: https://JohnLegend.lnk.to/followII\nTwitter: https://JohnLegend.lnk.to/followTI\nWebsite: https://JohnLegend.lnk.to/followWI\nSpotify: https://JohnLegend.lnk.to/followSI\nYouTube: https://JohnLegend.lnk.to/subscribeYD\n\nChorus:\n'Cause all of me\nLoves all of you\nLove your curves and all your edges\nAll your perfect imperfections\nGive your all to me\nI'll give my all to you\nYou're my end and my beginnin'\nEven when I lose, I'm winnin'\n\n#JohnLegend #AllOfMe #OfficialVideo",
        "thumbnails": {
          "default": {"url": "https://i.ytimg.com/vi/450p7goxZqg/default.jpg", "width": 120, "height": 90},
          "medium": {"url": "https://i.ytimg.com/vi/450p7goxZqg/mqdefault.jpg", "width": 320, "height": 180},
          "high": {"url": "https://i.ytimg.com/vi/450p7goxZqg/hqdefault.jpg", "width": 480, "height": 360},
          "standard": {"url": "https://i.ytimg.com/vi/450p7goxZqg/sddefault.jpg", "width": 640, "height": 480},
          "maxres": {"url": "https://i.ytimg.com/vi/450p7goxZqg/maxresdefault.jpg", "width": 1280, "height": 720}
        },
        "channelTitle": "#RedMusic: LoveMusic",
        "playlistId": "PL64G6j8ePNureM8YCKy5nRFyzYf8I2noy",
        "position": 3,
        "resourceId": {"kind": "youtube#video", "videoId": "450p7goxZqg"}
      }
    }, {
      "kind": "youtube#playlistItem",
      "etag": "XoqE6ce1dqsNvxeenzM5atAq7lY",
      "id": "UEw2NEc2ajhlUE51cmVNOFlDS3k1blJGeXpZZjhJMm5veS40NzZCMERDMjVEN0RFRThB",
      "snippet": {
        "publishedAt": "2017-07-04T09:26:03Z",
        "channelId": "UC-atxQX5dauuJWQYvImLovQ",
        "title": "James Arthur - Say You Won't Let Go",
        "description": "►Listen to the new album YOU:\nhttps://jarthur.lnk.to/YOU \n\n\nJames Arthur 'Say you won't let go' \n\nGet the song here: https://smg.lnk.to/sayyouwontletgo \nStream it on Spotify: https://open.spotify.com/track/5uCax9HTNlzGyblStD3vDh  \nGet tickets: http://www.jamesarthurofficial.com/#live  \n\n-----------------------------------------------\n\nVisit James Arthur:\nhttps://www.facebook.com/jamesarthur\nhttps://www.twitter.com/jamesarthur23\nhttps://www.instagram.com/jamesarthurinsta23\nBest of James Arthur: https://goo.gl/PcpVdQ \nSubscribe here: https://goo.gl/yM9xqj\n\n-----------------------------------------------\n\nLyrics:\nI met you in the dark, you lit me up\nYou made me feel as though I was enough\nWe danced the night away, we drank too much\nI held your hair back when\nYou were throwing up\n\nThen you smiled over your shoulder\nFor a minute, I was stone-cold sober\nI pulled you closer to my chest\nAnd you asked me to stay over\nI said, I already told ya\nI think that you should get some rest\n\nI knew I loved you then\nBut you'd never know\n'Cause I played it cool when I was scared of letting go\nI know I needed you\nBut I never showed\nBut I wanna stay with you until we're grey and old\nJust say you won't let go\nJust say you won't let go\n\nI'll wake you up with some breakfast in bed\nI'll bring you coffee with a kiss on your head\nAnd I'll take the kids to school\nWave them goodbye\nAnd I'll thank my lucky stars for that night\n\nWhen you looked over your shoulder\nFor a minute, I forget that I'm older\nI wanna dance with you right now\nOh, and you look as beautiful as ever\nAnd I swear that everyday'll get better\nYou make me feel this way somehow\n\nI'm so in love with you\nAnd I hope you know\nDarling your love is more than worth its weight in gold\nWe've come so far my dear\nLook how we've grown\nAnd I wanna stay with you until we're grey and old\nJust say you won't let go\nJust say you won't let go\n\nI wanna live with you\nEven when we're ghosts\n'Cause you were always there for me when I needed you most\n\nI'm gonna love you till\nMy lungs give out\nI promise till death we part like in our vows\nSo I wrote this song for you, now everybody knows\nFinally it's just you and me till we're grey and old\nJust say you won't let go\nJust say you won't let go\n\nJust say you won't let go\nOh, just say you won't let go",
        "thumbnails": {
          "default": {"url": "https://i.ytimg.com/vi/0yW7w8F2TVA/default.jpg", "width": 120, "height": 90},
          "medium": {"url": "https://i.ytimg.com/vi/0yW7w8F2TVA/mqdefault.jpg", "width": 320, "height": 180},
          "high": {"url": "https://i.ytimg.com/vi/0yW7w8F2TVA/hqdefault.jpg", "width": 480, "height": 360},
          "standard": {"url": "https://i.ytimg.com/vi/0yW7w8F2TVA/sddefault.jpg", "width": 640, "height": 480},
          "maxres": {"url": "https://i.ytimg.com/vi/0yW7w8F2TVA/maxresdefault.jpg", "width": 1280, "height": 720}
        },
        "channelTitle": "#RedMusic: LoveMusic",
        "playlistId": "PL64G6j8ePNureM8YCKy5nRFyzYf8I2noy",
        "position": 4,
        "resourceId": {"kind": "youtube#video", "videoId": "0yW7w8F2TVA"}
      }
    }], "trending": [{
      "kind": "youtube#video", "etag": "hRXbCbNLVZ9oQHlqKznAQIf-nOA", "id": "gdZLi9oWNZg", "snippet": {
        "publishedAt": "2020-08-21T03:58:10Z",
        "channelId": "UC3IZKseVpdzPSBaWxBxundA",
        "title": "BTS (방탄소년단) 'Dynamite' Official MV",
        "description": "BTS (방탄소년단) 'Dynamite' Official MV\n\n\nCredits:\nDirector: Yong Seok Choi (Lumpens)\nAssistant Director: Jihye Yoon (Lumpens)\n\nDirector of Photography: Hyunwoo Nam (GDW)\nB Camera Operator: Eumko\nFocus Puller: Sangwoo Yun, Youngwoo Lee\n2nd AC: Eunki Kim\n3rd AC: Kyuwon Seo\nDIT: Eunil Lee\n\nGaffer: Song Hyunsuk\nLighting Crew: Choi Jung Hyun, Hwang Uigyu, Kim Hyun Ju, Park Cheonil, Park Yeonghwan, Yeom Jaehyeok\n\nJimmy Jib Operator: Youngjung Kim\nJimmy Jib Assistant: Hyun in Kim, Sung Hoon Kim\n\nArt Director: Bona Kim, Jinsil Park (MU:E)\nAssistant Art Team: Yeri Kang (MU:E)\nArt-team Manager: ilho Heo (MU:E)\n\nProducer: Emma Sungeun Kim (GE Production)\nLocation Manager: Ji Hoon Han\n\nVFX STUDIO: PLASTIC BEACH\nVFX Supervisor: Ohzeon\nVFX Assistant Supervisor: Jojeem\nVFX Project Manager: Chanyoung Song, Jieun Jeong\nVFX Producer: Kyutae Jang\n3D Artist: Kwangwon Lee, Doyeon Kim, Jeonghwa Lee, Jiwon Jeon\n2D Artist: Gihoon Jang, Hyunjun Lee\n\nVisual Creative: Nu Kim, Sabinne Cheon, Lee Sun Kyoung, Kim Ga Eun, Jung Su Jung\nBrand Experience Design: Kris Seongmin Gim, Hyeri Lee \nPerformance Directing: Son Sung Deuk, Lee Ga Hun, Lee Byung Eun, Hyewon Park\nArtist Management: Kim Shin Gyu, Kim Su Bin, Kim Dae Young, Park Jun Tae, An Da Sol, Ahn Jong Hun, Yun Tae Woong, Lee Seung Byeong, Lee Jung Min\n\nBig Hit Entertainment. Rights are reserved selectively in the video. Unauthorized reproduction is a violation of applicable laws. Manufactured by Big Hit Entertainment, Seoul, Korea.\n\nConnect with BTS: \nhttps://ibighit.com/bts \nhttp://twitter.com/BTS_bighit\nhttp://twitter.com/BTS_twt \nhttp://www.facebook.com/bangtan.official \nhttps://www.youtube.com/user/BANGTANTV \nhttp://instagram.com/BTS.bighitofficial \nhttps://channels.vlive.tv/FE619 \nhttps://www.tiktok.com/@bts_official_bighit\nhttps://weverse.onelink.me/qt3S/94808190\nhttps://www.weibo.com/BTSbighit\nhttps://www.weibo.com/BTSmembers \nhttp://i.youku.com/btsofficial \nhttp://btsblog.ibighit.com\n\n\n#BTS #방탄소년단 #BTS_Dynamite #Dynamite #MV",
        "thumbnails": {
          "default": {"url": "https://i.ytimg.com/vi/gdZLi9oWNZg/default.jpg", "width": 120, "height": 90},
          "medium": {"url": "https://i.ytimg.com/vi/gdZLi9oWNZg/mqdefault.jpg", "width": 320, "height": 180},
          "high": {"url": "https://i.ytimg.com/vi/gdZLi9oWNZg/hqdefault.jpg", "width": 480, "height": 360},
          "standard": {"url": "https://i.ytimg.com/vi/gdZLi9oWNZg/sddefault.jpg", "width": 640, "height": 480},
          "maxres": {"url": "https://i.ytimg.com/vi/gdZLi9oWNZg/maxresdefault.jpg", "width": 1280, "height": 720}
        },
        "channelTitle": "Big Hit Labels",
        "tags": ["BIGHIT", "빅히트", "방탄소년단", "BTS", "BANGTAN", "방탄"],
        "categoryId": "10",
        "liveBroadcastContent": "none",
        "defaultLanguage": "ko",
        "localized": {
          "title": "BTS (방탄소년단) 'Dynamite' Official MV",
          "description": "BTS (방탄소년단) 'Dynamite' Official MV\n\n\nCredits:\nDirector: Yong Seok Choi (Lumpens)\nAssistant Director: Jihye Yoon (Lumpens)\n\nDirector of Photography: Hyunwoo Nam (GDW)\nB Camera Operator: Eumko\nFocus Puller: Sangwoo Yun, Youngwoo Lee\n2nd AC: Eunki Kim\n3rd AC: Kyuwon Seo\nDIT: Eunil Lee\n\nGaffer: Song Hyunsuk\nLighting Crew: Choi Jung Hyun, Hwang Uigyu, Kim Hyun Ju, Park Cheonil, Park Yeonghwan, Yeom Jaehyeok\n\nJimmy Jib Operator: Youngjung Kim\nJimmy Jib Assistant: Hyun in Kim, Sung Hoon Kim\n\nArt Director: Bona Kim, Jinsil Park (MU:E)\nAssistant Art Team: Yeri Kang (MU:E)\nArt-team Manager: ilho Heo (MU:E)\n\nProducer: Emma Sungeun Kim (GE Production)\nLocation Manager: Ji Hoon Han\n\nVFX STUDIO: PLASTIC BEACH\nVFX Supervisor: Ohzeon\nVFX Assistant Supervisor: Jojeem\nVFX Project Manager: Chanyoung Song, Jieun Jeong\nVFX Producer: Kyutae Jang\n3D Artist: Kwangwon Lee, Doyeon Kim, Jeonghwa Lee, Jiwon Jeon\n2D Artist: Gihoon Jang, Hyunjun Lee\n\nVisual Creative: Nu Kim, Sabinne Cheon, Lee Sun Kyoung, Kim Ga Eun, Jung Su Jung\nBrand Experience Design: Kris Seongmin Gim, Hyeri Lee \nPerformance Directing: Son Sung Deuk, Lee Ga Hun, Lee Byung Eun, Hyewon Park\nArtist Management: Kim Shin Gyu, Kim Su Bin, Kim Dae Young, Park Jun Tae, An Da Sol, Ahn Jong Hun, Yun Tae Woong, Lee Seung Byeong, Lee Jung Min\n\nBig Hit Entertainment. Rights are reserved selectively in the video. Unauthorized reproduction is a violation of applicable laws. Manufactured by Big Hit Entertainment, Seoul, Korea.\n\nConnect with BTS: \nhttps://ibighit.com/bts \nhttp://twitter.com/BTS_bighit\nhttp://twitter.com/BTS_twt \nhttp://www.facebook.com/bangtan.official \nhttps://www.youtube.com/user/BANGTANTV \nhttp://instagram.com/BTS.bighitofficial \nhttps://channels.vlive.tv/FE619 \nhttps://www.tiktok.com/@bts_official_bighit\nhttps://weverse.onelink.me/qt3S/94808190\nhttps://www.weibo.com/BTSbighit\nhttps://www.weibo.com/BTSmembers \nhttp://i.youku.com/btsofficial \nhttp://btsblog.ibighit.com\n\n\n#BTS #방탄소년단 #BTS_Dynamite #Dynamite #MV"
        },
        "defaultAudioLanguage": "en"
      }
    }, {
      "kind": "youtube#video", "etag": "CADK6Os7M4Ip1IY226vq0e1-1uk", "id": "JFm7YDVlqnI", "snippet": {
        "publishedAt": "2020-08-14T04:00:08Z",
        "channelId": "UCQznUf1SjfDqx65hX3zRDiA",
        "title": "Drake - Laugh Now Cry Later (Official Music Video) ft. Lil Durk",
        "description": "Laugh Now Cry Later ft. Lil Durk available everywhere now: http://drake.lnk.to/lncl\n\nConnect with Drake:\nhttps://www.instagram.com/champagnepapi \nhttps://www.facebook.com/Drake \nhttps://twitter.com/drake \nhttps://www.drakeofficial.com \n\nDirector: Dave Meyers\nExecutive Producer: Nathan Scherrer\nProduction Company: Freenjoy\n\nProducers: Nathan Scherrer & Matt O'Connor\nDirector of Photography: Scott Cunningham \nProduction Designer: Eric Shoonover\n\nEditor: Greg Scruton at Cabin Edit\nColourist: Stefan Sonnenfeld at Company3\nVFX Supervisor: Les Umberger at Mod Creations\nSound Mix: Tom Paolantonio at Lime Studios\n\nLyrics:\n\nSometimes we laugh and sometimes we cry but I guess you know now\nBaby\nI took a half and she took the whole thing slow down\nBaby\nWe took a trip now we on your block and it’s like a ghost town\nBaby \nWhere do these niggas be at when they say they doing all this and all that\nTired of beefing of bums you can’t even pay me enough me to react \n\nBeen waking up in the crib and sometimes I don’t even know where I’m at\nPlease don’t play that niggas songs in this party I can’t even listen to that\nAnytime that I run into somebody it must be a victory lap eh \nShawty come sit on my lap eh\nThey saying Drizzy just snap\nDistance between us is not like a store this isn’t a close able gap\nI’ve seen some niggas attack\nAnd don’t end up making it back\n\nI know that they at the crib going crazy down bad what they had didn’t last Damn baby\nSometimes we laugh and sometimes we cry but I guess you know now\nbaby\nI took a half and she took the whole thing slow down\nBaby\nWe took a trip now we on your block and it’s like a ghost town\nBaby\nWhere do these niggas be at when they say they doing all this and all that \n\nI’m in the trenches relax\nCan you not play that lil boy in the club cause we do not listen to rats\nWe in the line I buy her a wig she tellin me Tay is the best\nPoint at that nigga who act like a killer\nBut you only want from the neck\nI’m like the baby I’m not just a rapper you play with me you gon get stressed\nOoooh\nBring Drake to the hood\nSurround Drake around Drakes\nEven though I got a case\nImma do what it takes\n\nAnd I never been embraced\nAnd the moneys hard to make\nSo I bet they on they face right\n\nI know that they at the crib going crazy down bad what they had didn’t last Damn baby\nSometimes we laugh and sometimes we cry but I guess you know now\nbaby\nI took a half and she took the whole thing slow down\nBaby\nWe took a trip now we on your block and it’s like a ghost town\nBaby\nWhere do these niggas be at when they say they doing all this and all that \n\nWhen he tell the story that’s not how it went\nKnow they be lying 100 percent \nMove out the Ritz forgot bout the Bent\nValet just called to tell me come get it\nI knocked that boy off  I don’t want no credit\nIf it Was me they wouldn’t regret it\nleft me for dead and now they want dead it\nheart is still beating\nMy niggas still eating\nThe backyard it look like the Garden of Eden\nPillow talk with Me she spilling the tea and then shawty came back and said she didn’t mean it\nIts hard to believe it\n\nI know that they at the crib going crazy down bad what they had didn’t last Damn baby\nSometimes we laugh and sometimes we cry but I guess you know now\nbaby\nI took a half and she took the whole thing slow down\nBaby\nWe took a trip now we on your block and it’s like a ghost town\nBaby\nWhere do these niggas be at when they say they doing all this and all that\n\n#Drake #LilDurk #LaughNowCryLater",
        "thumbnails": {
          "default": {"url": "https://i.ytimg.com/vi/JFm7YDVlqnI/default.jpg", "width": 120, "height": 90},
          "medium": {"url": "https://i.ytimg.com/vi/JFm7YDVlqnI/mqdefault.jpg", "width": 320, "height": 180},
          "high": {"url": "https://i.ytimg.com/vi/JFm7YDVlqnI/hqdefault.jpg", "width": 480, "height": 360},
          "standard": {"url": "https://i.ytimg.com/vi/JFm7YDVlqnI/sddefault.jpg", "width": 640, "height": 480},
          "maxres": {"url": "https://i.ytimg.com/vi/JFm7YDVlqnI/maxresdefault.jpg", "width": 1280, "height": 720}
        },
        "channelTitle": "DrakeVEVO",
        "tags": ["Drake", "Laugh", "Now", "Cry", "Later", "OVO", "Hip", "Hop"],
        "categoryId": "10",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "Drake - Laugh Now Cry Later (Official Music Video) ft. Lil Durk",
          "description": "Laugh Now Cry Later ft. Lil Durk available everywhere now: http://drake.lnk.to/lncl\n\nConnect with Drake:\nhttps://www.instagram.com/champagnepapi \nhttps://www.facebook.com/Drake \nhttps://twitter.com/drake \nhttps://www.drakeofficial.com \n\nDirector: Dave Meyers\nExecutive Producer: Nathan Scherrer\nProduction Company: Freenjoy\n\nProducers: Nathan Scherrer & Matt O'Connor\nDirector of Photography: Scott Cunningham \nProduction Designer: Eric Shoonover\n\nEditor: Greg Scruton at Cabin Edit\nColourist: Stefan Sonnenfeld at Company3\nVFX Supervisor: Les Umberger at Mod Creations\nSound Mix: Tom Paolantonio at Lime Studios\n\nLyrics:\n\nSometimes we laugh and sometimes we cry but I guess you know now\nBaby\nI took a half and she took the whole thing slow down\nBaby\nWe took a trip now we on your block and it’s like a ghost town\nBaby \nWhere do these niggas be at when they say they doing all this and all that\nTired of beefing of bums you can’t even pay me enough me to react \n\nBeen waking up in the crib and sometimes I don’t even know where I’m at\nPlease don’t play that niggas songs in this party I can’t even listen to that\nAnytime that I run into somebody it must be a victory lap eh \nShawty come sit on my lap eh\nThey saying Drizzy just snap\nDistance between us is not like a store this isn’t a close able gap\nI’ve seen some niggas attack\nAnd don’t end up making it back\n\nI know that they at the crib going crazy down bad what they had didn’t last Damn baby\nSometimes we laugh and sometimes we cry but I guess you know now\nbaby\nI took a half and she took the whole thing slow down\nBaby\nWe took a trip now we on your block and it’s like a ghost town\nBaby\nWhere do these niggas be at when they say they doing all this and all that \n\nI’m in the trenches relax\nCan you not play that lil boy in the club cause we do not listen to rats\nWe in the line I buy her a wig she tellin me Tay is the best\nPoint at that nigga who act like a killer\nBut you only want from the neck\nI’m like the baby I’m not just a rapper you play with me you gon get stressed\nOoooh\nBring Drake to the hood\nSurround Drake around Drakes\nEven though I got a case\nImma do what it takes\n\nAnd I never been embraced\nAnd the moneys hard to make\nSo I bet they on they face right\n\nI know that they at the crib going crazy down bad what they had didn’t last Damn baby\nSometimes we laugh and sometimes we cry but I guess you know now\nbaby\nI took a half and she took the whole thing slow down\nBaby\nWe took a trip now we on your block and it’s like a ghost town\nBaby\nWhere do these niggas be at when they say they doing all this and all that \n\nWhen he tell the story that’s not how it went\nKnow they be lying 100 percent \nMove out the Ritz forgot bout the Bent\nValet just called to tell me come get it\nI knocked that boy off  I don’t want no credit\nIf it Was me they wouldn’t regret it\nleft me for dead and now they want dead it\nheart is still beating\nMy niggas still eating\nThe backyard it look like the Garden of Eden\nPillow talk with Me she spilling the tea and then shawty came back and said she didn’t mean it\nIts hard to believe it\n\nI know that they at the crib going crazy down bad what they had didn’t last Damn baby\nSometimes we laugh and sometimes we cry but I guess you know now\nbaby\nI took a half and she took the whole thing slow down\nBaby\nWe took a trip now we on your block and it’s like a ghost town\nBaby\nWhere do these niggas be at when they say they doing all this and all that\n\n#Drake #LilDurk #LaughNowCryLater"
        }
      }
    }, {
      "kind": "youtube#video", "etag": "LQlOQ1bTSvYsNWvLCtlQbcrwC2k", "id": "u0LaoQks5mY", "snippet": {
        "publishedAt": "2020-08-20T19:00:09Z",
        "channelId": "UCGIelM2Dj3zza3xyV3pL3WQ",
        "title": "Migos - Need It (Official Video) ft. YoungBoy Never Broke Again",
        "description": "Listen to Migos \"Need It\" featuring NBA Youngboy here: https://QualityControl.lnk.to/NeedIt \n\nFollow Migos on socials:\nhttps://instagram.com/migos\nhttps://facebook.com/THEMigosAtl\nhttps://twitter.com/migos\n\nLyrics:\n\n[Intro: Offset & YoungBoy Never Broke Again]\nLet's go\nI'm surrounded by some real niggas (Lil Top)\nHey (Yeah), yessir (They won't do it), Buddah Bless this beat\n\n[Chorus: Offset & YoungBoy Never Broke Again]\nI said I need it\nThis Draco undefeated (Rrah)\nHit your block and then I bleed it (Yeah)\nGo long, these bullets, he receive it\nI can't see it (I can't)\nMy wrist look like a snow cone, make her eat it (Woah)\nOnce I see her, I give her that dope dick just like it's ether\nThen I leave her, I can't get caught up, I can't be on Cheaters\nThere go them people, you know what it is\nGo put the dope up 'fore they breach us\nBefore they breach us\nI'ma get out this bitch and I'm strikin', I'm throwin' my heater\nWhole lotta money, and still they keep comin'\nForever I'm livin' my life like a bleeder (Slime)\n\n[Verse 1: Offset, YoungBoy Never Broke Again & Both]\nDope boy (Dope)\nI'm straight out the Nawf, I came up sellin' hard (Hard)\nHeroin (Dawg)\nI'm straight from the Nawf, I went, bought me a don (the Nawf)\nI jumped off the porch and went bought me a gun\nWe boardin' the jet 'cause my dawg got a warrant\nWe don't give a fuck, bring the stick, where we goin'?\nI'm booted up off that Molly, I cover my gun\nThis stick got a ELO, my aim on point (On point)\nShootin' that Glock give me pain in my joints (Pew-pew)\nWe shoot a fifty-round drum, honey bun (Bun)\nI want two thousand, I want both of they tongues\nI know how to handle it, bust on my damages\nThese niggas can't run, we gon' peel everyone\nYou know where I'm from, give a fuck how you come\nGot a stick in the car and it sound like a bomb (Boom)\nI came in this bitch with a mil' worth of cash (M)\nLike Bandicoot, we 'bout to crash (Crash)\nNo remorse, I put five to your dash (Bitch)\nOff the porch, bought a Porsche, then I drag\nOff the building, them young niggas slide (Slide)\nPut up 30, now you do the math (Fool)\nIf you seek on my son, I won't hide (I won't hide)\nBullets rain, we give him a bath\n\n[Chorus: Offset & YoungBoy Never Broke Again]\nI said I need it (Ha)\nThis Draco undefeated (Rrah)\nHit your block and then I bleed it (Yeah)\nGo long, these bullets, he receive it\nI can't see it (I can't)\nMy wrist look like a snow cone, make her eat it (Woah)\nOnce I see her, I give her that dope dick just like it's ether\nThen I leave her, I can't get caught up, I can't be on Cheaters\nThere go them people, you know what it is\nGo put the dope up 'fore they breach us\nBefore they breach us\nI'ma get out this bitch and I'm strikin', I'm throwin' my heater\nWhole lotta money, and still they keep comin'\nForever I'm livin' my life like a bleeder\n\n[Verse 2: Takeoff & Quavo]\nFrom the bando to bandit, we makin' it happen\nI like a bitch bougie but keep me a ratchet\nWinning's fantastic, Cartiers straight out the plastic\nDiamonds in all of my glasses (Chill)\nI'm fuckin' more bitches than Magic\nStraight out the basket, they say them young niggas havin' (Hey)\nThe money too old, it's growin' maggots, nasty\nFinger-fuck it with the Magnum (MAG)\nI'm thinkin' they forgot the way we paved\nWe been givin' too many niggas these passes (Too many)\nFuck it, drop a bag and cash it (Fuck it)\nWho gonna press 'em the fastest? (Who?)\nExtendo barrel elastic, new attachment, shit get tactic (Tactical)\nThey stole the flow (Go), now they tryna run off with the fashion\nMy neck, I freeze it (Ice), just give us the reason\nMake that smoke look easy (Ooh-ooh, easy, woo)\nCouple blue hunnids with the stones, it's bleedin' (Cash, bleedin')\nWhat's your issue? (Woo) If you got a trigger, just squeeze it (Bah, squeeze it, bah, squeeze it)\nWhole block outside, it's a street fest\nAin't no peace treaty (Nah)\nThese stones around my Jesus, they ain't treated (No)\nThey got me heated (Hot)\nDon't play with the gang (Ooh-ooh), they know that we be undefeated\nI get to squeezin' (I get to squeezin')\nWhen we talkin' beef, they say that they vegan\nJumpin', no reason (Jumpin', no reason, woo)\nWe coppin' more ice and tuck in the freezer (Ice)\n\n[Chorus: Offset, YoungBoy Never Broke Again & Quavo]\nI said I need it\nThis Draco undefeated (Rrah)\nHit your block and then I bleed it (Yeah)\nGo long, these bullets, he receive it (Oh-oh)\nI can't see it (I can't)\nMy wrist look like a snow cone (Oh-oh), make her eat it\nOnce I see her, I give her that dope dick just like it's ether (Oh-oh)\nThen I leave her, I can't get caught up, I can't be on Cheaters\nThere go them people (Them people), you know what it is\nGo put the dope up 'fore they breach us\nBefore they breach us\nI'ma get out this bitch and I'm strikin', I'm throwin' my heater\nWhole lotta money, and still they keep comin'\nForever I'm livin' my life like a bleeder (Slime)\n   \n#Migos #NBAYoungboy #NeedIt\n\nMusic video by Migos performing Need It. © 2020 Quality Control Music, LLC, under exclusive licen...",
        "thumbnails": {
          "default": {"url": "https://i.ytimg.com/vi/u0LaoQks5mY/default.jpg", "width": 120, "height": 90},
          "medium": {"url": "https://i.ytimg.com/vi/u0LaoQks5mY/mqdefault.jpg", "width": 320, "height": 180},
          "high": {"url": "https://i.ytimg.com/vi/u0LaoQks5mY/hqdefault.jpg", "width": 480, "height": 360},
          "standard": {"url": "https://i.ytimg.com/vi/u0LaoQks5mY/sddefault.jpg", "width": 640, "height": 480},
          "maxres": {"url": "https://i.ytimg.com/vi/u0LaoQks5mY/maxresdefault.jpg", "width": 1280, "height": 720}
        },
        "channelTitle": "MigosVEVO",
        "tags": ["Need It", "I Said I Need It", "NBA Youngboy", "Migos", "Youngboy Never Broke Again"],
        "categoryId": "10",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "Migos - Need It (Official Video) ft. YoungBoy Never Broke Again",
          "description": "Listen to Migos \"Need It\" featuring NBA Youngboy here: https://QualityControl.lnk.to/NeedIt \n\nFollow Migos on socials:\nhttps://instagram.com/migos\nhttps://facebook.com/THEMigosAtl\nhttps://twitter.com/migos\n\nLyrics:\n\n[Intro: Offset & YoungBoy Never Broke Again]\nLet's go\nI'm surrounded by some real niggas (Lil Top)\nHey (Yeah), yessir (They won't do it), Buddah Bless this beat\n\n[Chorus: Offset & YoungBoy Never Broke Again]\nI said I need it\nThis Draco undefeated (Rrah)\nHit your block and then I bleed it (Yeah)\nGo long, these bullets, he receive it\nI can't see it (I can't)\nMy wrist look like a snow cone, make her eat it (Woah)\nOnce I see her, I give her that dope dick just like it's ether\nThen I leave her, I can't get caught up, I can't be on Cheaters\nThere go them people, you know what it is\nGo put the dope up 'fore they breach us\nBefore they breach us\nI'ma get out this bitch and I'm strikin', I'm throwin' my heater\nWhole lotta money, and still they keep comin'\nForever I'm livin' my life like a bleeder (Slime)\n\n[Verse 1: Offset, YoungBoy Never Broke Again & Both]\nDope boy (Dope)\nI'm straight out the Nawf, I came up sellin' hard (Hard)\nHeroin (Dawg)\nI'm straight from the Nawf, I went, bought me a don (the Nawf)\nI jumped off the porch and went bought me a gun\nWe boardin' the jet 'cause my dawg got a warrant\nWe don't give a fuck, bring the stick, where we goin'?\nI'm booted up off that Molly, I cover my gun\nThis stick got a ELO, my aim on point (On point)\nShootin' that Glock give me pain in my joints (Pew-pew)\nWe shoot a fifty-round drum, honey bun (Bun)\nI want two thousand, I want both of they tongues\nI know how to handle it, bust on my damages\nThese niggas can't run, we gon' peel everyone\nYou know where I'm from, give a fuck how you come\nGot a stick in the car and it sound like a bomb (Boom)\nI came in this bitch with a mil' worth of cash (M)\nLike Bandicoot, we 'bout to crash (Crash)\nNo remorse, I put five to your dash (Bitch)\nOff the porch, bought a Porsche, then I drag\nOff the building, them young niggas slide (Slide)\nPut up 30, now you do the math (Fool)\nIf you seek on my son, I won't hide (I won't hide)\nBullets rain, we give him a bath\n\n[Chorus: Offset & YoungBoy Never Broke Again]\nI said I need it (Ha)\nThis Draco undefeated (Rrah)\nHit your block and then I bleed it (Yeah)\nGo long, these bullets, he receive it\nI can't see it (I can't)\nMy wrist look like a snow cone, make her eat it (Woah)\nOnce I see her, I give her that dope dick just like it's ether\nThen I leave her, I can't get caught up, I can't be on Cheaters\nThere go them people, you know what it is\nGo put the dope up 'fore they breach us\nBefore they breach us\nI'ma get out this bitch and I'm strikin', I'm throwin' my heater\nWhole lotta money, and still they keep comin'\nForever I'm livin' my life like a bleeder\n\n[Verse 2: Takeoff & Quavo]\nFrom the bando to bandit, we makin' it happen\nI like a bitch bougie but keep me a ratchet\nWinning's fantastic, Cartiers straight out the plastic\nDiamonds in all of my glasses (Chill)\nI'm fuckin' more bitches than Magic\nStraight out the basket, they say them young niggas havin' (Hey)\nThe money too old, it's growin' maggots, nasty\nFinger-fuck it with the Magnum (MAG)\nI'm thinkin' they forgot the way we paved\nWe been givin' too many niggas these passes (Too many)\nFuck it, drop a bag and cash it (Fuck it)\nWho gonna press 'em the fastest? (Who?)\nExtendo barrel elastic, new attachment, shit get tactic (Tactical)\nThey stole the flow (Go), now they tryna run off with the fashion\nMy neck, I freeze it (Ice), just give us the reason\nMake that smoke look easy (Ooh-ooh, easy, woo)\nCouple blue hunnids with the stones, it's bleedin' (Cash, bleedin')\nWhat's your issue? (Woo) If you got a trigger, just squeeze it (Bah, squeeze it, bah, squeeze it)\nWhole block outside, it's a street fest\nAin't no peace treaty (Nah)\nThese stones around my Jesus, they ain't treated (No)\nThey got me heated (Hot)\nDon't play with the gang (Ooh-ooh), they know that we be undefeated\nI get to squeezin' (I get to squeezin')\nWhen we talkin' beef, they say that they vegan\nJumpin', no reason (Jumpin', no reason, woo)\nWe coppin' more ice and tuck in the freezer (Ice)\n\n[Chorus: Offset, YoungBoy Never Broke Again & Quavo]\nI said I need it\nThis Draco undefeated (Rrah)\nHit your block and then I bleed it (Yeah)\nGo long, these bullets, he receive it (Oh-oh)\nI can't see it (I can't)\nMy wrist look like a snow cone (Oh-oh), make her eat it\nOnce I see her, I give her that dope dick just like it's ether (Oh-oh)\nThen I leave her, I can't get caught up, I can't be on Cheaters\nThere go them people (Them people), you know what it is\nGo put the dope up 'fore they breach us\nBefore they breach us\nI'ma get out this bitch and I'm strikin', I'm throwin' my heater\nWhole lotta money, and still they keep comin'\nForever I'm livin' my life like a bleeder (Slime)\n   \n#Migos #NBAYoungboy #NeedIt\n\nMusic video by Migos performing Need It. © 2020 Quality Control Music, LLC, under exclusive licen..."
        }
      }
    }, {
      "kind": "youtube#video", "etag": "SoVt4T8M2aHpgXQHzytAixOchig", "id": "hsm4poTWjMs", "snippet": {
        "publishedAt": "2020-08-07T04:00:10Z",
        "channelId": "UCxMAbVFmxKUVGAll0WVGpFw",
        "title": "Cardi B - WAP feat. Megan Thee Stallion [Official Music Video]",
        "description": "Cardi B - WAP feat. Megan Thee Stallion\nStream/Download - https://CardiB.lnk.to/WAP\n\r\nSubscribe for more official content from Cardi B: https://CardiB.lnk.to/Subscribe\r\n\r\nFollow Cardi B\r\nhttp://cardibofficial.com\r\nhttp://Twitter.com/IAmCardiB\r\nhttp://Facebook.com/IAmCardiB\r\nhttp://Instagram.com/f/iamcardib\r\nhttp://Soundcloud.com/IAmCardiB\r\n\r\nExclusive Bardi Gang merchandise available here: http://smarturl.it/BardiGangMerchYT\r\n\r\nLABEL\nAtlantic Records\nCommissioner: Kareem Johnson / OverScene LLC\nSVP / Head of Marketing:  Marsha St. Hubert\n \nPRODUCTION\nProd Co: Boy in the Castle\nDirector: Colin Tilley\nCreative Director: Kollin Carter & Patientce Foster\nExec Producer: Jamee Ranta\nProducer: Whitney Jackson\nDirector of Photography: Elias Talbot\n1st AD: Ev Salomon \nEditor: Vinnie Hobbs\nBeauty: Sunset Edit\n\nChoreography: J.K. Creatives, Inc.\nChoreographer: JaQuel Knight\nAssistant Choreographers : Darina Littleton and Ashley Seldon\n \nCARDI B GLAM\nStyling: Kollin Carter\nStyling Asst: Jennifer Udechukwu\nHair: Tokyo Stylez\nMakeup: Erika Roman\nNails: Jenny Bui (Nails on 7th) \n \nMEGAN THEE STALLION GLAM\nStyling: EJ King\nHair: Kellon Deryck\nMakeup: Megan Thee Stallion\nNails: Coca Michelle\nThe official YouTube channel of Atlantic Records artist Cardi B. Subscribe for the latest music videos, performances, and more.",
        "thumbnails": {
          "default": {"url": "https://i.ytimg.com/vi/hsm4poTWjMs/default.jpg", "width": 120, "height": 90},
          "medium": {"url": "https://i.ytimg.com/vi/hsm4poTWjMs/mqdefault.jpg", "width": 320, "height": 180},
          "high": {"url": "https://i.ytimg.com/vi/hsm4poTWjMs/hqdefault.jpg", "width": 480, "height": 360},
          "standard": {"url": "https://i.ytimg.com/vi/hsm4poTWjMs/sddefault.jpg", "width": 640, "height": 480}
        },
        "channelTitle": "Cardi B",
        "tags": ["Cardi B", "Cardi", "Atlantic Records", "rap", "hip hop", "trap", "latin", "Bodak Yellow", "bloody shoes", "red bottoms", "i like it", "invasion of privacy", "offset", "bruno mars", "finesse", "WAP", "Meg", "Stallion", "Hottie", "Bardi", "Bardi Gang", "Megan The Stallion", "Megan Thee Stallion", "Worldstar", "Onlyfans", "Press", "Money", "Savage", "cJc7xWJbwJw", "lEIqjoO0-Bs", "Kulture", "Shaderoom", "Baller Alert"],
        "categoryId": "10",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "Cardi B - WAP feat. Megan Thee Stallion [Official Music Video]",
          "description": "Cardi B - WAP feat. Megan Thee Stallion\nStream/Download - https://CardiB.lnk.to/WAP\n\r\nSubscribe for more official content from Cardi B: https://CardiB.lnk.to/Subscribe\r\n\r\nFollow Cardi B\r\nhttp://cardibofficial.com\r\nhttp://Twitter.com/IAmCardiB\r\nhttp://Facebook.com/IAmCardiB\r\nhttp://Instagram.com/f/iamcardib\r\nhttp://Soundcloud.com/IAmCardiB\r\n\r\nExclusive Bardi Gang merchandise available here: http://smarturl.it/BardiGangMerchYT\r\n\r\nLABEL\nAtlantic Records\nCommissioner: Kareem Johnson / OverScene LLC\nSVP / Head of Marketing:  Marsha St. Hubert\n \nPRODUCTION\nProd Co: Boy in the Castle\nDirector: Colin Tilley\nCreative Director: Kollin Carter & Patientce Foster\nExec Producer: Jamee Ranta\nProducer: Whitney Jackson\nDirector of Photography: Elias Talbot\n1st AD: Ev Salomon \nEditor: Vinnie Hobbs\nBeauty: Sunset Edit\n\nChoreography: J.K. Creatives, Inc.\nChoreographer: JaQuel Knight\nAssistant Choreographers : Darina Littleton and Ashley Seldon\n \nCARDI B GLAM\nStyling: Kollin Carter\nStyling Asst: Jennifer Udechukwu\nHair: Tokyo Stylez\nMakeup: Erika Roman\nNails: Jenny Bui (Nails on 7th) \n \nMEGAN THEE STALLION GLAM\nStyling: EJ King\nHair: Kellon Deryck\nMakeup: Megan Thee Stallion\nNails: Coca Michelle\nThe official YouTube channel of Atlantic Records artist Cardi B. Subscribe for the latest music videos, performances, and more."
        }
      }
    }, {
      "kind": "youtube#video", "etag": "v_BHXmY8eNYWvkRHJlIKXkZTm8Q", "id": "0C80BSgjb8M", "snippet": {
        "publishedAt": "2020-08-13T19:43:00Z",
        "channelId": "UClW4jraMKz6Qj69lJf-tODA",
        "title": "YoungBoy Never Broke Again - Kacey talk",
        "description": "YoungBoy Never Broke Again - \nStill Flexin, Still Steppin OUT NOW!\nStream/Download: https://youngboy.lnk.to/StillFlexinStillSteppinID \n\nSubscribe for more official content from YoungBoy NBA: \nhttps://youngboy.lnk.to/Subscribe\n\nConnect with YoungBoy Never Broke Again:\nhttp://www.youngboynba.com\nhttps://www.facebook.com/nbayoungboy\nhttps://www.twitter.com/GGYOUNGBOY\nhttps://www.instagram.com/nba_youngboy\nhttps://www.soundcloud.com/nba-youngboy\n\nThe official YouTube channel of Atlantic Records artist YoungBoy Never Broke Again. Subscribe for the latest music videos, performances, and more.\n\n#YoungBoyNeverBrokeAgain",
        "thumbnails": {
          "default": {"url": "https://i.ytimg.com/vi/0C80BSgjb8M/default.jpg", "width": 120, "height": 90},
          "medium": {"url": "https://i.ytimg.com/vi/0C80BSgjb8M/mqdefault.jpg", "width": 320, "height": 180},
          "high": {"url": "https://i.ytimg.com/vi/0C80BSgjb8M/hqdefault.jpg", "width": 480, "height": 360},
          "standard": {"url": "https://i.ytimg.com/vi/0C80BSgjb8M/sddefault.jpg", "width": 640, "height": 480},
          "maxres": {"url": "https://i.ytimg.com/vi/0C80BSgjb8M/maxresdefault.jpg", "width": 1280, "height": 720}
        },
        "channelTitle": "YoungBoy Never Broke Again",
        "tags": ["YoungBoy Never Broke Again", "Youngboy Slime Mentality", "NBA YoungBoy", "Slime Belief", "YoungBoy IG Live", "YoungBoy Instagram", "YoungBoy Quando Rondo", "YoungBoy Self Control", "YoungBoy Leak", "No Smoke YoungBoy", "I Am Who They Say I Am", "AI YoungBoy 2", "YoungBoy Carter's Son", "House Arrest Tingz", "Juice WRLD Youngboy", "Bandit Youngboy", "In Control NBA YoungBoy", "Make No Sense YoungBoy", "Youngboy Lost Motives", "YoungBoy Lonely Child", "YoungBoy NBA Music Video", "Yaya Mayweather", "YoungBoy Ranada"],
        "categoryId": "10",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "YoungBoy Never Broke Again - Kacey talk",
          "description": "YoungBoy Never Broke Again - \nStill Flexin, Still Steppin OUT NOW!\nStream/Download: https://youngboy.lnk.to/StillFlexinStillSteppinID \n\nSubscribe for more official content from YoungBoy NBA: \nhttps://youngboy.lnk.to/Subscribe\n\nConnect with YoungBoy Never Broke Again:\nhttp://www.youngboynba.com\nhttps://www.facebook.com/nbayoungboy\nhttps://www.twitter.com/GGYOUNGBOY\nhttps://www.instagram.com/nba_youngboy\nhttps://www.soundcloud.com/nba-youngboy\n\nThe official YouTube channel of Atlantic Records artist YoungBoy Never Broke Again. Subscribe for the latest music videos, performances, and more.\n\n#YoungBoyNeverBrokeAgain"
        }
      }
    }]
  });
});

module.exports = router;
