import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from '../reducers/rootReducers';
import thunk from "redux-thunk";
import StateLoader from "./state.loader"

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
/*
const stateLoader = new StateLoader();
const middleware = [thunk];
const store = createStore(
    rootReducer,
    stateLoader.loadState(),
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : f => f
    ));
export default store;
store.subscribe(() => {
    stateLoader.saveState(store.getState());
});
*/
const stateLoader = new StateLoader();
const middleware = [thunk];
const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : f => f
    ));
export default store;
