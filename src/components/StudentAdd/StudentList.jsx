/* eslint-disable react/prop-types */
import { useContext } from "react";
import StudentCard from "./StudentCard";
import { StudentContext } from "../../context/StudentProvider";

const StudentList = () => {
  const { setStudents, students } = useContext(StudentContext);
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap gap-x-[2%] gap-y-6">
        {students.map((data) => {
          return (
            <StudentCard
              key={data.id}
              img_url={data.img_url}
              student_data={data.student_data}
              id={data.id}
              setStudents={setStudents}
              students={students}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StudentList;
