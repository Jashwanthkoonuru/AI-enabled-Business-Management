import React, { useState, useEffect } from 'react';
import { FaFolderOpen, FaUserPlus, FaFileAlt, FaTrash, FaEdit } from 'react-icons/fa';

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'Website Redesign',
      team: ['Alice Smith', 'Bob Jones'],
      priority: 'High',
      status: 'In Progress',
      progress: 60,
      docs: ['design-specs.pdf'],
    },
    {
      id: 2,
      name: 'Mobile App',
      team: ['David Kim', 'Carol Lee'],
      priority: 'Medium',
      status: 'Pending',
      progress: 0,
      docs: [],
    },
    {
      id: 3,
      name: 'Internal CRM',
      team: ['Alice Smith', 'David Kim'],
      priority: 'High',
      status: 'In Progress',
      progress: 45,
      docs: ['requirements.docx'],
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [newProject, setNewProject] = useState({
    name: '',
    team: [],
    priority: 'Medium',
    status: 'Pending',
    docs: [],
  });

  // Real-time progress simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setProjects(prev =>
        prev.map(p => {
          if (p.status === 'In Progress' && p.progress < 100) {
            const updatedProgress = Math.min(p.progress + Math.floor(Math.random() * 10 + 5), 100);
            return {
              ...p,
              progress: updatedProgress,
              status: updatedProgress >= 100 ? 'Completed' : 'In Progress',
            };
          }
          return p;
        })
      );
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // Add or Edit project
  const handleSaveProject = e => {
    e.preventDefault();
    const docsArray = newProject.docs.length > 0 ? [newProject.docs.name || newProject.docs] : [];

    if (editingProject) {
      // Edit existing project
      setProjects(prev =>
        prev.map(p =>
          p.id === editingProject.id
            ? { ...editingProject, ...newProject, team: newProject.team, docs: docsArray }
            : p
        )
      );
      setEditingProject(null);
    } else {
      // Add new project
      const projectId = Math.floor(Math.random() * 1000) + 100;
      setProjects(prev => [...prev, { ...newProject, id: projectId, docs: docsArray, progress: 0 }]);
    }

    setNewProject({ name: '', team: [], priority: 'Medium', status: 'Pending', docs: [] });
    setIsModalOpen(false);
  };

  // Delete project
  const handleDelete = id => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  // Edit project
  const handleEdit = project => {
    setEditingProject(project);
    setNewProject({
      name: project.name,
      team: project.team,
      priority: project.priority,
      status: project.status,
      docs: project.docs,
    });
    setIsModalOpen(true);
  };

  // Filter projects by name or team member
  const filteredProjects = projects.filter(
    p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.team.join(' ').toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = status => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-700';
      case 'In Progress':
        return 'bg-blue-100 text-blue-700';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getPriorityColor = priority => {
    switch (priority) {
      case 'High':
        return 'text-red-600 font-bold';
      case 'Medium':
        return 'text-yellow-600 font-semibold';
      case 'Low':
        return 'text-green-600';
      default:
        return '';
    }
  };

  return (
    <div className="p-6 font-sans">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search by project or team member..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 flex-1"
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition"
            onClick={() => setIsModalOpen(true)}
          >
            <FaUserPlus /> {editingProject ? 'Edit Project' : 'Add Project'}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            className="bg-white text-black shadow rounded-lg p-5 hover:shadow-xl transition-shadow flex flex-col justify-between"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-gray-800">{project.name}</h3>
              <FaFolderOpen className="text-gray-400" />
            </div>

            <p className="mb-1">
              <span className="font-semibold">Team:</span> {project.team.join(', ')}
            </p>
            <p className={`mb-1 ${getPriorityColor(project.priority)}`}>Priority: {project.priority}</p>
            <span
              className={`inline-block px-3 py-1 text-sm rounded-full ${getStatusColor(project.status)} mb-2`}
            >
              {project.status}
            </span>
            {project.docs.length > 0 && (
              <div className="mb-2">
                <span className="font-semibold text-gray-600">Docs:</span>
                <ul className="list-disc list-inside">
                  {project.docs.map((doc, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <FaFileAlt /> {doc}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="w-full bg-gray-200 h-2 rounded mt-2">
              <div
                className="h-2 rounded bg-blue-500 transition-all duration-500"
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
            <p className="text-right text-gray-500 text-sm mt-1">{project.progress}%</p>
            <div className="flex justify-end gap-2 mt-3">
              <button
                className="text-blue-500 hover:text-blue-700"
                onClick={() => handleEdit(project)}
              >
                <FaEdit />
              </button>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDelete(project.id)}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-lg w-11/12 md:w-1/2 p-6 relative">
            <h3 className="text-xl font-bold mb-4">{editingProject ? 'Edit Project' : 'Add New Project'}</h3>
            <form onSubmit={handleSaveProject} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Project Name"
                value={newProject.name}
                onChange={e => setNewProject({ ...newProject, name: e.target.value })}
                required
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Team Members (comma separated)"
                value={newProject.team}
                onChange={e =>
                  setNewProject({
                    ...newProject,
                    team: e.target.value.split(',').map(member => member.trim()),
                  })
                }
                required
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <select
                value={newProject.priority}
                onChange={e => setNewProject({ ...newProject, priority: e.target.value })}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              <select
                value={newProject.status}
                onChange={e => setNewProject({ ...newProject, status: e.target.value })}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
              <input
                type="file"
                onChange={e => setNewProject({ ...newProject, docs: e.target.files[0] })}
                className="p-2"
              />
              <div className="flex justify-end gap-4 mt-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setEditingProject(null);
                  }}
                  className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
                  {editingProject ? 'Save Changes' : 'Add Project'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
