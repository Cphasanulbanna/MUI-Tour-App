import React from "react";

//css
import "./style.css";

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
        breakpoints: {
            values: {
                sm: 320,
                sm1: 480,
                sm2: 768,
                md: 1080,
                lg: 1200,
                xl: 1536,
            },
        },
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
