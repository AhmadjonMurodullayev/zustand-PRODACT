import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function Product({ img, logo, name }) {
  return (
    <Box
      sx={{
        width: 250,
        padding: 2,
        backgroundColor: "#fff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        textAlign: "center",
        "&:hover": {
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <img
        src={img}
        alt={name}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <Typography variant="h6" mt={2} sx={{ fontWeight: 600 }}>
        {name}
      </Typography>
      {logo && (
        <img
          src={logo}
          alt={`${name} logo`}
          style={{
            width: "50px",
            height: "50px",
            marginTop: "10px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      )}
      <Button variant="contained">
        add
      </Button>
    </Box>
  );
}
