export const addUser = (formData: any) => {
  return {
    type: "addNewUser",
    payload: formData,
  };
};

export const updateUser = (rowData: any) => {
  return {
    type: "updateExistingUser",
    payload: rowData,
  };
};

export const deleteUser = (rowData: any) => {
  return {
    type: "deleteUser",
    payload: rowData,
  };
};
