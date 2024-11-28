const express = require("express");
const verifyToken = require("../middleware/authMiddleware");
const authorizePermissions = require("../middleware/roleMiddleware")
const router = express.Router();

//only  user can excess this router
router.get("/view_dashboard", verifyToken, authorizePermissions("view_dashboard"), (req, res) => {
    res.json({ message: "Users(Gareeb log)" });
});
router.get("/receive_alerts", verifyToken, authorizePermissions("receive_alerts"), (req, res) => {
    res.json({ message: "Users(Gareeb log)" });
});
router.get("/incident_reporting", verifyToken, authorizePermissions("incident_reporting"), (req, res) => {
    res.json({ message: "Users(Gareeb log)" });
});
module.exports = router;
