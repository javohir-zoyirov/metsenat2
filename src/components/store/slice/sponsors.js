import { createSlice } from "@reduxjs/toolkit";
import { HomiylarData } from "../../data/index";

const sponsors = createSlice({
  name: "sponsors",
  initialState: {
    sponsors: HomiylarData,
  },
  reducers: {
    editSponsor: (state, action) => {
      state.sponsors[action.payload.index] = action.payload.data;
      console.log(state, "state");
    },

    searchSponsor: (state, action) => {},
  },
});

export const { editSponsor } = sponsors.actions;

export default sponsors.reducer;
