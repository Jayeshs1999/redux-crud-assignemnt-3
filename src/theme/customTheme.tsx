import { createTheme } from "@mui/material";

const customTheme = createTheme({
    palette: {
        primary: {
            main: '#ce93d8'
        },
        secondary: {
            main: '#007bff'
        },
        info: {
            main: '#247cd4'
        },
        error: {
            main: '#cf2726'
        }
    },
    typography: {
        fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    }
})

export default customTheme;