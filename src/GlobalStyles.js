import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let myTheme = createMuiTheme({
    palette:{
        primary:{
            main: "#111933"
        },
        secondary: {
            main: "#b5c0e675"
        },
        textColor: {
            main: "#f0f0f0"
        },
    },
    typography:{
        fontFamily: [
            "Poppins",
            "Open Sans",
            "sans-serif",
            "Roboto"
        ].join(","),
        h1: {
            fontSize: 50,
        },
        h2: {
            fontSize: 46,
        },
        subtitle1: {
            fontSize: 36
        },
        body1: {
            fontSize: 16,
        },
        button: {
            fontSize: 18
        },
    },
    overrides: {
        MuiCssBaseline:{
            "@global": {
                "*, *::before, *::after": {
                    margin: 0,
                    padding: 0,
                    boxSizing: "border-box",
                },
                "*::-webkit-scrollbar": {
                    width: "0.5rem",
                    backgroundColor: "#b5c0e6"
                },
                '*::-webkit-scrollbar-track': {
                    '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
                },
                "*::-webkit-scrollbar-thumb": {
                    backgroundColor: "#111933"
                },
                html: {
                    width: "100%",
                    height: "100%",
                },
                body: {
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#b5c0e675"
                },
                img: {
                    display: "block"
                }
            }
        },
        MuiButton: {
          text: {
            background: "radial-gradient(circle, rgba(57,83,171,1) 0%, rgba(34,50,102,1) 100%)",
            borderRadius: 3,
            border: 0,
            color: '#f0f0f0',
            height: 48,
            padding: '0 30px',
            boxShadow: '0 3px 5px 2px #3953AB07',
          },
        },
      },
});
myTheme = responsiveFontSizes(myTheme);

export default myTheme;