# GigFlow – Full Stack Freelance Marketplace

## 📌 Assignment Overview

GigFlow is a full‑stack freelance gig marketplace built as part of the given assignment. The platform allows clients to post gigs, freelancers to place bids, and clients to hire freelancers using an **atomic and race‑condition‑safe hiring flow**.

The project focuses on:

* Secure authentication using JWT (HttpOnly cookies)
* Clean REST API design
* Role‑based access control
* Transaction‑safe business logic
* Production‑ready backend structure

---

## 🚀 Features Implemented

### 🔐 Authentication & Authorization

* User registration and login
* JWT authentication using **HttpOnly cookies**
* Secure logout
* Protected routes
* Role‑based access control (Client / Freelancer)

### 📄 Gig Management

* Create a gig (Client only)
* Fetch all open gigs
* Search gigs by title
* Gig status management (open / in‑progress / closed)

### 💰 Bidding System

* Freelancers can place bids on open gigs
* Clients can view all bids on their gigs
* Bid status tracking (pending / accepted / rejected)

### 🤝 Atomic Hiring Logic (Core Requirement)

* Only **one bid can be hired per gig**
* Implemented using **MongoDB transactions**
* Prevents race conditions when multiple hire requests occur
* Automatically updates:

  * Gig status
  * Selected bid status
  * Rejection of other bids

### 🧑‍💻 Frontend (React)

* Login & Register pages
* Role‑based dashboard UI
* Search gigs functionality
* Bid submission UI
* View bids per gig
* Logout support

---

## 🛠 Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* MongoDB Transactions

### Frontend

* React (Vite)
* Redux Toolkit
* Axios
* React Router

### Deployment

* Backend: Render
* Frontend: Vercel
* Database: MongoDB Atlas

---

## 📂 Backend Folder Structure

```
backend/
│── controllers/
│── models/
│── routes/
│── middleware/
│── config/
│── index.js
│── package.json
```

---

## 🔑 Environment Variables

### Backend (`.env`)

```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
NODE_ENV=production
PORT=5000
```

### Frontend (`.env`)

```
VITE_API_URL=your_backend_api_url
```

---

## 🔒 Security Considerations

* JWT stored in **HttpOnly cookies** (not accessible via JavaScript)
* CORS configured with credentials support
* No sensitive data stored in localStorage
* Backend enforces authorization regardless of frontend state

---

## ⚠️ Known Limitation

* Authentication state resets on browser refresh since Redux state is in‑memory. This can be enhanced by adding an `/auth/me` endpoint to rehydrate user state.

---

## ▶️ How to Run Locally

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## ✅ Assignment Completion Status

* All required backend functionalities implemented
* Atomic hiring logic completed
* Search and role‑based UI implemented
* Secure authentication flow implemented
* Project deployed and submission‑ready

---

## 👤 Author

**Mohd Arsalan**

---

## 📝 Final Note

This project was developed strictly following the assignment requirements with a focus on correctness, security, and production‑ready architecture.
