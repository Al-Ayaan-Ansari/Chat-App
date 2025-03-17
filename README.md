# Real-Time Chat App

🚀 **A feature-rich real-time chat application with multiple themes and a responsive design.**

## 🌟 Features
- **Real-time Messaging** 📩
- **Multiple Embedded Themes** 🎨 (Powered by DaisyUI)
- **User Authentication** 🔑 (JWT-based)
- **Secure Passwords** 🔒 (Bcrypt Encryption)
- **Image Uploads** 📸 (Cloudinary Integration)
- **Fully Responsive UI** 📱💻

## 🔮 Planned Features
- 🔐 **End-to-End Encryption** for enhanced privacy
- 🎟️ **Invite-Only Chats** for controlled access
- 👥 **Friend Groups Formation** for better organization
- 📹 **Video Sharing** within chats

## 🛠️ Technologies Used
### **Frontend:**
- React
- DaisyUI
- Zustand
- Socket-Client

### **Backend:**
- Express
- Axios
- Socket.IO
- JWT Token
- Cloudinary
- MongoDB
- Bcrypt

## 🚀 Getting Started

### Prerequisites
Make sure you have **Node.js** and **MongoDB** installed.

### Installation
1. **Clone the Repository**
   ```bash
   git clone https://github.com/Al-Ayaan-Ansari/Chat-App.git
   cd Chat-App
   ```
2. **Install Dependencies**
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env` file in the `backend` directory and configure the following:
   ```env
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

4. **Run the Application**
   ```bash
   # Start the backend
   cd backend
   npm start
   
   # Start the frontend
   cd ../frontend
   npm start
   ```

## 📂 Folder Structure
```
Chat-App/
├── backend/         # Express.js Backend
│   ├── models/      # Database Models
│   ├── routes/      # API Routes
│   ├── config/      # Configuration Files
│   ├── server.js    # Entry Point
│
├── frontend/        # React Frontend
│   ├── src/
│   │   ├── components/  # UI Components
│   │   ├── context/     # Zustand State Management
│   │   ├── pages/       # Application Pages
│   │   ├── App.js       # Main App File
│
├── .gitignore
├── README.md
└── package.json
```

## 🌍 Live
🔗(https://chat-app-qut6.onrender.com)

## 💡 Contributing
Pull requests are welcome! Feel free to open an issue for feature requests or bug reports.

## 📜 License
This project is licensed under the **LICENSE**.

---

🚀 **Let's make communication more interactive and fun!**

Happy Coding! 💻🔥
