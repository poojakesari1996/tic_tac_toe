// Square.js
import React from "react";

const Square = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        border: "2px solid #4CAF50",
        height: "100px",
        width: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px",
        color: "#333",
        cursor: "pointer",
        backgroundColor: "#f9f9f9",
        transition: "background-color 0.3s",
      }}
      className="square"
    >
      {props.value}
    </div>
  );
};

export default Square;
