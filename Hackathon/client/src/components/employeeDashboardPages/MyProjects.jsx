
import React, { useState } from "react";

const dummyProjects = [
  {
    id: 1,
    name: "Website Redesign",
    description: "Revamp the company website with new UI/UX",
    tasks: [
      { id: 1, title: "Design Landing Page", status: "pending", priority: "High" },
      { id: 2, title: "Implement Responsive Layout", status: "completed", priority: "Medium" },
      { id: 3, title: "Test Cross-Browser", status: "pending", priority: "Low" },
    ],
  },
  {
    id: 2,
    name: "Mobile App",
    description: "Develop the employee mobile app",
    tasks: [
      { id: 4, title: "Set up React Native", status: "completed", priority: "High" },
      { id: 5, title: "Login & Authentication", status: "pending", priority: "High" },
      { id: 6, title: "Push Notifications", status: "pending", priority: "Medium" },
    ],
  },
];

const MyProjects = () => {
  const [filter, setFilter] = useState("all");
  const [selectedTask, setSelectedTask] = useState(null);

  return (
    <div className="p-6  dark:bg-gray-900 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 dark:text-white">My Projects</h2>
      <p className="mb-4 text-blackdark:text-gray-300">
        View and manage your projects and tasks.
      </p>
      <div className="mb-4">
        <label className="mr-2 dark:text-gray-200">Filter Tasks: </label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-3 py-1 text-black rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white"
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      {dummyProjects.map((project) => (
        <div
          key={project.id}
          className="mb-6 p-4 text-black rounded-lg bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl text-black font-semibold mb-2 dark:text-white">{project.name}</h3>
          <p className="mb-3 text-black dark:text-gray-300">{project.description}</p>
          <ul className="space-y-2">
            {project.tasks
              .filter((task) => filter === "all" || task.status === filter)
              .map((task) => (
                <li
                  key={task.id}
                  onClick={() => setSelectedTask(task)}
                  className={`cursor-pointer p-3 rounded shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 ${
                    task.status === "completed"
                      ? "bg-green-100 dark:bg-green-800"
                      : "bg-yellow-100 dark:bg-yellow-800"
                  }`}
                >
                  {task.title} - <strong>{task.status}</strong>
                </li>
              ))}
          </ul>
        </div>
      ))}

      {/* Task Details Modal */}
      {selectedTask && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">Task Details</h3>
            <p><strong>Title:</strong> {selectedTask.title}</p>
            <p><strong>Status:</strong> {selectedTask.status}</p>
            <p><strong>Priority:</strong> {selectedTask.priority}</p>
            <button
              onClick={() => setSelectedTask(null)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProjects;
