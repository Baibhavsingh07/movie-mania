# Movie Mania

## Description

Movie Mania is a web application that allows users to search for movies, view detailed information about them, and manage their movie collections. This project utilizes the [OMDb API](http://www.omdbapi.com/) to fetch movie data and provides a user-friendly interface for an enhanced browsing experience.

## Features

- **Search Movies**: Users can search for movies by title and get a list of matching results.
- **Movie Details**: View detailed information about a selected movie, including plot, cast, release year, and more.
- **Favorites**: Users can add movies to their favorites list for quick access.
- **User Authentication**: Secure login and registration system for personalized experiences.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **API**: OMDb API
- **Authentication**: JWT (JSON Web Tokens)
- **Version Control**: Git

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Baibhavsingh07/movie-mania.git
    ```
2. Navigate to the project directory:
    ```bash
    cd movie-mania
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Add the following environment variables to the `.env` file:
        ```plaintext
        PORT=your_port_number
        MONGODB_URI=your_mongodb_uri
        OMDB_API_KEY=your_omdb_api_key
        JWT_SECRET=your_jwt_secret
        ```
5. Start the server:
    ```bash
    npm start
    ```

## Usage

- Visit `http://localhost:your_port_number` in your web browser.
- Register for a new account or log in with an existing account.
- Use the search bar to find movies.
- Click on a movie to view its details.
- Add movies to your favorites list by clicking the "Add to Favorites" button.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [OMDb API](http://www.omdbapi.com/) for providing movie data.
- All open-source contributors and the community for their support.
