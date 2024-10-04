---

# Random Number Generator

This is a simple and interactive random number generator web application built using React, Vite, and Material UI.
Users can input a range of numbers to generate random values, with a default range if none is provided.

## Features

- Input Range: Enter a starting number and an ending number to define the range for the random number generation.
- Default Range: If no input is provided, the app generates random numbers between 1 and 10.
- Multiple Pages: The app appears to transition to a new page after the user submits the input, displaying the generated number.
- Generate New Button: Once on the results page, users can generate a new random number by clicking the "Generate New" button.
- Header and Footer: Simple and minimal header and footer components for a clean UI.
- Material UI Integration: The app utilizes Material UI components to ensure a polished and responsive design.

## User Flow

- Input Page: The user enters the starting and ending number, then clicks the "Generate" button.
- Display Page: A new random number is generated within the specified range and displayed on a new page. The user can click "Generate New" to get another random number.
- Default Case: If no numbers are entered, the app will default to generating a random number between 1 and 10.

## Technologies Used

- React: Front-end library for building user interfaces.
- Vite: Build tool for fast development and optimized production builds.
- Material UI: For creating responsive and visually appealing components.
- JavaScript (ES6+): Main programming language.
- CSS: For styling a clean and user-friendly interface.

## ESLint and HMR

This project is set up with Vite and includes ESLint for code quality checks and Hot Module Replacement (HMR) for fast refresh during development.

- @vitejs/plugin-react: Uses Babel for fast refresh.
- @vitejs/plugin-react-swc: Uses SWC for fast refresh (optional alternative).

## Deployment

This web app is deployed using github pages by Tiger. You can access the live version of the app at https://surajprojects.github.io/random-number-generator-react

## Getting Started

To get the project running locally:

- Clone this repository.
- Navigate to the project directory.
- Install dependencies.
- Start the development server.
- Open your browser and go to http://localhost:3000 to view the app.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
