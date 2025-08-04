import React from "react";
import {sxStyles} from "@/presentation/views/home/homeView.styles";
import {Box, Container} from "@mui/system";
import HeroSectionPresenter from "@/interface-adapters/presenters/HeroSectionPresenter";

const HomeView = ({children}: {children: React.ReactNode}) => {
    return (
        <Box sx={sxStyles.container}>
            <HeroSectionPresenter/>
            <Box component={'section'} >
                <Box sx={sxStyles.background}/>
                <Box sx={sxStyles.background2}/>
                <Container>
                    {children}
                </Container>
            </Box>
        </Box>
    );
};

export default HomeView;