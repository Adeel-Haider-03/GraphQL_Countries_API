# Countries Information Finder

This React application allows users to explore detailed information about various countries, including their capital, currency, languages, and states. The data is fetched from the [Trevor Blades' Countries GraphQL API](https://countries.trevorblades.com/).

## Features

- **Country Selection**: Users can select a country from a dropdown menu to view detailed information about it.
- **Detailed Information**: Displays country name, emoji, capital, currency, languages, and states.
- **GraphQL API**: Utilizes a GraphQL API to fetch data dynamically.

## Installation

1. **Clone the repository:**

   git clone https://github.com/yourusername/countries-information-finder.git
   cd countries-information-finder

2. **Install dependencies:**

   npm install

3. **Start the development server:**

   npm run dev
   
   The app should now be running on http://localhost:3000

## Usage

1. Select a country from the dropdown list.
2. The app will display the selected country's details including its capital, currency, languages, and states.

## Project Structure

- **`App.js`**: Main component that handles fetching country data and rendering the country selection dropdown.
- **`Country.js`**: Child component that displays detailed information about the selected country.
- **`App.css`**: Contains styling for the application.

## API

This project uses [Trevor Blades' Countries GraphQL API](https://countries.trevorblades.com/) to fetch country information.
