import Link from 'next/link';
import { Box, Button, Typography, Paper } from '@mui/material';

export default function NotFound() {
    return (
        <Paper
            elevation={0}
            sx={{
                minHeight: '70vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                p: 4,
                backgroundColor: 'background.default',
            }}
        >
            <Typography variant="h2" gutterBottom>
                404 – Page Not Found
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, textAlign: 'center' }}>
                Sorry, we couldn’t find the page you’re looking for.
            </Typography>
            <Box>
                <Button component={Link} href="/" variant="contained">
                    Go Home
                </Button>
            </Box>
        </Paper>
    );
}
