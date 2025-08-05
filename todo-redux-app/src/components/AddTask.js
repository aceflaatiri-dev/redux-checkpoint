import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";
import { v4 as uuidv4 } from "uuid";

function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim() === "") return;
    const newTask = {
      id: uuidv4(),
      description: text,
      isDone: false,
    };
    dispatch(addTask(newTask));
    setText(""); // clear input
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddTask;