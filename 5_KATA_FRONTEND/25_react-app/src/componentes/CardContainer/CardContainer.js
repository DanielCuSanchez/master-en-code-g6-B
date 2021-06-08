import React from "react";

export const CardContainer = (props) => {
  const { children } = props;
  console.log(children);
  return (
    <div
      className="card"
      style={{
        minHeight: "auto",
        backgroundColor: "#4f4f6e",
        marginBottom: "16px",
      }}
    >
      <div style={{ color: "black" }} className="card-body">
        {children}
      </div>
    </div>
  );
};
