# JWT Authentication Demo

This project demonstrates how to implement **JWT (JSON Web Token)** based authentication in a Node.js and Express application. It includes a login route that issues a token and a protected route that requires a valid token to access. The JWT is set to expire after **10 seconds**, showcasing how short-lived tokens work in practice.

---

## 🔧 Tech Stack

- Node.js
- Express.js
- JSON Web Token (`jsonwebtoken`)
- dotenv

---

## 🚀 Features

- ✅ User login with token generation
- 🔐 JWT-based authentication
- ⏱️ Token expiration set to **10 seconds**
- 🔒 Protected route access using middleware
- 📦 Environment variables for secret management

---

## 📁 Project Structure

my-jwt-app/
├── backend/
│   ├── index.js             # Main server file
│   ├── routes/
│   │   └── auth.js          # Login and protected routes
│   ├── middleware/
│   │   └── verifyToken.js   # JWT verification logic
│   ├── .env                 # Environment variables (JWT secret)
│   └── package.json
├── frontend/
│   └── (Your frontend app, e.g., React code)
└── README.md
