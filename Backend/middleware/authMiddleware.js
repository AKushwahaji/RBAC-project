const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).send("Access denied. No token provided.");
        }

        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;
        next();
    } catch (error) {
        console.error("Token verification failed:", error.message);
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

module.exports = verifyToken;