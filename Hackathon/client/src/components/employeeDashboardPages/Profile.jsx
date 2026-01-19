import React, { useState } from "react";
const Profile = () => {
  const [formData, setFormData] = useState({
    name: "",
    profile: null,
    position: "",
    email: "",
    phone: "",
    location: "",
    about: "",
  });
const handleChange = (e) => {
  const { name, value, files } = e.target;
  if (name === "profile") {
    setFormData({ ...formData, profile: files[0] });
  } else {
    setFormData({ ...formData, [name]: value });
  }
};


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Employee Data:", formData);
  };
  return (
    <div className="min-h-screen  py-8 px-2">
      <div className="max-w-full mx-auto flex flex-col lg:flex-row gap-6">
         <div className="w-200 flex-1 bg-white rounded-lg shadow-2xl p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Profile Preview</h2>
            <div className="flex flex-col items-start">
            <div className="w-24 h-24 bg-gray-200 rounded-full mb-4"></div>
            <div className="flex w-full justify-between mb-2">
                <span className="text-gray-700 font-medium">Name:</span>
                <span className="text-gray-700">{formData.name || ""}</span>
            </div>
            <div className="flex w-full justify-between mb-2">
                <span className="text-gray-700 font-medium">Position:</span>
                <span className="text-gray-600">{formData.position || ""}</span>
            </div>
            <div className="flex w-full justify-between mb-2">
                <span className="text-gray-700 font-medium">Email:</span>
                <span className="text-gray-600">{formData.email || ""}</span>
            </div>
            <div className="flex w-full justify-between mb-2">
                <span className="text-gray-700 font-medium">Phone:</span>
                <span className="text-gray-600">{formData.phone || ""}</span>
            </div>
            <div className="flex w-full justify-between mb-2">
                <span className="text-gray-700 font-medium">Location:</span>
                <span className="text-gray-600">{formData.location || ""}</span>
            </div>
            </div>
        </div>
        <div className="flex-1 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Employee Profile Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="profile">
                Profile Picture
            </label>
            <input
            type="file"
            id="profile"
            name="profile"
            accept="image/*"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
            />
            {formData.profile && (
            <img
                src={URL.createObjectURL(formData.profile)}
                alt="Profile Preview"
                className="mt-2 h-20 w-20 object-cover rounded-full"
            />
            )}
        </div>
        <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="name">Name</label>
            <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
            placeholder="Enter full name"
            required
            />
        </div>
        <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="position">Position</label>
            <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
            placeholder="Enter position"
            />
        </div>
        <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="email">Email</label>
            <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
            placeholder="Enter email"
            required
            />
        </div>
        <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="phone">Phone</label>
            <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
            placeholder="Enter phone number"
            />
        </div>
        <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="location">Location</label>
            <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
            placeholder="Enter location"
            />
        </div>
        <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="about">About</label>
            <textarea
            id="about"
            name="about"
            value={formData.about}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
            placeholder="Write something about the employee"
            />
        </div>
        <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition"
        >
            Submit
        </button>
        </form>
        </div>

      </div>
    </div>
  );
};

export default Profile;
