# NextGen-Internship-P1
# 📝 Real-Time Collaboration Tool

A real-time collaboration tool built using the **MERN** stack (MongoDB, Express.js, React, Node.js) along with **Socket.IO** for real-time document collaboration. This project allows users to edit, comment, and view document activity logs in real time. It features document versioning and user authentication using JWT tokens.

## 🚀 Features

- **Real-Time Collaboration**: Multiple users can edit the same document simultaneously. Changes are instantly reflected for all users in real-time.
- **Version History**: Keep track of document changes through version history and revert to previous versions if needed.
- **User Authentication**: Secure user registration and login with JWT-based authentication.
  
## 🧑🏻‍💻 Technologies Used

- **Frontend**: React, React Router, Socket.IO Client
- **Backend**: Node.js, Express.js, MongoDB, Socket.IO
- **Authentication**: JWT (JSON Web Tokens) for user authentication
- **Real-Time Communication**: Socket.IO for handling real-time document collaboration and updates

## 📁 Folder Structure

```
NextGen-Internship-P1/
├── backend/
│   ├── config/                  # Configuration files
│       ├── db.js                  
│   ├── middlewares/             # Middleware for authentication
│       ├── auth.js
│   ├── models/                  # MongoDB Models
│       ├── User.js
│       ├── Document.js
│   ├── routes/                  # API Routes
│       ├── auth.js
│       ├── documents.js
│   ├── server.js                # Backend server entry point
│   ├── .env                     # Environment Variables for database, JWT secret, etc.
│   ├── package.json             # Backend dependencies
├── frontend/
│   ├── src/                     # Frontend source code
│       ├── components/
│           ├── CreateDocument.js
│           ├── Dashboard.css
│           ├── Dashboard.js
│           ├── DocumentDetails.css
│           ├── DocumentDetails.js
│           ├── DocumentForm.css
│           ├── DocumentForm.js
│           ├── Documents.css
│           ├── Documents.js
│           ├── LandingPage.css
│           ├── LandingPage.js
│           ├── Login.css
│           ├── Login.js
│           ├── Register.css
│           ├── Regsiter.js
│           ├── Navbar.css
│           ├── Navbar.js
│       ├── services
│           ├── documentService.js
│   ├── public/                  # Public files (index.html, favicon.ico)
│   ├── package.json             # Frontend dependencies
├── .env                         # Environment variables for database, JWT secret, etc.
├── .gitignore                   # Git ignore file
└── README.md                    # Project documentation
```

## ⚙️ Setup Instructions

### 🧮 Prerequisites

- **Node.js** and **npm** installed
- **MongoDB** instance running (local or remote)
- A modern web browser (for frontend access)

### 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/22AIML021VishalMehta/NextGen-Internship-P1.git
   cd NextGen-Internship-P1
   ```

2. **Install Backend Dependencies**:
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**:
   ```bash
   cd frontend
   npm install
   ```

4. **Configure Environment Variables**:
   In the `backend/` directory, create a `.env` file and add the following variables:
   ```
   MONGO_URI=your_mongo_db_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

5. **Start the Backend**:
   ```bash
   cd backend
   node server.js
   ```

6. **Start the Frontend**:
   ```bash
   cd frontend
   npm start
   ```

   - The frontend will be running at `http://localhost:3000`
   - The backend will be running at `http://localhost:5000`

### 🧪 Running Tests

If you have any tests, you can run them using:
```bash
npm test
```

### 💻 Built With

- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing user and document data.
- **Socket.IO**: Real-time communication for collaborative editing.
- **React**: JavaScript library for building the frontend user interface.
- **JWT (JSON Web Tokens)**: For secure user authentication.

## 🫱🏻‍🫲🏻 Contributing

1. **Fork the repository**.
2. **Create a new branch** for your feature or fix.
3. **Make changes** and test them.
4. **Commit your changes** with a clear message.
5. **Push to your fork** and create a pull request to the `main` branch of the original repository.

All contributions are welcome!

## 📜 License

This project is licensed under the MIT License - see the [MIT](LICENSE) file for details.

---

Feel free to replace placeholders with your actual GitHub username, and modify the `.env` variables or instructions based on your actual setup.

---

## 💬 Contact  
For questions or suggestions, feel free to reach out:  
- **Name**: Vishal Mehta.  
- **Email**: 22aiml021@charusat.edu.in.  
- **GitHub**: [22AIML021VishalMehta](https://github.com/22AIML021VishalMehta)

---

Let me know if you'd like to modify any sections or add more details! [back to top](github.com/22AIML021VishalMehta/NextGen-Internship-P1/edit/main/README.md)
