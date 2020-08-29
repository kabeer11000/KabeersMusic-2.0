import {CHANGE_DRAWER, CURRENT_SONG} from '../actions/actions';

const initialState = {
    currentSong: {
        audioElement: new Audio(''),
        videoElement: {},
        playList: {index: 0, list: []},
        reOpenDialog: () => {
        }
    },
    drawer: false,

};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_DRAWER:
            return {
                currentSong: state.currentSong,
                drawer: action.drawer,
            };
        case CURRENT_SONG:
            return {
                currentSong: action.currentSong,
                drawer: state.drawer
            };
        default:
            return state;
    }
}

export default rootReducer;
