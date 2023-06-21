import React from 'react'
import { useParams } from 'react-router-dom';

export default function CourseDetail() {
    const params = useParams()
    console.log("🚀 ~ file: CourseDetail.jsx:6 ~ CourseDetail ~ params:", params)
  return (
    <div>
        <h2>Chi tiết khoá học</h2>
        <p>Mã khoá học: {params.courseId}</p>
    </div>
  )
}
