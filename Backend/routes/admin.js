const express = require("express");
const verifyToken = require("../middleware/authMiddleware");
const authorizePermissions = require("../middleware/roleMiddleware")


const router = express.Router();

router.get("/manage_users", verifyToken, authorizePermissions("manage_users"), (req, res) => {
    return res.json({ message: "Administrator" });
});
router.get("/configure_system", verifyToken, authorizePermissions("configure_system"), (req, res) => {
    return res.json({ message: "Administrator" });
});
router.get("/access_data", verifyToken, authorizePermissions("access_data"), (req, res) => {
    return res.json({ message: "Administrator" });
});
router.get("/generate_reports", verifyToken, authorizePermissions("generate_reports"), (req, res) => {
    return res.json({ message: "Administrator" });
});
router.get("/handle_critical_alerts", verifyToken, authorizePermissions("handle_critical_alerts"), (req, res) => {
    return res.json({ message: "Administrator" });
});
router.get("/assign_roles", verifyToken, authorizePermissions("assign_roles"), (req, res) => {
    return res.json({ message: "Administrator" });
});

module.exports = router;