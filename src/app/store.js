import { configureStore } from "@reduxjs/toolkit";
import { fantasyApi } from "../fpl_api/DataSlice";
import { managerSlice } from "../fpl_api/ManagerSlice";
import { statsApi } from "../fpl_api/StatsSlice";

export const store = configureStore({
  reducer: {
    [fantasyApi.reducerPath]: fantasyApi.reducer,
    managerID: managerSlice.reducer,
    [statsApi.reducerPath]: statsApi.reducer,
  },
});
