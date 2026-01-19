import React, { useState } from 'react';
import { FaUserCircle, FaEnvelope, FaPhone, FaBuilding, FaStar, FaEdit } from 'react-icons/fa';

const Profile = () => {
  const [manager, setManager] = useState({
    name: 'John Doe',
    role: 'Project Manager',
    department: 'IT',
    email: 'john.doe@company.com',
    phone: '+1 234 567 890',
    location: 'New York, USA',
    profilePicture: '',
    experience: 8,
    rating: 4.7,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempData, setTempData] = useState({ ...manager });

  const handleSave = () => {
    setManager(tempData);
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <FaUserCircle /> Manager Profile
        </h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600"
        >
          <FaEdit /> Edit Profile
        </button>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col text-black md:flex-row items-center md:items-start gap-6">
        <div className="flex-shrink-0">
          {manager.profilePicture ? (
            <img
              src={manager.profilePicture}
              alt={manager.name}
              className="w-32 h-32 rounded-full object-cover"
            />
          ) : (
            <FaUserCircle className="w-32 h-32 text-gray-300" />
          )}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">{manager.name}</h3>
          <p className="text-gray-600 mb-1">{manager.role} - {manager.department}</p>
          <p className="text-gray-600 flex items-center gap-2"><FaEnvelope /> {manager.email}</p>
          <p className="text-gray-600 flex items-center gap-2"><FaPhone /> {manager.phone}</p>
          <p className="text-gray-600 flex items-center gap-2"><FaBuilding /> {manager.location}</p>
          <div className="mt-4 flex flex-wrap gap-4">
            <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg shadow flex items-center gap-2">
              <FaStar /> {manager.rating} / 5
            </div>
            <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg shadow">
              {manager.experience} Years Experience
            </div>
          </div>
        </div>
      </div>
      <div className="grid text-black grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        <div className="bg-yellow-100 shadow-lg rounded-xl p-5 flex flex-col items-center">
          <p className="text-gray-700">Total Projects</p>
          <p className="text-2xl font-bold">15</p>
        </div>
        <div className="bg-purple-100 shadow-lg rounded-xl p-5 flex flex-col items-center">
          <p className="text-gray-700">Team Members</p>
          <p className="text-2xl font-bold">8</p>
        </div>
        <div className="bg-blue-100 shadow-lg rounded-xl p-5 flex flex-col items-center">
          <p className="text-gray-700">Pending Approvals</p>
          <p className="text-2xl font-bold">3</p>
        </div>
        <div className="bg-green-100 shadow-lg rounded-xl p-5 flex flex-col items-center">
          <p className="text-gray-700">Completed Tasks</p>
          <p className="text-2xl font-bold">120</p>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed text-black inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white tect-black rounded-xl w-11/12 md:w-1/2 p-6 relative">
            <h3 className="text-xl font-bold mb-4">Edit Profile</h3>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                value={tempData.name}
                onChange={e => setTempData({ ...tempData, name: e.target.value })}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Role"
                value={tempData.role}
                onChange={e => setTempData({ ...tempData, role: e.target.value })}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Department"
                value={tempData.department}
                onChange={e => setTempData({ ...tempData, department: e.target.value })}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Email"
                value={tempData.email}
                onChange={e => setTempData({ ...tempData, email: e.target.value })}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Phone"
                value={tempData.phone}
                onChange={e => setTempData({ ...tempData, phone: e.target.value })}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Location"
                value={tempData.location}
                onChange={e => setTempData({ ...tempData, location: e.target.value })}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <div className="flex justify-end gap-4 mt-4">
                <button
                  className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
