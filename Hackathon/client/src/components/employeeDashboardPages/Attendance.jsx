import React, { useState } from "react";
import EventNote from '@mui/icons-material/EventNote';

const Attendance = () => {
    const [percentage, setPercentage] = useState(0);
    const [time, setTime] = useState(new Date());
    const attendanceData = [
        { label: "Total", value: 10, color: "blue" },
        { label: "Present", value: 9, color: "green" },
        { label: "Late", value: 1, color: "yellow" },
        { label: "Halfday", value: 1, color: "purple" },
        { label: "Leave", value: 1, color: "orange" },
        { label: "Absent", value: 1, color: "red" }
    ];
    const getBgColor = (color) => {
        switch(color){
            case "blue": return "bg-blue-100";
            case "green": return "bg-green-100";
            case "yellow": return "bg-yellow-100";
            case "purple": return "bg-purple-100";
            case "orange": return "bg-orange-100";
            case "red": return "bg-red-100";
            default: return "bg-gray-100";
        }
    }
    return (
        <div className="p-2">
            <h1 className="text-3xl mb-3 " >My Attendance</h1>
            <h3 className="text-1xl">View your attendance history and statistics</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
                {attendanceData.map((item, index) => (
                    <div
                        key={index}
                        className={`relative flex flex-col p-4 rounded-2xl ${getBgColor(item.color)} text-black text-sm hover:bg-opacity-90 transition duration-300 ease-in-out`}
                    >
                        <EventNote
                            sx={{ width: 30, height: 30, color: item.color }}
                            className="absolute right-2 top-1/4 -translate-y-1/2 bg-white rounded-2xl p-1 hidden sm:block"
                        />
                        <span className="p-2">{item.label}</span>
                        <span className="text-black text-2xl font-bold">{item.value}</span>
                    </div>
                ))}
            </div>
            <div className="mt-5">
                <div className="relative flex flex-col p-4 rounded-2xl bg-green-100 text-black text-sm">
                    <EventNote
                        sx={{ width: 35, height: 35, color: "green" }}
                        className="absolute right-3 top-4 bg-white rounded-xl p-1 hidden sm:block"
                    />
                    <span className="p-2">Attendance Percentage</span>
                    <div className="relative w-full mt-6">
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={percentage}
                            onChange={(e) => setPercentage(e.target.value)}
                            className="w-full h-2 bg-white rounded-lg appearance-none accent-green-700"
                        />
                        <div
                            className="p-2 ml-2 absolute -top-6 text-black font-bold"
                            style={{ left: `calc(${percentage}% - 15px)` }}
                        >
                            {percentage}%
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-full mt-6 p-4 bg-yellow-100 text-black rounded-2xl shadow-md">
                <h1 className="text-3xl mb-2 text-bold ">My Attendance History</h1>
                <div className="text-sm font-medium mb-2">
                    <span>{time.toLocaleDateString(undefined, { weekday: "long" })}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                        <span>{time.toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-black font-semibold bg-green-200 px-3 py-1 rounded-full text-sm">
                            Present
                        </span>
                        <span className="text-sm bg-white text-black rounded-lg px-2 py-1">
                            Login Recorded
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Attendance;
