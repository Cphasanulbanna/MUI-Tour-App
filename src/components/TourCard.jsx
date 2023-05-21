import React from "react";

//MUI components
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";

export const TourCard = () => {
    return (
        <>
            <Grid
                item
                xs={3}
            >
                <Paper elevation={3}>TourCard</Paper>
            </Grid>
        </>
    );
};
