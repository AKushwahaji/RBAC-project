const roles = require("../config/roles.json");

// const authorizeRoles = (role)=>{
//    return (req,res,next) =>{
//     const userRole = req.user.role;
//     console.log(userRole);
//     console.log(role);
//     if(userRole!==role)
//         return res.status(403).json({message:"Access denied"})
//     next();
//    }
// }

const authorizePermissions = (permission) => {
    return (req, res, next) => {
        const userRole = req.user.role; // Role assigned during authentication
        
        if (!roles[userRole] || !roles[userRole].includes(permission)) {
            return res.status(403).json({ message: "Access denied. Permission not granted." });
        }
        next();
    };
};

// module.exports = { authorizeRoles, authorizePermissions };


module.exports = authorizePermissions;