import { Box, Button, Container, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

export default function NumberInputForm({ data, handleChange, handleSubmit }) {
    return (
        <Container maxWidth="md">
            <form action="#">
                <Box sx={{ height: 640, display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                    <Typography variant="h1" sx={{ fontSize: 75, m: 8, marginLeft: 8.6, marginBottom: 0 }}>Enter Number Range!</Typography>
                    <TextField
                        id="outlined-number"
                        label="Enter your starting number"
                        type="number"
                        name="numStart"
                        value={data.numStart}
                        onChange={handleChange}
                    />
                    <TextField
                        id="outlined-number"
                        label="Enter your last number"
                        type="number"
                        name="numEnd"
                        value={data.numEnd}
                        onChange={handleChange}
                    />
                    <Button onClick={handleSubmit} variant="contained" color="success" sx={{ alignSelf: "center", fontSize: 16 }}>Generate</Button>
                </Box>
            </form >
        </ Container>
    );
};