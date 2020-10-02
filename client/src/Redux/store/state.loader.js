export default class StateLoader {

	loadState() {
		try {
			let serializedState = localStorage.getItem("KabeersMusic:state");

			if (serializedState === null) {
				return this.initializeState();
			}

			return JSON.parse(serializedState);
		} catch (err) {
			return this.initializeState();
		}
	}

	saveState(state) {
		try {
			let serializedState = JSON.stringify(state);
			localStorage.setItem("KabeersMusic:state", serializedState);

		} catch (err) {
		}
	}

	initializeState() {
		return {
			currentSong: {
				audioElement: new Audio(""),
				videoElement: {},
				playList: {index: 0, list: []},
				reOpenDialog() {
				}
			},
			drawer: false,
			q: "",
		};
	}
}
