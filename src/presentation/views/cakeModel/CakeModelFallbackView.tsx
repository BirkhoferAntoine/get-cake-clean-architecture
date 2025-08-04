'use client'

import React from "react";
import {Skeleton} from "@mui/material";
import {sxStyles} from "@/presentation/views/cakeModel/cakeModelView.styles";

const CakeModelFallbackView = () => {
    return <Skeleton animation="pulse" sx={sxStyles.fallback}>
        Loading...
    </Skeleton>;
};

export default CakeModelFallbackView;