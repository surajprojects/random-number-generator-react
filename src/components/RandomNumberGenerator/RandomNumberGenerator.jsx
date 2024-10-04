// Importing necessary React and Material UI components
import { useState } from "react";
import { Container } from "@mui/material";

// Importing custom components: NumberInputForm and RandomNumberDisplay
import NumberInputForm from "../NumberInputForm/NumberInputForm";
import RandomNumberDisplay from "../RandomNumberDisplay/RandomNumberDisplay";

export default function RandomNumberGenerator() {

    // State to manage the form data and a flag to toggle between input form and number display
    const [formData, setFormData] = useState({
        numStart: "",    // Stores the start number input
        numEnd: "",      // Stores the end number input
        isBtnClicked: false  // Tracks if the form button has been clicked
    });

    // Function to handle changes in the input fields
    const handleFormChange = (evt) => {
        const changedField = evt.target.name;   // Identifies the changed field (either numStart or numEnd)
        const newValue = evt.target.value;      // Retrieves the new value from the input field
        setFormData((currData) => {
            return {
                ...currData,           // Keeps the rest of the form data unchanged
                [changedField]: newValue  // Updates the specific field that changed
            };
        });
    };

    // Function to handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();   // Prevents the default form submission behavior
        setFormData((currData) => {

            // If both fields are empty, set default values for numStart and numEnd
            if (currData.numStart === "" && currData.numEnd === "") {
                return { ...currData, numStart: "1", numEnd: "10", isBtnClicked: !currData.isBtnClicked };
            }
            // Otherwise, just toggle the isBtnClicked state to show the random number display
            else {
                return { ...currData, isBtnClicked: !currData.isBtnClicked };
            }
        });
    };

    return (
        <>
            <Container maxWidth="xl">

                {/* If the button has been clicked, show the random number display, otherwise show the input form */}
                {formData.isBtnClicked
                    ? <RandomNumberDisplay startNum={Number(formData.numStart)} endNum={Number(formData.numEnd)} />
                    : <NumberInputForm data={formData} handleChange={handleFormChange} handleSubmit={handleFormSubmit} />}
            </Container>
        </>
    );
};