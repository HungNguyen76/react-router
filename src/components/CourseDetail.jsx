import React from 'react'
import { useParams } from 'react-router-dom'

export default function CourseDetail() {
  const params = useParams()
  console.log("🚀 ~ file: CourseDetail.jsx:6 ~ CourseDetail ~ params:", params)
  

  return (
    <div>
        <h3>This is Couse Detail</h3>
        <p>Mã khoá học: {params.courseId}</p>
    </div>
  )
}
