import React from "react";
import { useUserContext } from "./../context/userContext";

export const DashboardUser = () => {
  const { user } = useUserContext();
  return (
    <div className="container">
      <div className="row dashboard-section">
        <div className="col-md-3">
          <h1>Mi cuenta</h1>
          <h3>
            {user.first_name} {user.last_name}
          </h3>
          <h4
            className={`${user.role === "ADMIN" ? "bg-dark text-light" : ""} `}
          >
            {user.role}
          </h4>
        </div>
        <div className="col-md-5">{JSON.stringify(user)}</div>
      </div>
    </div>
  );
};
