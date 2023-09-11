import { Box, Typography, useTheme } from "@mui/material";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import UserManagementTable from "./utils/Table";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import Filter from "./utils/Filter";
import { useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const theme = useTheme();
  const myState = useSelector((state: any) => state.tableCrudOperation);
  console.log("myState", myState);
  const [openFilter, setFilterOpen] = useState(false);
  const handleCreate = () => {
    setFilterOpen(true);
  };

  const handleCreatedUserData = () => {
    setFilterOpen(false);
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          background: theme.palette.primary.main,
          gap: "20px",
        }}
      >
        <Typography variant="h6">Add New User</Typography>
        <AddBoxRoundedIcon
          style={{
            cursor: "pointer",
            color: theme.palette.info.main,
            fontSize: "40px",
          }}
          onClick={handleCreate}
        />
      </Box>
      <UserManagementTable />
      {openFilter && (
        <Filter
          data={""}
          handleFilterClose={() => {
            handleCreatedUserData();
          }}
          type=""
        />
      )}
    </>
  );
}

export default App;
