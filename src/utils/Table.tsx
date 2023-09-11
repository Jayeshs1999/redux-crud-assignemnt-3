import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import noUserAdded from "../assets/noUserAdded.png";
import { deleteUser } from "../actions";
import Filter from "./Filter";

function createData(
  id: number,
  userName: string,
  profession: string,
  update: string,
  deleted: string
) {
  return { id, userName, profession, update, deleted };
}

export default function UserManagementTable() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const initialRows: any[] | (() => any[]) = [];

  const myState = useSelector((state: any) => state.tableCrudOperation);

  const [rows, setRows] = React.useState(initialRows);
  const [openFilter, setFilterOpen] = React.useState(false);
  const [updateData, setUpdatedData] = React.useState(null);

  const tableHeaderStyle = {
    fontWeight: "bold",
  };

  React.useEffect(() => {
    console.log("ms :", myState);
    if (myState.length > 0) {
        const newRows = myState.map((data: any) =>
          createData(
            data.id,
            data.userName,
            data.profession,
            "update",
            "delete"
          )
        );
        setRows(newRows);
      console.log("row:", rows);
    } else {
      setRows([]);
    }
  }, [myState]);

  const updateUserData = (rowData: any, type: string) => {
    setUpdatedData(rowData);
    setFilterOpen(true);
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={tableHeaderStyle}>Id</TableCell>
              <TableCell style={tableHeaderStyle} align="center">
                User Name
              </TableCell>
              <TableCell style={tableHeaderStyle} align="center">
                Profession
              </TableCell>
              <TableCell style={tableHeaderStyle} align="center">
                Update
              </TableCell>
              <TableCell style={tableHeaderStyle} align="center">
                Delete
              </TableCell>
            </TableRow>
          </TableHead>
          {rows.length > 0 ? (
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="center">{row.userName}</TableCell>
                  <TableCell align="center">{row.profession}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      style={{
                        background: theme.palette.info.main,
                        color: "white",
                      }}
                      onClick={() => {
                        updateUserData(row, "update");
                      }}
                    >
                      Update
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      style={{
                        background: theme.palette.error.main,
                        color: "white",
                      }}
                      onClick={() => {
                        dispatch(deleteUser(row));
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <TableRow>
              <TableCell colSpan={5} align="center">
                {/* Render the "no data" placeholder component */}
                <img src={noUserAdded} />
              </TableCell>
            </TableRow>
          )}
        </Table>
      </TableContainer>
      {openFilter && (
        <Filter
          data={updateData}
          type="update"
          handleFilterClose={() => setFilterOpen(false)}
        />
      )}
    </>
  );
}
