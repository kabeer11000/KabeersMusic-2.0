import {CHANGE_DRAWER, CURRENT_SONG, HOME_COMPONENT_STATE, SEARCH_QUERY_PARAM} from '../actions/actions';

const initialState = {
    currentSong: {
        audioElement: new Audio(''),
        videoElement: {},
        playList: {index: 0, list: []},
        reOpenDialog: () => {
        }
    },
    drawer: false,
    q: '',

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
        case SEARCH_QUERY_PARAM:
            return {
                ...state,
                q: action.q,
            };
        case HOME_COMPONENT_STATE:
            return {
                ...state,
                home: action.home
            };
        default:
            return state;
    }
}

export default rootReducer;
