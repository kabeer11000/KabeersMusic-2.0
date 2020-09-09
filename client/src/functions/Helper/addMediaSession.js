export default function addMediaSession(data, playPause, audio) {
	if ("mediaSession" in navigator) {
		navigator.mediaSession.metadata = new window.MediaMetadata({
			title: data.title,
			artist: data.artist,
			album: data.album,
			artwork: data.artwork
		});
		let skipTime = 10;
		navigator.mediaSession.setActionHandler("play", playPause.playAudio);
		navigator.mediaSession.setActionHandler("pause", playPause.pauseAudio);

		navigator.mediaSession.setActionHandler("seekforward", handleSeek);
		navigator.mediaSession.setActionHandler("seekbackward", handleSeek);

		function handleSeek(details) {
			switch (details.action) {
			case "seekforward":
				audio.currentTime = Math.min(audio.currentTime + skipTime,
					audio.duration);
				break;
			case "seekbackward":
				audio.currentTime = Math.max(audio.currentTime - skipTime, 0);
				break;
			}
		}
	}
}
