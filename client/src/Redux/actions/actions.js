export const CHANGE_DRAWER = 'CHANGE_DRAWER';
export const CURRENT_SONG = 'CURRENT_SONG';

export function setDrawerState(state) {
    return {type: CHANGE_DRAWER, drawer: state};
}

export function setCurrentSongState(audioElement, videoElement, componentStates, reOpenDialog, playList) {
    return {
        type: CURRENT_SONG,
        currentSong: {
            audioElement: audioElement,
            videoElement: videoElement,
            componentState: componentStates,
            reOpenDialog: reOpenDialog,
            playList: {...playList},
        }
    }
}

/*
ComponentState = {
    MiniPlayer: true,
    Dialog: false
}
 */
