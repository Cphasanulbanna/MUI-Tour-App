import React from "react";

//components
import { TourCard } from "./TourCard";

//MUI components
import { Grid, Typography } from "@mui/material";

//data
import places from "../data/data.json";

export const Gallery = () => {
    return (
        <>
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
        </>
    );
};
