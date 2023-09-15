import { configureStore } from "@reduxjs/toolkit";
import sponsors from "./slice/sponsors";
import studentData from "./slice/student";

export default configureStore({
  reducer: {
    sponsors: sponsors,
    studentD: studentData,
  },
});
