import { useParams, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMemo } from "react";
export const useStudents = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();

  const students = useSelector((state) => state.studentD.students);

  const studentIndex = useMemo(
    () => students.findIndex((item) => item.id == id),
    [students]
  );

  const student = useMemo(
    () => (studentIndex > -1 ? students[studentIndex] : {}),
    [studentIndex, searchParams.get("edit")]
  );

  return { student, studentIndex };
};
