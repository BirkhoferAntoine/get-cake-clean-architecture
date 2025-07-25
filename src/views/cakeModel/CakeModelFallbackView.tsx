'use client'

import {Skeleton} from "@mui/material";
import {sxStyles} from "@/views/cakeModel/cakeModelView.styles";

const CakeModelFallbackView = () => {
    return <Skeleton animation="pulse" sx={sxStyles.fallback}>
        Loading...
    </Skeleton>;
};

export default CakeModelFallbackView;