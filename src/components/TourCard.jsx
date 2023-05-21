import React, { useState } from "react";

//MUI components
import Paper from "@mui/material/Paper";
import { Box, Grid, Rating, Typography } from "@mui/material";

//MUI icons
import { AccessTime } from "@mui/icons-material";

export const TourCard = () => {
    const [rating, setRating] = useState(3.5);
    const flex = { display: "flex", alignItems: "center", gap: "8px" };
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
                        <Box sx={flex}>
                            <AccessTime sx={{ width: "13px", height: "13px" }} />
                            <Typography
                                variant="body2"
                                component={"p"}
                            >
                                5 hours
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
                                (500 reviews)
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                variant="56"
                                component={"h3"}
                                marginTop={1}
                            >
                                From $200
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </Grid>
        </>
    );
};
