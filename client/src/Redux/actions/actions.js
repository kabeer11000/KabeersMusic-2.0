export const CHANGE_DRAWER = 'CHANGE_DRAWER';
export const CURRENT_SONG = 'CURRENT_SONG';

export function setDrawerState(state) {
    return {type: CHANGE_DRAWER, drawer: state};
}

export function setCurrentSongState(audioElement, isHidden, videoObject, functions, audioPosition, appStates, playPauseButton, closeAll) {
    return {
        type: CURRENT_SONG,
        audioElement: audioElement,
        isHidden: isHidden,
        videoObject: videoObject,
        functions: functions,
        position: audioPosition,
        AppStates: appStates,
        playPauseButton: playPauseButton,
        closeAll: closeAll,
    }
}
