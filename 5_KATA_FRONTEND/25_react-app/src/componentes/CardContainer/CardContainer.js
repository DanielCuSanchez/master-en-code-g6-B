import React from "react";
import { Card } from "../Card/Card";

export const CardContainer = ({children}) => {
  return (
    <div className="card" style={{
      minHeight: 'auto', 
      backgroundColor: '#4f4f6e',
      marginBottom: '16px'
      }}>
      <div style={{color: 'black'}} className="card-body">
        {children}
      </div>
    </div>
  );
};
