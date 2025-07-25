import {Box, Paper, Stack, Typography} from '@mui/material';
import {sxStyles} from "./heroSectionView.styles";
import React, {FC} from "react";

type HeroSectionViewProps = {
    Model: React.ReactNode;
}

const HeroSectionView: FC<HeroSectionViewProps> = ({Model}) => {
    return (
        <Stack sx={sxStyles.headerContainer} component={'section'}>
            {/*<video style={sxStyles.video} autoPlay muted loop>
                <source src={"https://res.cloudinary.com/dcyzs6uiu/video/upload/v1712753401/hril6rpie9bqt5gc82xw.mp4"}/>
            </video>*/}
            <Box sx={sxStyles.typoBox}>
                <Typography variant={'h1'} color={'primary.main'} sx={sxStyles.headerTypo}>Get Cake, </Typography>
                <Typography variant={'h1'} color={'primary.highlight'} sx={sxStyles.headerTypo}>Now!</Typography>
            </Box>
            <Paper elevation={2} sx={{height: '50vh', border: '2px solid var(--orange)', backgroundColor: 'var(--peach-fuzz-light)', width: '100vw', display: 'flex', justifyContent: 'center'}}>
                {Model}
            </Paper>
        </Stack>
    );
};

export default HeroSectionView;