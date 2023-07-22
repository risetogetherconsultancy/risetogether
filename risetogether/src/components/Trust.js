import React from "react";
import "../styles/Trust.css";
import { Button } from "@mui/material";

export default function Trust() {
  const trustFactos = [
    {
      key: "scholarship",
      label: "$50M",
      value: "In Scholarship",
    },
    {
      key: "success",
      label: "98%",
      value: "Success Rate",
    },
    {
      key: "admits",
      label: "500",
      value: "Admits",
    },
    {
      key: "experience",
      label: "15",
      value: "Yrs of experience",
    },
  ];
  return (
    <div className="trust-div">
      <div className="trust-header">Why Trust Me</div>
      <div className="trust-values">
        {trustFactos.map((item) => {
          return (
            <div className="trust-box" key={item.key}>
              <div className="bigval">{item.label}</div>
              <div className="smallval">{item.value}</div>
            </div>
          );
        })}
      </div>
      <Button
        className="pride-wall"
        sx={{
          color: "white",
          backgroundColor: "#5eaca1",
          "&:hover": {
            backgroundColor: "#5eaca1",
            color: "white",
          },
          fontSize: "18px",
        }}
        variant="filled"
      >
        My Pride Wall
      </Button>
    </div>
  );
}
