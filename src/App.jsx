import React from "react";

//Route
import { Route, Routes } from "react-router-dom";

//components
import { Gallery } from "./components/Gallery";
import Header from "./components/Header";
import { PlaceSinglepage } from "./components/PlaceSinglepage";

//MUI components
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
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={<Gallery />}
                />
                <Route
                    path="/:id"
                    element={<PlaceSinglepage />}
                />
            </Routes>
        </ThemeProvider>
    );
};

export default App;
