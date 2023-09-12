import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import StudentProvider from "../../context/StudentProvider";

const StudentAdd = () => {
  return (
    <>
      <StudentProvider>
        <section className="my-12">
          <StudentForm />
        </section>
        <hr />
        <section className="my-12">
          <StudentList />
        </section>
      </StudentProvider>
    </>
  );
};

export default StudentAdd;
