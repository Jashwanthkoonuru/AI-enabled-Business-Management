import React, { useState, useEffect } from 'react';
import { FaTasks, FaUserPlus } from 'react-icons/fa';

const TeamTask = () => {
  const [tasks, setTasks] = useState([
    { id: 201, name: 'Design Homepage', assignedTo: 'Bob Jones', project: 'Website Redesign', priority: 'High', status: 'In Progress', progress: 40 },
    { id: 202, name: 'API Integration', assignedTo: 'Alice Smith', project: 'Mobile App', priority: 'Medium', status: 'Pending', progress: 0 },
    { id: 203, name: 'QA Testing', assignedTo: 'Carol Lee', project: 'Website Redesign', priority: 'High', status: 'In Progress', progress: 60 },
    { id: 204, name: 'UI Review', assignedTo: 'David Kim', project: 'Mobile App', priority: 'Low', status: 'Completed', progress: 100 },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({ name: '', assignedTo: '', project: '', priority: 'Medium', file: null });

  // Real-time task updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTasks(prev =>
        prev.map(task => {
          if (task.status === 'In Progress' && task.progress < 100) {
            const updatedProgress = Math.min(task.progress + Math.floor(Math.random() * 15), 100);
            return { ...task, progress: updatedProgress, status: updatedProgress >= 100 ? 'Completed' : 'In Progress' };
          }
          return task;
        })
      );
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const filteredTasks = tasks.filter(
    task =>
      task.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.assignedTo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.project.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = status => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-700';
      case 'In Progress': return 'bg-blue-100 text-blue-700';
      case 'Pending': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getPriorityColor = priority => {
    switch (priority) {
      case 'High': return 'text-red-600 font-bold';
      case 'Medium': return 'text-yellow-600 font-semibold';
      case 'Low': return 'text-green-600';
      default: return '';
    }
  };

  // Handle Modal Form
  const handleAssignTask = e => {
    e.preventDefault();
    const taskId = Math.floor(Math.random() * 1000) + 300;
    setTasks(prev => [
      ...prev,
      { ...newTask, id: taskId, status: 'Pending', progress: 0 },
    ]);
    setNewTask({ name: '', assignedTo: '', project: '', priority: 'Medium', file: null });
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 font-sans">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold ">Team Tasks</h2>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition"
          onClick={() => setIsModalOpen(true)}
        >
          <FaUserPlus /> Assign Task
        </button>
      </div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by task, assignee, project..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTasks.map(task => (
          <div key={task.id} className="bg-white text-black shadow rounded-lg p-5 flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-800">{task.name}</h3>
              <FaTasks className="text-gray-400" />
            </div>
            <p className="text-gray-600 mb-1"><span className="font-semibold">Assigned To:</span> {task.assignedTo}</p>
            <p className="text-gray-600 mb-1"><span className="font-semibold">Project:</span> {task.project}</p>
            <p className={`mb-2 ${getPriorityColor(task.priority)}`}>Priority: {task.priority}</p>
            <span className={`inline-block px-3 py-1 text-sm rounded-full ${getStatusColor(task.status)} mb-2`}>{task.status}</span>
            <div className="w-full bg-gray-200 h-2 rounded mt-2">
              <div className="h-2 rounded bg-blue-500 transition-all duration-500" style={{ width: `${task.progress}%` }}></div>
            </div>
            <p className="text-right text-gray-500 text-sm mt-1">{task.progress}%</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-lg w-11/12 md:w-1/2 p-6 relative">
            <h3 className="text-xl font-bold mb-4">Assign New Task</h3>
            <form onSubmit={handleAssignTask} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Task Name"
                value={newTask.name}
                onChange={e => setNewTask({ ...newTask, name: e.target.value })}
                required
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Assign To"
                value={newTask.assignedTo}
                onChange={e => setNewTask({ ...newTask, assignedTo: e.target.value })}
                required
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Project"
                value={newTask.project}
                onChange={e => setNewTask({ ...newTask, project: e.target.value })}
                required
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <select
                value={newTask.priority}
                onChange={e => setNewTask({ ...newTask, priority: e.target.value })}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              <input
                type="file"
                onChange={e => setNewTask({ ...newTask, file: e.target.files[0] })}
                className="p-2"
              />
              <div className="flex justify-end gap-4 mt-4">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100">Cancel</button>
                <button type="submit" className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">Assign</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamTask;
