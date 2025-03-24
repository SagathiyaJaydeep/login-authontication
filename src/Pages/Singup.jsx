import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Input from "../Components/Input";
import { Link } from "react-router";

function Singup() {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#7a1679",
        }}
      >
        <Box
          sx={{
            width: "30%",
            padding: "20px",
            backgroundColor: "#73e8f5",
            borderRadius: "10px",
          }}
        >
          <Typography
            variant="h5"
            component={"h1"}
            sx={{
              textAlign: "center",
              marginBottom: "10px",
              fontWeight: "500",
            }}
          >
            Welcome to SignUp Page !!
          </Typography>

          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Button
            variant="contained"
            sx={{
              width: "100%",
              backgroundColor: "#7a1679",
              margin: "10px 0",
            }}
          >
            SignUp
          </Button>

          <Typography variant="h6" sx={{ fontSize:"16px", textAlign: "center " }}>
            You Already Have an Acoount ? Click on{" "}
            <Link to={"/admin/login"} style={{ textDecoration: "none" }}>
              Login
            </Link>{" "}
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Singup;
