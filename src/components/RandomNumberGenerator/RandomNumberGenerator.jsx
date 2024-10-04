import { useState } from "react";
import NumberInputForm from "../NumberInputForm/NumberInputForm";
import RandomNumberDisplay from "../RandomNumberDisplay/RandomNumberDisplay";
import { Container } from "@mui/material";

export default function RandomNumberGenerator() {
    const [formData, setFormData] = useState({
        numStart: "",
        numEnd: "",
        isBtnClicked: false
    });

    const handleFormChange = (evt) => {
        const changedField = evt.target.name;
        const newValue = evt.target.value;
        setFormData((currData) => {
            return {
                ...currData,
                [changedField]: newValue
            };
        });
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFormData((currData) => {
            if (currData.numStart === "" && currData.numEnd === "") {
                return { ...currData, numStart: "1", numEnd: "10", isBtnClicked: !currData.isBtnClicked };
            }
            else {
                return { ...currData, isBtnClicked: !currData.isBtnClicked };
            }
        });
    };

    return (
        <>
            <Container maxWidth="xl">
                {formData.isBtnClicked ? <RandomNumberDisplay startNum={Number(formData.numStart)} endNum={Number(formData.numEnd)} /> : <NumberInputForm data={formData} handleChange={handleFormChange} handleSubmit={handleFormSubmit} />}
            </Container>
        </>
    );
};