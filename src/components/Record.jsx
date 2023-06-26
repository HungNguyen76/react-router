import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRecord } from "./redux/record/action";

export default function Record() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const { records } = useSelector(state => state.recordReducer)
  console.log("🚀 ~ file: Record.jsx:9 ~ Record ~ listRecord:", records)

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { title, content };
    dispatch(addRecord(newRecord))
    setTitle("")
    setContent("")
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Content:
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button type="submit">Add Record</button>
        </label>
      </form>
      <ul type='circle'>
        <h3>List Record saved</h3>
        {records.map((record, index) => 
            <li key={index}>
                {record.title} - {record.content}
            </li>
        )}
      </ul>
    </div>
  );
}
