// Importing Material UI components
import { Box, Button, Container, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

export default function NumberInputForm({ data, handleChange, handleSubmit }) {
    return (

        // Container centers the form horizontally and limits its width
        <Container maxWidth="md">

            {/* Form that takes input and generates a random number */}
            <form action="#">

                {/* Box used for vertical alignment and spacing */}
                <Box sx={{ height: 640, display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>

                    {/* Header text for the form */}
                    <Typography variant="h1" sx={{ fontSize: 75, m: 8, marginLeft: 8.6, marginBottom: 0 }}>
                        Enter Number Range!
                    </Typography>

                    {/* TextField for entering the starting number */}
                    <TextField
                        id="outlined-number"
                        label="Enter your starting number"
                        type="number"
                        name="numStart"
                        value={data.numStart}
                        onChange={handleChange}  // Updates state when the user enters a number
                    />

                    {/* TextField for entering the ending number */}
                    <TextField
                        id="outlined-number"
                        label="Enter your last number"
                        type="number"
                        name="numEnd"
                        value={data.numEnd}
                        onChange={handleChange}  // Updates state when the user enters a number
                    />

                    {/* Button to submit the form and trigger random number generation */}
                    <Button onClick={handleSubmit} variant="contained" color="success" sx={{ alignSelf: "center", fontSize: 16 }}>
                        Generate
                    </Button>
                </Box>
            </form>
        </Container>
    );
};