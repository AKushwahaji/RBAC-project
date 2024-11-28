const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ["admin","moderator" ,"user"], // Define acceptable roles
            required: true,
        },
        
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
