import {Box, IconButton} from "@mui/material";
import Link from "next/link";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { sxStyles } from './socialBarView.styles';

const SocialBarView = () => {
    return (
        <Box>
            <Link href={'https://linkedin.com/in/antoine-birkhofer'}>
                <IconButton sx={sxStyles.iconButton}>
                    <LinkedInIcon/>
                </IconButton>
            </Link>
            <Link href={'https://github.com/birkhoferantoine'}>
                <IconButton sx={sxStyles.iconButton}>
                    <GitHubIcon/>
                </IconButton>
            </Link>
        </Box>
    );
};

export default SocialBarView;