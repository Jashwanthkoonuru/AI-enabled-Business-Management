// Mytasks.jsx
import React, { useState, useEffect } from "react";

const dummyTasks = [
  {
    id: 1,
    title: "Finish React project",
    description: "Complete the MyPerformance dashboard with charts",
    status: "pending",
    priority: "High",
  },
  {
    id: 2,
    title: "Read JavaScript book",
    description: "Read chapters 5-8",
    status: "completed",
    priority: "Medium",
  },
  {
    id: 3,
    title: "Update Resume",
    description: "Add new React skills and projects",
    status: "pending",
    priority: "Low",
  },
  {
    id: 4,
    title: "Clean Workspace",
    description: "Organize desk and files",
    status: "completed",
    priority: "Low",
  },
];

const Mytasks = () => {
  const [tasks, setTasks] = useState(dummyTasks);
  const [filter, setFilter] = useState("all"); // all, pending, completed
  const [selectedTask, setSelectedTask] = useState(null);

  // Filter tasks when filter changes
  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    return task.status === filter;
  });

  return (
    <div className="p-6 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">My Tasks</h2>

      {/* Filter */}
      <div className="mb-4">
        <label className="mr-2 dark:text-black">Filter: </label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-3 py-1 rounded border border-gray-300 dark:border-gray-700 bg-white  dark:text-white"
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {/* Task List */}
      <ul className="space-y-2">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            onClick={() => setSelectedTask(task)}
            className={`cursor-pointer text-black p-3 rounded shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 ${
              task.status === "completed" ? "bg-green-100 dark:bg-green-800" : "bg-yellow-100 dark:bg-yellow-800"
            }`}
          >
            {task.title} - <strong>{task.status}</strong>
          </li>
        ))}
      </ul>

      {/* Task Details */}
      {selectedTask && (
        <div className="mt-6 p-4 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 shadow-md">
          <h3 className="text-xl font-semibold mb-2 dark:text-white">Task Details</h3>
          <p><strong>Title:</strong> {selectedTask.title}</p>
          <p><strong>Description:</strong> {selectedTask.description}</p>
          <p><strong>Status:</strong> {selectedTask.status}</p>
          <p><strong>Priority:</strong> {selectedTask.priority}</p>
          <button
            onClick={() => setSelectedTask(null)}
            className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Mytasks;
