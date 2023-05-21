import React from "react";

//components
import { Gallery } from "./components/Gallery";

//MUI components
import Container from "@mui/material/Container";

const App = () => {
    return (
        <>
            <Container>
                <Gallery />
            </Container>
        </>
    );
};

export default App;
