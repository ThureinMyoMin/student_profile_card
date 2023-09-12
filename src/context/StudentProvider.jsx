/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const StudentContext = createContext();

const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState({});
  useEffect(() => {
    console.log("redender again");
    if (students.length == 0) {
      const data = JSON.parse(localStorage.getItem("st_d"));
      data && setStudents(data);
    }
  }, []);

  const DeleteHandler = (id) => {
    console.log(id);
    const filterData = students.filter((s) => s.id != id);
    //** change localstorage */
    localStorage.setItem("st_d", JSON.stringify([...filterData]));
    setStudents([...filterData]);
  };

  const editStudentModal = (id) => {
    const student = students.find((st) => st.id == id);
    setEditStudent(student);
  };

  const UpdateStudent = (student) => {
    const changeData = students.map((st) => {
      if (st.id == student.id) {
        return student;
      }
      return st;
    });
    localStorage.setItem("st_d", JSON.stringify([...changeData]));
    setStudents([...changeData]);
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        setStudents,
        DeleteHandler,
        editStudentModal,
        editStudent,
        UpdateStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
