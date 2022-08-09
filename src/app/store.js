import { configureStore } from "@reduxjs/toolkit";
import { fantasyApi } from "../fpl_api/DataSlice";
import { managerSlice } from "../fpl_api/ManagerSlice";

export const store = configureStore({
  reducer: {
    [fantasyApi.reducerPath]: fantasyApi.reducer,
    managerID: managerSlice.reducer,
  },
});
