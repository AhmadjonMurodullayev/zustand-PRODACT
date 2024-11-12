import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function Product({ img, logo, name }) {
  return (
    <Box
      sx={{
        width: 250,
        padding: 2,
        backgroundColor: "#fff",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: "12px",
        textAlign: "center",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <Box
        component="img"
        src={img}
        alt={name}
        sx={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "8px",
          transition: "opacity 0.3s ease",
          "&:hover": {
            opacity: 0.9,
          },
        }}
      />
      <Typography variant="h6" mt={2} sx={{ fontWeight: 600, color: "#333" }}>
        {name}
      </Typography>
      {logo && (
        <Box
          component="img"
          src={logo}
          alt={`${name} logo`}
          sx={{
            width: "50px",
            height: "50px",
            marginTop: "10px",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
      )}
      <Button
        variant="contained"
        sx={{
          marginTop: 2,
          backgroundColor: "#1976d2",
          color: "#fff",
          fontWeight: "bold",
          paddingX: 2,
          transition: "background-color 0.3s ease",
          "&:hover": {
            backgroundColor: "#1565c0",
          },
        }}
      >
        Add to Cart
      </Button>
    </Box>
  );
}
