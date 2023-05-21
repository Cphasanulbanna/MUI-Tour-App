import React from "react";

//components
import { TourCard } from "./TourCard";

//MUI components
import { Grid, Typography } from "@mui/material";
import Container from "@mui/material/Container";

//data
import places from "../data/data.json";

export const Gallery = () => {
    return (
        <Container>
            {places.map((place, index) => (
                <>
                    <Typography
                        variant="h4"
                        component={"h2"}
                        marginY={"20px"}
                        key={index}
                    >
                        Top {place?.name} Tours
                    </Typography>

                    <Grid
                        key={index}
                        container
                        spacing={5}
                    >
                        {place.tours.map((tour, index) => (
                            <TourCard tour={tour} />
                        ))}
                    </Grid>
                </>
            ))}
        </Container>
    );
};
