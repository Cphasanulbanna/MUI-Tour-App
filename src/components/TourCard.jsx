import React from "react";

//MUI components
import Paper from "@mui/material/Paper";
import { Box, Grid, Typography } from "@mui/material";

export const TourCard = () => {
    return (
        <>
            <Grid
                item
                xs={3}
            >
                <Paper elevation={3}>
                    <div className="place">
                        <img
                            src="https://images.unsplash.com/photo-1463695970743-ae65cca05743?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmlhZ3JhJTIwZmFsbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                            alt="place"
                        />
                    </div>
                    <Box paddingX={1}>
                        <Typography
                            variant="subtitle1"
                            component={"h2"}
                        >
                            Immerse into the falls
                        </Typography>
                    </Box>
                </Paper>
            </Grid>
        </>
    );
};
