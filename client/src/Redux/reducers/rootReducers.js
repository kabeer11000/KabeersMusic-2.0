import {CHANGE_DRAWER, CURRENT_SONG, HOME_COMPONENT_STATE, SEARCH_QUERY_PARAM, SET_AUTOPLAY} from "../actions/actions";

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
    autoPlay: false
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
    case SET_AUTOPLAY:
        return {
            ...state,
            autoPlay: action.autoPlay
        };
    default:
        return state;
    }
}

export default rootReducer;
