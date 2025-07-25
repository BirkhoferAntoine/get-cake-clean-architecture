import {AppBar, Toolbar, Typography} from "@mui/material";
import {Box} from "@mui/system";
import SocialBarView from "@/views/layout/socialBar/SocialBarView";
import {sxStyles} from "@/views/layout/footer/footerView.styles";

export default function FooterView() {
    return (
        <AppBar position="fixed" color="transparent" sx={sxStyles.appBar} component={'footer'}>
            <Toolbar>
                <Box sx={{flexGrow:1}}/>
                <Typography color={'text.secondary'}>Made with 💖 by Antoine Birkhofer</Typography>
                <SocialBarView />
            </Toolbar>
        </AppBar>
    )
}
