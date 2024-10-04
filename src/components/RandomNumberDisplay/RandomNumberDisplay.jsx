import { useRef, useState } from "react";
import { Container, Typography, Button, Box } from "@mui/material";


export default function RandomNumberDisplay({ startNum = 1, endNum = 10 }) {

    function randomNumber(start = startNum, end = endNum) {
        if (start > end) {
            const range = start - end;
            return Math.floor(Math.random() * (range + 1)) + end;
        }
        else {
            const range = end - start;
            return Math.floor(Math.random() * (range + 1)) + start;
        }
    };

    const [num, setNum] = useState(randomNumber);
    const numStart = useRef(0);
    const numEnd = useRef(0);
    numStart.current = startNum;
    numEnd.current = endNum;

    const handleClick = () => {
        setNum(randomNumber(numStart.current, numEnd.current));
    };

    return (
        <Container maxWidth="xl">
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 10 }}>

                <Typography variant="h1" sx={{ fontSize: 80, marginBottom: 3 }}>Random Number Generator!</Typography>

                <Typography variant="h2" sx={{ fontSize: 300, marginBottom: 4 }} >{num}</Typography>

                <Button onClick={handleClick} variant="contained" color="success" sx={{ fontSize: 16 }}>Generate New</Button>

            </Box>
        </Container>
    );
};