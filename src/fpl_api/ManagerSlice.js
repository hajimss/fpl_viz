import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
};

export const managerSlice = createSlice({
  name: "managerID",
  initialState,
  reducers: {
    inputID: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { inputID } = managerSlice.actions;
export default managerSlice.reducer;
