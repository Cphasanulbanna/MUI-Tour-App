import React from "react";

//packages
import { useParams } from "react-router-dom";

//MUI components
import { Box, Container, Typography } from "@mui/material";

//components
import { TourGrid } from "./TourGrid";

export const PlaceSinglepage = () => {
    const { id } = useParams();
    return (
        <Container sx={{ width: "900px" }}>
            <Typography
                variant="h3"
                component={"h1"}
                marginTop={3}
            >
                Explore the world in Vegas
            </Typography>
            <Box
                marginTop={3}
                sx={{ display: "flex", width: "100%" }}
            >
                <div style={{ width: "65%" }}>
                    <img
                        src="https://images.ctfassets.net/rxqefefl3t5b/5QX5qG3dBxzfT3rwyTmVIb/ff5224e4d76af8b9021fb409cf2641e9/shutterstock_1499600606_copy.jpg?fl=progressive&q=80"
                        alt="left-img"
                    />
                </div>

                <TourGrid />
            </Box>
        </Container>
    );
};
