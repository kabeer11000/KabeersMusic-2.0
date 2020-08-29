import {CHANGE_DRAWER, CURRENT_SONG} from '../actions/actions';

const initialState = {
    drawer: false
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_DRAWER:
            return {
                drawer: action.drawer
            };
        case CURRENT_SONG:
            return {
                currentSong: action
            };
        default:
            return state;
    }
}

export default rootReducer;
