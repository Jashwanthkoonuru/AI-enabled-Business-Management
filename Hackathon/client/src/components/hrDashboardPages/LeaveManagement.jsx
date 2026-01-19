import { FaUserAlt, FaClock, FaCheck, FaTimes, FaCalendarAlt } from "react-icons/fa";

const leaveRequests = [
  { name: "John Doe", type: "Sick Leave", days: 2, status: "Pending" },
  { name: "Sara Smith", type: "Casual Leave", days: 1, status: "Pending" },
  { name: "Mike Johnson", type: "Vacation", days: 5, status: "Pending" },
];

const summaryCards = [
  {
    title: "Pending Requests",
    value: leaveRequests.filter(r => r.status === "Pending").length,
    bgColor: "bg-yellow-400",
    icon: <FaClock className="h-6 w-6 text-white" />,
  },
  {
    title: "Approved",
    value: 12,
    bgColor: "bg-green-500",
    icon: <FaCheck className="h-6 w-6 text-white" />,
  },
  {
    title: "Rejected",
    value: 3,
    bgColor: "bg-red-500",
    icon: <FaTimes className="h-6 w-6 text-white" />,
  },
];

const LeaveManagement = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {summaryCards.map((card) => (
          <div
            key={card.title}
            className={`${card.bgColor} text-white rounded-xl shadow p-6 flex justify-between items-center hover:scale-105 transition transform`}
          >
            <div>
              <p className="text-sm flex items-center gap-2">{card.icon} {card.title}</p>
              <p className="text-3xl font-bold">{card.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <FaCalendarAlt className="text-indigo-600 text-black" /> Leave Requests
        </h2>
        <div className="space-y-4">
          {leaveRequests.map((req) => (
            <div
              key={req.name}
              className="flex flex-col sm:flex-row justify-between items-center border p-4 rounded-lg hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <FaUserAlt className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium flex items-center gap-1">
                    {req.name} {req.status === "Pending" && <FaClock className="text-yellow-500" />}
                    {req.status === "Approved" && <FaCheck className="text-green-500" />}
                    {req.status === "Rejected" && <FaTimes className="text-red-500" />}
                  </p>
                  <p className="text-sm text-gray-500">
                    {req.type} - {req.days} {req.days > 1 ? "Days" : "Day"}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mt-3 sm:mt-0">
                <button className="px-4 py-1 bg-green-600 text-white rounded flex items-center gap-1 hover:bg-green-700 transition">
                  <FaCheck /> Approve
                </button>
                <button className="px-4 py-1 bg-red-600 text-white rounded flex items-center gap-1 hover:bg-red-700 transition">
                  <FaTimes /> Reject
                </button>
                <span
                  className={`px-3 py-1 rounded-full text-sm flex items-center gap-1 ${
                    req.status === "Pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : req.status === "Approved"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {req.status === "Pending" && <FaClock />}
                  {req.status === "Approved" && <FaCheck />}
                  {req.status === "Rejected" && <FaTimes />}
                  {req.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaveManagement;
