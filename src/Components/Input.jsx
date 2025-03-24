import React from "react";
import { TextField } from "@mui/material";

export default function Input() {
  return (
    <>
      <TextField
        variant="outlined"
        label="FirstName"
        name="firstName"
        sx={{ width: "100%", margin: "10px 0" }}
      />
    </>
  );
}
