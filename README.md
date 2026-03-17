# Room Finder

## Project Overview
Room Finder is a web application designed to help users find and book rooms in various locations efficiently. It offers a user-friendly interface and powerful search capabilities to ensure that users can find their ideal space with ease.

## Features
- **User Authentication**: Secure login and registration for users.
- **Room Search**: Advanced filtering and search options to locate rooms.
- **Booking System**: Integrated booking functionality to reserve rooms.
- **User Dashboard**: Personalized dashboard to manage bookings and preferences.

## Tech Stack
- **Frontend**: React.js, CSS, HTML
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)

## Installation Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/Neeraj-NP/Room_Finder.git
   cd Room_Finder
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```bash
   DATABASE_URL=<your_database_url>
   JWT_SECRET=<your_jwt_secret>
   PORT=5000
   ```
4. Run the application:
   ```bash
   npm start
   ```

## Usage Guide
- Navigate to the homepage to start searching for rooms.
- Use the filters to refine your search results.
- Select a room to view details and proceed to book.

## API Endpoints
- `GET /api/rooms`: Retrieve all available rooms.
- `POST /api/rooms`: Add a new room (admin only).
- `GET /api/rooms/:id`: Retrieve details of a specific room.
- `POST /api/bookings`: Create a new booking.

## Folder Structure
```
Room_Finder/
│
├── client/           # Frontend files
├── server/           # Backend files
│   ├── models/       # Database models
│   ├── routes/       # API routes
│   └── controllers/  # Request handlers
├── .env              # Environment variables
└── README.md         # Project documentation
```

## Environment Variables
- `DATABASE_URL`: URL to the MongoDB database.
- `JWT_SECRET`: Secret key for signing JSON Web Tokens.
- `PORT`: Port number to run the server.

For further information, please refer to the official documentation and guidelines.