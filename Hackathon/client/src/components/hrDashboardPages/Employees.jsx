import { useState } from "react";

const Employees = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className=" rounded-xl shadow p-6">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold">Employees</h2>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            + Add Employee
          </button>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left">
              <th className="p-3">Name</th>
              <th className="p-3">Department</th>
              <th className="p-3">Role</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {["Alice", "Bob", "Charlie"].map((name) => (
              <tr key={name} className="border-b hover:bg-gray-600 rounded">
                <td className="p-3">{name}</td>
                <td className="p-3">Engineering</td>
                <td className="p-3">Developer</td>
                <td className="p-3">
                  <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
                    Active
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-6 relative animate-fadeIn">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-black">Add Employee Data</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                ✕
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-black">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter employee name"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-black">
                  Designatin
                </label>
                <input
                  type="text"
                  placeholder="Engineering, HR, Sales"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-black">
                  Role
                </label>
                <input
                  type="text"
                  placeholder="Developer, Manager"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-black">
                  Status
                </label>
                <select className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none text-black">
                  <option>Active</option>
                  <option>Inactive</option>
                  <option>On Leave</option>
                </select>
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-black px-4 py-2 rounded-lg border hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  Save Employee
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Employees;
