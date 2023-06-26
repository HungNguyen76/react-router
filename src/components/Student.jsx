import React from "react";
import { useSelector } from "react-redux";

export default function Student() {
    const listStudent = useSelector(state => state.studentReducer)
    console.log("🚀 ~ file: Student.jsx:5 ~ Student ~ listStudent:", listStudent)
  return (
    <div>
      <h2 className="text-center mt-5">List Student</h2>
      <table className="table">
        <thead>
          <tr>
            <td>STT</td>
            <td>Full Name</td>
            <td>Age</td>
            <td>Sex</td>
            <td>Class</td>
          </tr>
        </thead>
        <tbody>
            {listStudent.map((student, index) => (
                <tr key={student.id}>
                    <td>{index+1}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.sex ? "Male" : "Female"}</td>
                    <td>{student.class}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
