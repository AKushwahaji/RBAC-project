const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Register user
const registerUser = async (req, res, next) => {
    try{
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({name,password:hashedPassword,email,role});

    await newUser.save();
    res.status(201).json({message: 'User registered in successfully'});

    }
    catch(err){
        res.status(500).json({message: 'Server Error'});
    }
};

// Login user
const loginUser = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({ message: 'Please provide both email and password' });
        }

        const validUser = await User.findOne({ email });
        if (!validUser) {
            return res.status(404).json({ message: 'User Not found' });
        }

        const isMatch = await bcrypt.compare(password, validUser.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const payload = { userId: validUser._id, email: validUser.email, role: validUser.role };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        return res
            .status(200)
            .json({ token });
    } catch (error) {
        res.status(500).json({message:"something went wrong"})
    }
};

// Logout user
// const logoutUser = async (req, res, next) => {
//     try {
//         res.clearCookie("access_token");
//         res.status(200).json({ message: "User has been logged out!" });
//     } catch (error) {
//         console.error(error);  // Log error for debugging
//         next(error);  // Call the error handler
//     }
// };

module.exports = { registerUser, loginUser };
