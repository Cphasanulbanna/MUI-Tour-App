import React from "react";

//components
import { Gallery } from "./components/Gallery";

//MUI components
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material";

const App = () => {
    const theme = createTheme({
        components: {
            MuiTypography: {
                variants: [
                    {
                        props: {
                            variant: "body2",
                        },
                        style: {
                            fontSize: 14,
                        },
                    },
                    {
                        props: {
                            variant: "body3",
                        },
                        style: {
                            fontSize: 12,
                        },
                    },
                ],
            },
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Gallery />
            </Container>
        </ThemeProvider>
    );
};

export default App;
