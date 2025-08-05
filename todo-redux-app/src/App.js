import React from "react";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import { useDispatch } from "react-redux";
import { setFilter } from "./redux/actions";

function App() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>My Redux ToDo App</h1>
      <AddTask />
      <div>
        <button onClick={() => dispatch(setFilter("ALL"))}>All</button>
        <button onClick={() => dispatch(setFilter("DONE"))}>Done</button>
        <button onClick={() => dispatch(setFilter("NOT_DONE"))}>Not Done</button>
      </div>
      <ListTask />
    </div>
  );
}

export default App;