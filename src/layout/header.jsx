import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import Sorch from "../assets/icons/sorch"
import logo from "../assets/logo.svg";
import React from "react";

export default function Header() {
  return (
    <>
      <Stack
        sx={{
          height: "60px",
          background: "#0D0C22",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Typography fontSize={"13px"} variant="p" color="white">
          📚 LAST CHANCE TO REGISTER FOR THE JOB GUARANTEED 8-WEEK Product
          Design Career Preparation course!{" "}
          <i style={{ color: "#EA4C89" }}>Sign up now!</i>
        </Typography>
      </Stack>

      <Container maxWidth="xl">
        <Stack
          direction="row"
          sx={{
            height: "80px",
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Stack
            direction="row"
            sx={{ alignItems: "center", display: "flex", gap: "20px" }}
          >
            <img style={{ width: "100px" }} src={logo} alt="" />
            <Stack direction="row" gap={5}>
              <Typography variant="p">Inspiration</Typography>
              <Typography variant="p">Find Work</Typography>
              <Typography variant="p">Learn Design</Typography>
              <Typography variant="p">Go Pro</Typography>
              <Typography variant="p">Hire Designers </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" gap={5} sx={{ alignItems: "center", display: "flex" }}>
            <Stack direction="row" gap={2}>
       <Sorch/>
            <input type="text" placeholder="Sign in "style={{border: "none", fontSize:"18px", outline:"none", width:"70px"}} />
            </Stack>
            <Button variant="contained"  sx={{bgcolor:"#EA4C89", borderRadius:"16px", height:"50px"}}>
            Sign up
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
