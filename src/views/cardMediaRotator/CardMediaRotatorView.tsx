import React, {type FC, RefObject} from "react";
import {Box, CardMedia, CardMediaProps} from "@mui/material";
import {sxStyles} from "@/views/cardMediaRotator/cardMediaRotatorView.styles";

type CardMediaRotatorViewProps = {
    alt?: string;
    props: CardMediaProps,
    imageRef: RefObject<HTMLImageElement | null>,
    containerRef: RefObject<HTMLDivElement | null>,
    handleMouseMove: (event: React.MouseEvent<HTMLDivElement>) => void;
};

const CardMediaRotatorView: FC<CardMediaRotatorViewProps> = (
    {props, imageRef, containerRef, handleMouseMove}
) => {
    return (
        <Box ref={containerRef} onMouseMove={handleMouseMove} sx={sxStyles.imageBox}>
            <CardMedia {...props}
                       component="img"
                       ref={imageRef}
                       sx={sxStyles.rotatingImage}/>
        </Box>
    );
};

export default CardMediaRotatorView;