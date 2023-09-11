import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addUser, updateUser } from "../actions/index";

interface FilterProps {
  data: any;
  handleFilterClose: () => void;
  type: string;
}

const Filter = (props: FilterProps) => {
  const myState = useSelector((state: any) => state.tableCrudOperation);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    userName: "",
    profession: "",
    id: `${uuidv4()}`,
  });
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    if (props.type === "update") {
      setFormData({
        userName: props.data.userName,
        profession: props.data.profession,
        id: props.data.id,
      });
    }
  }, []);

  const handleClose = () => {
    props.handleFilterClose();
  };

  useEffect(() => {
    setIsSubmitDisabled(!Object.values(formData).every((value) => value != ""));
  }, [formData]);

  const handleTexfieldsChanges = (event: any, name: any) => {
    const { value } = event.target;
    setFormData((previousData) => ({ ...previousData, [name]: value }));
  };

  const handleCreateClick = (e: any) => {
    e.preventDefault();
    props.handleFilterClose();
    setFormData({
      userName: "",
      profession: "",
      id: `${uuidv4()}`,
    });
  };

  return (
    <Dialog open={true} onClose={handleClose}>
      <DialogTitle>Add User</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Enter UserName"
          type="text"
          fullWidth
          variant="outlined"
          required
          value={formData.userName}
          onChange={(event) => handleTexfieldsChanges(event, "userName")}
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Profession"
          type="text"
          fullWidth
          variant="outlined"
          required
          value={formData.profession}
          onChange={(event) => handleTexfieldsChanges(event, "profession")}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
        {props.type === "update" ? (
          <Button
            variant="contained"
            disabled={isSubmitDisabled}
            color="success"
            onClick={(event: any) => {
              dispatch(updateUser(formData));
              handleCreateClick(event);
            }}
          >
            Update
          </Button>
        ) : (
          <Button
            variant="contained"
            disabled={isSubmitDisabled}
            color="success"
            onClick={(event: any) => {
              dispatch(addUser(formData));
              handleCreateClick(event);
            }}
          >
            Create
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default Filter;
