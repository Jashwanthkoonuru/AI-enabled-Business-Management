import DailyAttendanceChart from "../../reactChats/HrChats/DailyAttendanceChart";
import MonthlyAttendanceChart from "../../reactChats/HrChats/MonthlyAttendanceChart";
import StatusPieChart from "../../reactChats/HrChats/StatusPieChart";
import { FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";
const Attendance = () => {
    const summaryCards = [
        { title: "Present Today", value: "221", color: "indigo",bgColor: "bg-red-500", icon: <FaCheckCircle className="h-8 w-8 text-indigo-600" /> },
        { title: "Absent Today", value: "19", color: "red", bgColor:"bg-yellow-500", icon: <FaTimesCircle className="h-8 w-8 text-red-600" /> },
        { title: "Late Arrivals", value: "8", color: "yellow",bgColor: "bg-indigo-500", icon: <FaClock className="h-8 w-8 text-yellow-600" /> },
    ];
  return (
    <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {summaryCards.map((card) => (
            <div
            key={card.title}
            className={`${card.bgColor} rounded-xl shadow p-6 flex justify-between items-center hover:scale-105 transition transform`}
            >
            <div>
                <p className="text-white text-sm">{card.title}</p>
                <p className="text-3xl font-bold text-white">{card.value}</p>
            </div>
            <div className="flex items-center justify-center h-12 w-12 bg-white/20 rounded-full">
                {card.icon}
            </div>
            </div>
        ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DailyAttendanceChart />
            <MonthlyAttendanceChart />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 ">
            <StatusPieChart />
        </div>
    </div>
  );
};

export default Attendance;
