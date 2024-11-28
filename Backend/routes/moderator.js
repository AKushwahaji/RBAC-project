const express = require("express");
const verifyToken = require("../middleware/authMiddleware");
const authorizePermissions = require("../middleware/roleMiddleware")

const router = express.Router();



router.get("/monitor_alerts", verifyToken,authorizePermissions("monitor_alerts"), (req, res) => {
    res.json({ message: "moderator" });
});
router.get("/incident_management", verifyToken, authorizePermissions("incident_management"), (req, res) => {
    res.json({ message: "moderator" });
});
router.get("/generate_reports", verifyToken,authorizePermissions("generate_reports"), (req, res) => {
    res.json({ message: "moderator" });
});
router.get("/report_issues", verifyToken, authorizePermissions("report_issues"), (req, res) => {
    res.json({ message: "moderator" });
});

module.exports = router;