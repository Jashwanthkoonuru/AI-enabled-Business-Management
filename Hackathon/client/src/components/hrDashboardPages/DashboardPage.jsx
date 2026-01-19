import { useState } from "react";
import { FaUsers, FaCheckCircle, FaClipboardList, FaBriefcase } from "react-icons/fa";
import DailyAttendanceChart from "../../reactChats/HrChats/DailyAttendanceChart";
import MonthlyAttendanceChart from "../../reactChats/HrChats/MonthlyAttendanceChart";
import LeaveChart from "../../reactChats/HrChats/LeaveChart";
import OpenPositionsChart from "../../reactChats/HrChats/OpenPositionsChart";

const HRDashboardPage = () => {
  const summaryCards = [
    {
      title: "Total Employees",
      value: 120,
      color: "bg-indigo-500",
      icon: <FaUsers className="h-6 w-6 text-white" />,
    },
    {
      title: "Present Today",
      value: 100,
      color: "bg-green-500",
      icon: <FaCheckCircle className="h-6 w-6 text-white" />,
    },
    {
      title: "Leave Requests",
      value: 8,
      color: "bg-yellow-400",
      icon: <FaClipboardList className="h-6 w-6 text-white" />,
    },
    {
      title: "Open Positions",
      value: 5,
      color: "bg-red-500",
      icon: <FaBriefcase className="h-6 w-6 text-white" />,
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">HR Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card) => (
          <div
            key={card.title}
            className={`${card.color} text-white rounded-xl shadow p-6 flex justify-between items-center hover:scale-105 transition transform`}
          >
            <div>
              <p className="text-sm flex items-center gap-2">{card.icon} {card.title}</p>
              <p className="text-3xl font-bold">{card.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg text-black font-semibold mb-4">Leave Requests for Employess</h2>
          <LeaveChart />
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg text-black font-semibold mb-4">Open Positions / Job Openings</h2>
          <OpenPositionsChart />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg text-black font-semibold mb-4">Daily Attendance</h2>
          <DailyAttendanceChart />
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Monthly Attendance</h2>
          <MonthlyAttendanceChart />
        </div>
      </div>
      <div className=" p-6 rounded-xl shadow">
        <h2 className="text-lg  font-semibold mb-4">Company-Wide Analytics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-indigo-100 rounded-xl p-4 flex flex-col items-center">
            <p className="text-indigo-600 font-semibold">Average Attendance</p>
            <p className="text-2xl text-black font-bold">95%</p>
          </div>
          <div className="bg-green-100 rounded-xl p-4 flex flex-col items-center">
            <p className="text-green-600 font-semibold">Employee Satisfaction</p>
            <p className="text-2xl text-black font-bold">88%</p>
          </div>
          <div className="bg-yellow-100 rounded-xl p-4 flex flex-col items-center">
            <p className="text-yellow-600 font-semibold">Average Leaves/Month</p>
            <p className="text-2xl text-black font-bold">5</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HRDashboardPage;
