import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

function ListTask() {
  const { tasks, filter } = useSelector((state) => state);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "ALL") return true;
    if (filter === "DONE") return task.isDone;
    if (filter === "NOT_DONE") return !task.isDone;
    return true;
  });

  return (
    <div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default ListTask;