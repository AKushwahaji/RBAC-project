const express = require('express');
const connectDB = require('./config/db')
const dotenv = require('dotenv');

const authRoutes = require('./routes/auth');
const  adminRoutes = require('./routes/admin');
const moderatorRoutes = require('./routes/moderator');
const userRoutes = require('./routes/user');

dotenv.config();
connectDB();


const app = express();


// middleware
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/moderator", moderatorRoutes);
app.use("/api/users", userRoutes);


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`serer is running on port ${port}`);
})
