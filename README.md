# Redux Checkpoint - ToDo App 📝

This is a simple ToDo list application built with **React** and **Redux** for state management. It's a beginner-friendly project created as part of the Redux Checkpoint at GoMyCode.

## 📦 Features

- ✅ Add a new task
- ✏️ Edit a task
- 🟢 Mark task as done / not done
- 🔍 Filter tasks: All | Done | Not Done
- 🧠 Each task has:
  - `id`
  - `description`
  - `isDone` status

## 🧱 Components

- `AddTask`: Input field and button to add new tasks
- `Task`: Represents a single task with edit and toggle functionality
- `ListTask`: Displays a list of tasks based on current filter

## 🗃 Redux State

The global state contains:
```js
{
  tasks: [ { id, description, isDone } ],
  filter: "ALL" | "DONE" | "NOT_DONE"
}
📁 Project Structure
pgsql
Copy
Edit
src/
├── components/
│   ├── AddTask.js
│   ├── ListTask.js
│   └── Task.js
├── redux/
│   ├── actions.js
│   ├── reducer.js
│   └── store.js
├── App.js
├── index.js
└── index.css
🚀 Getting Started
Clone this repo:

bash
Copy
Edit
git clone https://github.com/yourusername/redux-checkpoint.git
cd redux-checkpoint
Install dependencies:

bash
Copy
Edit
npm install
Run the app:

bash
Copy
Edit
npm start
🛠 Tech Stack
React

Redux

UUID (for generating unique task IDs)
