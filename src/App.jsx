import React from "react";

//components
import { TourCard } from "./components/TourCard";

//MUI components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const App = () => {
    return (
        <>
            <Container>
                <Grid
                    container
                    spacing={5}
                >
                    <TourCard />
                    <TourCard />
                    <TourCard />
                    <TourCard />
                </Grid>
            </Container>
        </>
    );
};

export default App;
