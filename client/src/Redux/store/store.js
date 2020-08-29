import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from '../reducers/rootReducers';
import thunk from "redux-thunk";

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
const middleware = [thunk];
export default createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : f => f
    ));
