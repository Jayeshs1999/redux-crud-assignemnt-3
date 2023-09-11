let initialState: any[] = [];
const tableCrudOperation = (state = initialState, action: any) => {
  switch (action.type) {
    case "addNewUser":
      return [...state, action.payload];
    case "updateExistingUser":
      const updateUser = action.payload;
      return state.map((user) =>
        user.id === updateUser.id ? updateUser : user
      );
    case "deleteUser":
      const idToDelete = action.payload.id;
      return state.filter((user) => user.id !== idToDelete);
    default:
      return state;
  }
};

export default tableCrudOperation;
