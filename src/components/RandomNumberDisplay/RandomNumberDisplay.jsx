// Importing necessary React and Material UI components
import { useRef, useState } from "react";
import { Container, Typography, Button, Box } from "@mui/material";

export default function RandomNumberDisplay({ startNum = 1, endNum = 10 }) {

    // Function to generate a random number between a given range (start and end)
    function randomNumber(start = startNum, end = endNum) {
        if (start > end) {
            // Handles case where start is greater than end
            const range = start - end;
            return Math.floor(Math.random() * (range + 1)) + end;
        }
        else {
            // Handles case where end is greater than start
            const range = end - start;
            return Math.floor(Math.random() * (range + 1)) + start;
        }
    };

    // State to store the generated random number
    const [num, setNum] = useState(randomNumber);

    // useRef to hold references to the start and end numbers
    const numStart = useRef(0);
    const numEnd = useRef(0);
    numStart.current = startNum;  // Assigns the start number
    numEnd.current = endNum;      // Assigns the end number

    // Function to handle the button click and generate a new random number
    const handleClick = () => {
        setNum(randomNumber(numStart.current, numEnd.current));
    };

    return (

        // Container centers the content and sets max width
        <Container maxWidth="xl">
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 10 }}>

                {/* Title for the random number generator */}
                <Typography variant="h1" sx={{ fontSize: 80, marginBottom: 3 }}>
                    Random Number Generator!
                </Typography>

                {/* Displays the generated random number */}
                <Typography variant="h2" sx={{ fontSize: 300, marginBottom: 4 }}>
                    {num}
                </Typography>

                {/* Button to generate a new random number */}
                <Button onClick={handleClick} variant="contained" color="success" sx={{ fontSize: 16 }}>
                    Generate New
                </Button>
            </Box>
        </Container>
    );
};