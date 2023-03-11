import React from "react";
import { Navigate } from "react-router-dom";

const admins = [{ login: "admin", password: "admin" }];

const permission = false;

const AdminPage = () => {
  return permission ? (
    <h3>Panel admina - dzień dobry</h3>
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

export default AdminPage;
