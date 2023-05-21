import React from "react";

//packages
import { useParams } from "react-router-dom";

export const PlaceSinglepage = () => {
    const { id } = useParams();
    return <div>PlaceSinglepage id is : {id}</div>;
};
