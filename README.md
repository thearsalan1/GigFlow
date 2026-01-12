# GigFlow – Full Stack Development Assignment (Backend)

GigFlow is a mini freelance marketplace platform built as part of a Full Stack Development Internship assignment. The platform allows users to post gigs (jobs), submit bids, and securely hire freelancers using atomic database transactions.

This repository currently focuses on the **backend implementation**, designed with production-grade architecture, secure authentication, and robust data integrity.

---

## 🚀 Features Implemented

### ✅ Authentication

* User registration and login
* Password hashing using bcrypt
* JWT-based authentication
* JWT stored securely in **HttpOnly cookies**
* Protected routes using authentication middleware

### ✅ Gig Management

* Create gigs (jobs)
* Fetch all open gigs
* Search gigs by title
* Gig ownership enforcement
* Gig status lifecycle: `open → assigned`

### ✅ Bidding System

* Submit bids on open gigs
* Prevent bidding on own gig
* Prevent duplicate bids by same user
* View bids for a gig (owner-only access)
* Bid status lifecycle: `pending → hired / rejected`

### ✅ Hiring Logic (Core Highlight)

* Hire exactly **one** freelancer per gig
* Atomic hiring flow using **MongoDB Transactions**
* Automatically rejects all other bids
* Prevents race conditions (double hiring)
* Strict authorization (only gig owner can hire)

---

## 🛠️ Tech Stack

**Backend**

* Node.js
* Express.js
* MongoDB
* Mongoose

**Authentication & Security**

* JWT (JSON Web Tokens)
* HttpOnly Cookies
* bcryptjs

---

## 📁 Project Structure

```
backend/
│
├── src/
│   ├── config/          # Database connection
│   ├── models/          # Mongoose models (User, Gig, Bid)
│   ├── controllers/     # Business logic
│   ├── routes/          # API routes
│   ├── middlewares/     # Auth middleware
│   └── app.js           # Express app setup
│
├── server.js            # Server entry point
├── .env.example         # Environment variables template
├── package.json
└── README.md
```

---

## 🔐 Environment Variables

Create a `.env` file in the backend root and configure the following:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

A `.env.example` file is provided for reference.

---

## ▶️ Running the Project Locally

1. Clone the repository

```bash
git clone <repository-url>
```

2. Navigate to backend folder

```bash
cd backend
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

Server will run on:

```
http://localhost:5000
```

---

## 📌 API Endpoints

### Auth

* `POST /api/auth/register` – Register user
* `POST /api/auth/login` – Login user

### Gigs

* `GET /api/gigs` – Fetch open gigs (with search)
* `POST /api/gigs` – Create a gig (authenticated)

### Bids

* `POST /api/bids` – Submit a bid
* `GET /api/bids/:gigId` – View bids for a gig (owner only)
* `PATCH /api/bids/:bidId/hire` – Hire a freelancer (atomic)

---

## ⭐ Key Learning Outcomes

* Secure authentication using HttpOnly cookies
* Designing relational data models in MongoDB
* Enforcing authorization and ownership rules
* Implementing atomic operations using MongoDB transactions
* Preventing race conditions in real-world backend systems

---

## 🎯 Assignment Status

* ✅ Core requirements completed
* ⏳ Frontend integration (pending)
* ⏳ Socket.io real-time notifications (bonus)

---

## 👤 Author

**Arsalan Mohd**
Backend Developer | MERN Stack

---

## 📄 License

This project is created for assessment and learning purposes.
