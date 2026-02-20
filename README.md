# AlphaReviews - Server

This is the backend server for the Hero Assignment 10 project, built with Node.js, Express, and MongoDB. It provides APIs for managing reviews and user data, including watchlist functionality.

## Vercel

[Vercel Link](https://hero-assignment-10-server.vercel.app/)

## 🚀 Live Site

[Live Site Link](https://simple-firebase-3e1e3.web.app/)

## 🚀 Features

- **Reviews Management**: Full CRUD operations for reviews.
- **Top Rated Reviews**: Fetch highest-rated reviews for display.
- **User Management**: Store user information and manage watchlists.
- **Watchlist**: Add and remove reviews from a user's watchlist.
- **MongoDB Integration**: Robust data storage using MongoDB.
- **Environment Configuration**: Securely manage credentials using dotenv.

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Native Driver)
- **Deployment**: Configured for Vercel

## 🛣️ API Endpoints

### Reviews (`/api/v1/reviews`)

- `GET /` - Get all reviews
- `POST /addReview` - Add a new review
- `GET /highestRatedReviews` - Get top-rated reviews
- `GET /byEmail/:email` - Get reviews submitted by a specific user email
- `GET /:id` - Get a single review by ID
- `PATCH /:id` - Update a review
- `DELETE /:id` - Delete a review

### Users (`/api/v1/users`)

- `GET /` - Get all users
- `POST /` - Add a new user
- `GET /:email` - Get a single user by email
- `GET /byname/:username` - Get a user by username
- `PATCH /addToWatchlist` - Add a review to user's watchlist
- `PATCH /deleteFromWatchlist` - Remove a review from user's watchlist
