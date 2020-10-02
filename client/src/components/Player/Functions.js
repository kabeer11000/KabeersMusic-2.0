function SkipSong(data) {
	audioElement.pause();
	audioElement = null;
	getSong(data.video.id).then(value => {
		if (value) {
			setTimeout(function () {
				return props.changes({
					uri: value,
					thumbnail: data.video.snippet.thumbnails.maxres.url,
					video: data.video,
					list: props.list,
					index: data.index
				});
			}, 100);
		}
	});
}

function addMediaSession(data) {
	if ("mediaSession" in navigator) {
		navigator.mediaSession.metadata = new window.MediaMetadata({
			title: data.title,
			artist: data.artist,
			album: data.album,
			artwork: data.artwork
		});

		navigator.mediaSession.setActionHandler("play", function () {
			playAudio();
		});
		navigator.mediaSession.setActionHandler("pause", function () {
			pauseAudio();
		});
		//navigator.mediaSession.setActionHandler('seekbackward', function() {});
		//navigator.mediaSession.setActionHandler('seekforward', function() {});
		//navigator.mediaSession.setActionHandler('previoustrack', function() {});
		//navigator.mediaSession.setActionHandler('nexttrack', function() {});
	}
}

function getAudioPosition() {
	return audioElement.currentTime;
}

function pauseAudio() {
	audioElement.pause();
	setButton(<IconButton onClick={playAudio}><PlayCircleOutline color={"#fff"}/></IconButton>);
}

/*
    audioElement.addEventListener("timeupdate", async () => {
        setScrubbing(audioElement.currentTime);
    });
 */
isOfflineAvailable(props.video.snippet.videoId)
	.then(value => {
		setDownloadButton(value ? <IconButton color={"#FFF"}><Done/></IconButton> :
			<IconButton color={"#FFF"} onClick={downloadAudio}><GetApp/></IconButton>);
	});

async function handleScrubbing(v) {
	if (isFinite(v)) {
		audioElement.currentTime = v;
	}
}

