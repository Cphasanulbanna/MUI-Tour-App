import React, { useState } from "react";

//MUI components
import Paper from "@mui/material/Paper";
import { Box, Grid, Rating, Typography } from "@mui/material";

//MUI icons
import { AccessTime } from "@mui/icons-material";

export const TourCard = ({ tour }) => {
    const [rating, setRating] = useState(3.5);
    const flex = { display: "flex", alignItems: "center", gap: "8px" };
    return (
        <>
            <Grid
                item
                sm={12}
                sm1={6}
                sm2={4}
                md={3}
            >
                <Paper elevation={3}>
                    <div className="place">
                        <img
                            src={tour.image}
                            alt="place"
                        />
                    </div>
                    <Box paddingX={1}>
                        <Typography
                            variant="subtitle1"
                            component={"h2"}
                        >
                            {tour.name}
                        </Typography>
                        <Box sx={flex}>
                            <AccessTime sx={{ width: "13px", height: "13px" }} />
                            <Typography
                                variant="body2"
                                component={"p"}
                            >
                                {tour.duration} hours
                            </Typography>
                        </Box>
                        <Box
                            marginTop={3}
                            sx={flex}
                        >
                            <Rating
                                precision={0.5}
                                size="small"
                                name="simple-controlled"
                                value={rating}
                                onChange={(event, newValue) => {
                                    setRating(newValue);
                                }}
                            />
                            <Typography
                                variant="body2"
                                component={"p"}
                            >
                                {rating}
                            </Typography>
                            <Typography
                                variant="body3"
                                component={"p"}
                            >
                                ({tour.numberOfReviews} reviews)
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                variant="56"
                                component={"h3"}
                                marginTop={1}
                            >
                                From ${tour.price}
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </Grid>
        </>
    );
};
