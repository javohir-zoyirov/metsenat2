import { createSlice } from "@reduxjs/toolkit";
import { StudentData } from "../../data/studentData";

const students = createSlice({
  name: "studentsD",
  initialState: {
    students: StudentData,
  },
  reducers: {
    editStudent: (state, action) => {
      console.log(action.payload);
      state.students[action.payload.index] = action.payload.data;
    },

    addNewStudent: (state, action) => {
      console.log(action.payload, "payoat");

      let maxId = state.students.length;

      let item = {
        id: maxId + 1,
        ...action.payload.values,
      };

      state.students = [item, ...state.students];
    },
  },
});

export const { editStudent, addNewStudent } = students.actions;
export default students.reducer;
