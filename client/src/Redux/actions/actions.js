export const CHANGE_DRAWER = 'CHANGE_DRAWER';
export const CURRENT_SONG = 'CURRENT_SONG';
export const SEARCH_QUERY_PARAM = 'SEARCH_QUERY_PARAM';


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

export function setQueryParams(queryString) {
    return {
        type: SEARCH_QUERY_PARAM,
        q: queryString
    }
}

/*
ComponentState = {
    MiniPlayer: true,
    Dialog: false
}
 */
