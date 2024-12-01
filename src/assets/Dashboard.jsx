import React, { useEffect, useState } from "react"; 
import {
  Box,
  Typography,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  useTheme,
  useMediaQuery,
  Checkbox,
} from "@mui/material";

export default function Dashboard() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); 
  const [registrations, setRegistrations] = useState([]); 
  const [markedRows, setMarkedRows] = useState({}); 

  // Fetch marked rows from localStorage when the component mounts
  useEffect(() => {
    const savedMarkedRows = localStorage.getItem("markedRows");
    if (savedMarkedRows) {
      setMarkedRows(JSON.parse(savedMarkedRows));
    }
  }, []);

  // Fetch registration data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://cryptowallet-2.onrender.com/api/dashboard"); 
        const data = await response.json();
        setRegistrations(data); 
      } catch (error) {
        console.error("Error fetching registration data:", error);
      }
    };

    fetchData();
  }, []); 

  // Handle checkbox change to mark rows with color change
  const handleCheckboxChange = (id) => {
    setMarkedRows((prev) => {
      const updatedMarkedRows = { ...prev, [id]: !prev[id] };
      
      // Save updated markedRows to localStorage
      localStorage.setItem("markedRows", JSON.stringify(updatedMarkedRows));
      
      return updatedMarkedRows;
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "#0a111a",
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          py: 2,
          px: 4,
        }}
      >
        <Typography variant="h6" sx={{ color: "#ffffff" }}></Typography>
        <div style={{ width: "100%" }}>
          <h3 style={{ textAlign: "center", fontSize: "20px" }}>
            Customer Details
          </h3>
        </div>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          padding: 4,
        }}
      >
        <TableContainer
          component={Paper}
          sx={{
            maxWidth: "100%",
            overflowX: "auto",
            color: "#ffffff",
            backgroundColor: "#171f2b",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ color: "#2a86f3" }}>Name</TableCell>
                <TableCell style={{ color: "#2a86f3" }}>Phone</TableCell>
                {!isSmallScreen && (
                  <TableCell style={{ color: "#2a86f3" }}>Email</TableCell>
                )}
                {!isSmallScreen && (
                  <TableCell style={{ color: "#2a86f3" }}>
                    Address
                  </TableCell>
                )}
                <TableCell style={{ color: "#2a86f3" }}>Referral ID</TableCell>
                <TableCell style={{ color: "#2a86f3" }}>Type</TableCell>
                <TableCell style={{ color: "#2a86f3" }}>
                  Transferred
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {registrations.map((registration) => (
                <TableRow key={registration.id} style={{ color: "white" }}>
                  <TableCell style={{ color: "#ffffff" }}>
                    {registration.name}
                  </TableCell>
                  <TableCell style={{ color: "#ffffff" }}>
                    {registration.mobileNumber}
                  </TableCell>
                  {!isSmallScreen && (
                    <TableCell style={{ color: "#ffffff" }}>
                      {registration.email}
                    </TableCell>
                  )}
                  {!isSmallScreen && (
                    <TableCell style={{ color: "#ffffff" }}>
                      {registration.address}
                    </TableCell>
                  )}
                  <TableCell style={{ color: "#ffffff" }}>
                    {registration.randomId}
                  </TableCell>
                  <TableCell style={{ color: "#ffffff" }}>
                    {registration.paymentMethod}
                  </TableCell>
                  <TableCell style={{ color: "#ffffff" }}>
                    {registration.TokenTxn && (
                      <Checkbox
                        checked={markedRows[registration.randomId] || false}
                        onChange={() => handleCheckboxChange(registration.randomId)} // Toggle checkbox
                        style={{
                          color: markedRows[registration.randomId] ? "green" : "white", // Change to green if checked
                        }}
                      />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
