import React from "react";
import { useParams } from "react-router-dom";

export default function CourseDetailByType() {
  const params = useParams();

  return (
    <div>
      <h3>Chi tiết khoá học theo loại khoá học</h3>
      <p>
        Loại khoá học: {params.courseType} - Mã khoá học: {params.courseId}
      </p>
    </div>
  );
}
