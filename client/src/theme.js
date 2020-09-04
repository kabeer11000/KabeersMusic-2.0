export const colors = (darkState) => ({
    primary: {
        contrastText: darkState ? "#757575" : "#FFFFFF",
        main: "#68C398",
        light: darkState ? "#757575" : "#FFFFFF",
        dark: darkState ? "#303030" : "#FFFFFF",
        miniPlayer: {
            main: darkState ? "#303030" : "#FEFEFE",
            borderTop: darkState ? "#507262" : "#3C3F41",
            text: darkState ? "#FFFFFF" : "#2B2B2B",
        },
        player: {
            slider: {
                rail: '#FFF',
                thumb: '#FFF',
                thumbColorPrimary: '#FFF'
            },
            invertButtons: {
                main: "#68C398",
                invert: "#FFFFFF"
            }
        }
    },
    secondary: {
        main: "#68C398",
        light: darkState ? "#757575" : "#FFFFFF",
        dark: darkState ? "#303030" : "#FFFFFF"
    },
    background: {},
});
