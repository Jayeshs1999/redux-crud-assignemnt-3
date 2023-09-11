import { Box, Typography, useTheme } from "@mui/material";

const Navbar = () => {
  const theme = useTheme();
  return (
    <Box sx={{ background: theme.palette.primary.main, padding: "10px" }}>
      <Typography variant="h4" style={{ fontWeight: "600", color: "black" }}>
        User Management System
      </Typography>
    </Box>
  );
};

export default Navbar;
