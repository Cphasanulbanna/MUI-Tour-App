import React from "react";

//components
import { TourCard } from "./TourCard";

//MUI components
import { Grid } from "@mui/material";

export const Gallery = () => {
    return (
        <>
            <Grid
                container
                spacing={5}
            >
                <TourCard />
                <TourCard />
                <TourCard />
                <TourCard />
            </Grid>
        </>
    );
};
