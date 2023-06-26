import React from "react";
import { useParams } from "react-router-dom";

export default function CourseDetailByType() {
  const params = useParams()
  return (
    <div>
      <h3>This is Course Detail By Type</h3>
      <p>
        Loại khoá học: {params.courseType} - Mã khoá học: {params.courseId}
      </p>
    </div>
  );
}
