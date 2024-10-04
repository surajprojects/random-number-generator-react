// Importing necessary React and Material UI components
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

// Array containing page options for the navigation menu
const pages = ["Generate New Number", "Follow us!"];

export default function Header() {

    // State to manage the anchor element for the navigation menu
    const [anchorElNav, setAnchorElNav] = useState(null);

    // Function to open the navigation menu when the menu icon is clicked
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    // Function to close the navigation menu
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (

        // AppBar component that holds the header elements, positioned statically
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    {/* Desktop view - Tiger Insights brand name, hidden on smaller screens */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".15rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        TIGER INSIGHTS
                    </Typography>

                    {/* Mobile view - Menu icon for navigation */}
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>

                        {/* Menu component that opens on clicking the menu icon */}
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: "block", md: "none" } }}
                        >

                            {/* Map over the pages array to create menu items for mobile view */}
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>

                                    {/* Each menu item has a link to either generate a new number or follow the site */}
                                    <Typography component="a" href={page === "Follow us!" ? "https://tigerxinsights.com/" : "#generate-new-number"} sx={{
                                        textAlign: "center",
                                        textDecoration: "none",
                                        color: "inherit",
                                        display: "block",
                                    }}>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* Mobile view - Tiger Insights brand name */}
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".15rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        TIGER INSIGHTS
                    </Typography>

                    {/* Desktop view - Navigation buttons for "Generate New Number" and "Follow us!" */}
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex", marginLeft: 50 } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                href={page === "Follow us!" ? "https://tigerxinsights.com/" : "#generate-new-number"}
                                sx={{ my: 2, color: "white", display: "block" }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};