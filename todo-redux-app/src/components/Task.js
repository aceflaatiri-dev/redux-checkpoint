import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, editTask } from "../redux/actions";

function Task({ task }) {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [newDesc, setNewDesc] = useState(task.description);

  const handleToggle = () => dispatch(toggleTask(task.id));

  const handleEdit = () => {
    if (newDesc.trim() === "") return;
    dispatch(editTask(task.id, newDesc));
    setEditMode(false);
  };

  return (
    <div>
      <input type="checkbox" checked={task.isDone} onChange={handleToggle} />
      {editMode ? (
        <>
          <input
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: task.isDone ? "line-through" : "none" }}>
            {task.description}
          </span>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </>
      )}
    </div>
  );
}

export default Task;