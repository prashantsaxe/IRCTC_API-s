# Railway Management System API

This is a REST API for a Railway Management System similar to IRCTC.

## Features

- User registration and authentication
- Role-based access (Admin/User)
- Train and station management
- Seat availability checking
- Booking functionality with race condition handling
- Detailed booking information

## Setup Instructions

### Prerequisites
- Node.js
- PostgreSQL

### Installation

1. Clone the repository
2. Install dependencies:
```
npm install
```
3. Set up environment variables in `.env` file:
```
DATABASE_URL="postgresql://username:password@localhost:5432/railway_management"
JWT_SECRET="your_secret_key"
ADMIN_API_KEY="your_admin_api_key"
PORT=3000
```
4. Run database migrations:
```
npx prisma migrate dev
```
5. Start the server:
```
npm run dev
```

## API Endpoints

### Authentication
- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login user
- `POST /api/users/logout` - Logout user (requires auth)

### Trains
- `GET /api/trains` - Get all trains
- `GET /api/trains/:id` - Get train by ID
- `POST /api/trains` - Add a new train (admin only)
- `POST /api/trains/routes` - Add a train route (admin only)
- `PUT /api/trains/:id/seats` - Update train seats (admin only)

### Stations
- `GET /api/stations` - Get all stations
- `GET /api/stations/:id` - Get station by ID
- `POST /api/stations` - Add a new station (admin only)

### Bookings
- `GET /api/bookings/availability` - Check seat availability
- `POST /api/bookings` - Book a seat (requires auth)
- `GET /api/bookings` - Get user's bookings (requires auth)
- `GET /api/bookings/:id` - Get booking details (requires auth)

## Admin API Access

Admin endpoints require the `x-api-key` header to be set with the admin API key.
