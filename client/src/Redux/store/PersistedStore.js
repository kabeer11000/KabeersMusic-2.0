import {createStore} from "redux";

import rootReducer from '../reducers/rootReducers'

const LOCAL_STORAGE_NAME = "localData";

class PersistedStore {

    // Singleton property
    static DefaultStore = {
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

    // When class instance is used, initialize the store
    constructor() {
        this.initStore()
    }

    // Redux store
    _store = null;

    // Getter to access the Redux store
    get store() {
        return this._store;
    }

    // Accessor to the default instance of this class
    static getDefaultStore() {
        if (PersistedStore.DefaultStore === null) {
            PersistedStore.DefaultStore = new PersistedStore();
        }

        return PersistedStore.DefaultStore;
    }

    // this method from the outside
    static loadState() {
        try {
            let serializedState = localStorage.getItem(LOCAL_STORAGE_NAME);

            if (serializedState === null) {
                return PersistedStore.initialState();
            }

            return JSON.parse(serializedState);
        } catch (err) {
            return PersistedStore.initialState();
        }
    }

    // Loading persisted state from localStorage, no need to access

    // in the initStore-method). No need to access this method from the outside
    static saveState(state) {
        try {
            let serializedState = JSON.stringify(state);
            localStorage.setItem(LOCAL_STORAGE_NAME, serializedState);
        } catch (err) {
        }
    }

    // Saving persisted state to localStorage every time something
    // changes in the Redux Store (This happens because of the subscribe()

    // Return whatever you want your initial state to be
    static initialState() {
        return {};
    }

    // Initialization of Redux Store
    initStore() {
        this._store = createStore(rootReducer, PersistedStore.loadState());
        this._store.subscribe(() => {
            PersistedStore.saveState(this._store.getState());
        });
    }
}

export default PersistedStore;
