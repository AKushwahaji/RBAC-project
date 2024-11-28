

# RBAC Project

## Description
This project implements Role-Based Access Control (RBAC), where users have different roles (Admin, Moderator, and User) and each role has specific access to certain routes within the application. It includes user authentication via login and registration, as well as role-specific routes for Admin, Moderator, and User.

### ** Swagger Api documentation**
`http://localhost:5000/api-docs`

## Routes
### **Authentication Routes**
  `POST /api/auth/login`  

  `POST /api/auth/register`  

### **Admin Routes**
  `GET /api/admin/manage_users`  

  `GET /api/admin/configure_system`  

  `GET /api/admin/access_data`  

  `GET /api/admin/generate_reports`  

  `GET /api/admin/handle_critical_alerts`  

  `GET /api/admin/assign_roles`  

### **Moderator Routes**
  `GET /api/moderator/monitor_alerts`  

  `GET /api/moderator/incident_management`  

  `GET /api/moderator/generate_reports`  

  `GET /api/moderator/report_issues`  

### **User Routes**
  `GET /api/users/view_dashboard`  

  `GET /api/users/receive_alerts`  

  `POST /api/users/incident_reporting`  

