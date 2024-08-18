# React Forms Project

## Overview

This project is a form handling application built with React and TypeScript. The application demonstrates two approaches to managing forms: using uncontrolled components and using React Hook Form. Both approaches allow users to submit data, which is then stored in Redux and displayed on the main page.

## Features

- **Three Routes**:

  - **Main Page**: Displays submitted data from both forms.
  - **Uncontrolled Form**: A form built with traditional uncontrolled components.
  - **React Hook Form**: A form using the React Hook Form library for live validation.

- **Form Data Collection**:

  - **Name**: Validated for an initial uppercase letter.
  - **Age**: Must be a positive number.
  - **Email**: Standard email format validation.
  - **Passwords**: Password strength validation with matching confirmation.
  - **Gender Selection**: Via radio buttons or a select control.
  - **Terms and Conditions**: Must be accepted (checkbox).
  - **Image Upload**: Supports PNG/JPEG files, with validation, saved as base64.
  - **Country Autocomplete**: Select a country from a list stored in Redux.

- **Validation**:

  - **Yup** is used for schema-based validation.
  - **Uncontrolled Form**: Validation occurs on submit.
  - **React Hook Form**: Live validation as you type.

- **State Management**:

  - **Redux** is used to store form data and manage application state.

- **User Experience**:
  - After successful form submission, the user is redirected to the main page where the newly entered data is highlighted briefly to indicate success.

## Setup and Installation

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Run the application using `npm run dev`.
4. Lint code with `npm run lint` and format with `npm run format:fix`.

## Tools and Libraries

- **React**: UI library.
- **TypeScript**: Ensures type safety.
- **ESLint & Prettier**: Maintain code quality and consistency.
- **Husky**: Ensures linting on pre-commit.
- **React Hook Form**: Simplifies form handling.
- **Yup**: Provides schema-based form validation.
- **Redux Toolkit**: Manages application state.
- **React Router**: Handles navigation between pages.
