import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Footer() {
    return (
        <AppBar position="static" sx={{ top: "auto", bottom: 0, bgcolor: "primary.main" }}>
            <Container maxWidth="xl">
                <Toolbar>
                    <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
                        <Typography variant="body1" color="inherit">
                            &copy; Tiger Insights 2024 | Made by Tiger
                        </Typography>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};