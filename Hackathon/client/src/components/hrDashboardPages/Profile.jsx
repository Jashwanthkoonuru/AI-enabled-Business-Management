import { useState } from "react";
import { FaUserAlt, FaEnvelope, FaPhone, FaBuilding, FaEdit } from "react-icons/fa";

const initialProfile = {
  name: "Alex Johnson",
  email: "alex.johnson@company.com",
  phone: "+1 234 567 890",
  department: "Human Resources",
  role: "HR Manager",
};

const Profile = () => {
  const [profile, setProfile] = useState(initialProfile);
  const [editMode, setEditMode] = useState(false);
  const [tempProfile, setTempProfile] = useState(initialProfile);

  const saveProfile = () => {
    setProfile(tempProfile);
    setEditMode(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Profile</h2>
        <button
          onClick={() => setEditMode(true)}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          <FaEdit /> Edit Profile
        </button>
      </div>
      <div className="bg-white p-6 rounded-xl shadow max-w-2xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="h-24 w-24  rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-4xl font-bold">
            {profile.name.split(" ").map(n => n[0]).join("")}
          </div>
          <div className="flex-1 space-y-2">
            <p className="text-lg text-black font-semibold flex items-center gap-2">
              <FaUserAlt /> {profile.name}
            </p>
            <p className="text-gray-600 flex items-center gap-2">
              <FaEnvelope /> {profile.email}
            </p>
            <p className="text-gray-600 flex items-center gap-2">
              <FaPhone /> {profile.phone}
            </p>
            <p className="text-gray-600 flex items-center gap-2">
              <FaBuilding /> {profile.department} - {profile.role}
            </p>
          </div>
        </div>
      </div>
      {editMode && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-xl shadow w-96">
            <h3 className="text-lg font-semibold mb-4">Edit Profile</h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                className="w-full border px-3 py-2 rounded"
                value={tempProfile.name}
                onChange={(e) => setTempProfile({ ...tempProfile, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border px-3 py-2 rounded"
                value={tempProfile.email}
                onChange={(e) => setTempProfile({ ...tempProfile, email: e.target.value })}
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full border px-3 py-2 rounded"
                value={tempProfile.phone}
                onChange={(e) => setTempProfile({ ...tempProfile, phone: e.target.value })}
              />
              <input
                type="text"
                placeholder="Department"
                className="w-full border px-3 py-2 rounded"
                value={tempProfile.department}
                onChange={(e) => setTempProfile({ ...tempProfile, department: e.target.value })}
              />
              <input
                type="text"
                placeholder="Role"
                className="w-full border px-3 py-2 rounded"
                value={tempProfile.role}
                onChange={(e) => setTempProfile({ ...tempProfile, role: e.target.value })}
              />
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setEditMode(false)}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={saveProfile}
                className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Profile;
