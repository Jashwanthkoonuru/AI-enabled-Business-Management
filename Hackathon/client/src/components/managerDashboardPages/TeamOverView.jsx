// TeamOverview.jsx
import React, { useState, useEffect } from 'react';
import TeamStatusChart from '../../reactChats/ManagerChats/TeamStatusChart';
import { FaUsers, FaUserCheck, FaUserTimes } from 'react-icons/fa';

const TeamOverview = () => {
  const [teamMembers, setTeamMembers] = useState([
    { id: 101, name: 'Alice Smith', role: 'Developer', department: 'IT', status: 'Active' },
    { id: 102, name: 'Bob Jones', role: 'Designer', department: 'Marketing', status: 'Active' },
    { id: 103, name: 'Carol Lee', role: 'QA Analyst', department: 'IT', status: 'Inactive' },
    { id: 104, name: 'David Kim', role: 'Project Manager', department: 'IT', status: 'Active' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    const interval = setInterval(() => {
      setTeamMembers(prev =>
        prev.map(member => ({
          ...member,
          status: Math.random() > 0.8 ? (member.status === 'Active' ? 'Inactive' : 'Active') : member.status,
        }))
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const activeCount = teamMembers.filter(m => m.status === 'Active').length;
  const inactiveCount = teamMembers.filter(m => m.status === 'Inactive').length;

  const filteredMembers = teamMembers.filter(
    m =>
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 font-sans">
      <h2 className="text-2xl font-bold mb-6 ">Team Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
        <div className="bg-white shadow rounded-lg p-5 flex items-center gap-4">
          <div className="text-3xl text-gray-500">
            <FaUsers />
          </div>
          <div>
            <p className="text-gray-500">Total Members</p>
            <p className="text-2xl font-bold text-gray-500">{teamMembers.length}</p>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-5 flex items-center gap-4">
          <div className="text-3xl text-blue-500">
            <FaUserCheck />
          </div>
          <div className="flex-1">
            <p className="text-gray-500">Active Members</p>
            <p className="text-2xl font-bold text-blue-500">{activeCount}</p>
            <div className="w-full bg-gray-200 h-2 rounded mt-2">
              <div className="h-2 rounded bg-blue-500 transition-all duration-500" style={{ width: `${(activeCount / teamMembers.length) * 100}%` }}></div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-5 flex items-center gap-4">
          <div className="text-3xl text-pink-500">
            <FaUserTimes />
          </div>
          <div className="flex-1">
            <p className="text-gray-500">Inactive Members</p>
            <p className="text-2xl font-bold text-pink-500">{inactiveCount}</p>
            <div className="w-full bg-gray-200 h-2 rounded mt-2">
              <div className="h-2 rounded bg-pink-500 transition-all duration-500" style={{ width: `${(inactiveCount / teamMembers.length) * 100}%` }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name, role, department..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow overflow-hidden text-black">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-6 text-left text-gray-600 font-medium">ID</th>
              <th className="py-3 px-6 text-left text-gray-600 font-medium">Name</th>
              <th className="py-3 px-6 text-left text-gray-600 font-medium">Role</th>
              <th className="py-3 px-6 text-left text-gray-600 font-medium">Department</th>
              <th className="py-3 px-6 text-left text-gray-600 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredMembers.map(member => (
              <tr key={member.id} className={`transition-colors duration-300 ${member.status === 'Inactive' ? 'bg-red-50' : 'bg-white'} hover:bg-gray-50`}>
                <td className="py-3 px-6">{member.id}</td>
                <td className="py-3 px-6">{member.name}</td>
                <td className="py-3 px-6">{member.role}</td>
                <td className="py-3 px-6">{member.department}</td>
                <td className={`py-3 px-6 font-semibold ${member.status === 'Active' ? 'text-blue-500' : 'text-pink-500'}`}>
                  {member.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className="mt-10">
        <TeamStatusChart active={activeCount} inactive={inactiveCount} />
      </div> */}
    </div>
  );
};

export default TeamOverview;
