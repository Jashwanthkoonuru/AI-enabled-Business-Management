import { useState } from "react";
import { FaUserAlt, FaMoneyBillWave, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const initialPayrollData = [
  { id: 1, name: "John Doe", department: "Engineering", salary: 5000, bonus: 500, deductions: 200, status: "Paid" },
  { id: 2, name: "Sara Smith", department: "Marketing", salary: 4500, bonus: 300, deductions: 150, status: "Pending" },
  { id: 3, name: "Mike Johnson", department: "Sales", salary: 4800, bonus: 400, deductions: 100, status: "Paid" },
];

const summaryCards = [
  { title: "Total Payroll", value: "$14,300", bgColor: "bg-indigo-500", icon: <FaMoneyBillWave className="h-6 w-6 text-white" /> },
  { title: "Paid Employees", value: 2, bgColor: "bg-green-500", icon: <FaCheckCircle className="h-6 w-6 text-white" /> },
  { title: "Pending Payments", value: 1, bgColor: "bg-yellow-400", icon: <FaTimesCircle className="h-6 w-6 text-white" /> },
];

const Payroll = () => {
  const [payrollData, setPayrollData] = useState(initialPayrollData);

  const handleInputChange = (id, field, value) => {
    setPayrollData((prev) =>
      prev.map((emp) =>
        emp.id === id ? { ...emp, [field]: field === "status" ? value : Number(value) } : emp
      )
    );
  };

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
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

      {/* Payroll Table */}
      <div className=" p-6 rounded-xl shadow overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <FaMoneyBillWave className="text-indigo-600" /> Employee Payroll
        </h2>

        <table className="w-full table-auto border-collapse">
          <thead className="">
            <tr>
              <th className="p-3 text-left">Employee</th>
              <th className="p-3 text-left">Department</th>
              <th className="p-3 text-left">Salary</th>
              <th className="p-3 text-left">Bonus</th>
              <th className="p-3 text-left">Deductions</th>
              <th className="p-3 text-left">Net Pay</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {payrollData.map((emp) => {
              const netPay = emp.salary + emp.bonus - emp.deductions;
              return (
                <tr key={emp.id} className="border-b hover:bg-gray-600">
                  <td className="p-3 flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                      <FaUserAlt className="h-4 w-4" />
                    </div>
                    {emp.name}
                  </td>
                  <td className="p-3">{emp.department}</td>

                  {/* Editable Fields */}
                  <td className="p-3">
                    <input
                      type="number"
                      value={emp.salary}
                      onChange={(e) => handleInputChange(emp.id, "salary", e.target.value)}
                      className="border text-black rounded px-2 py-1 w-24"
                    />
                  </td>
                  <td className="p-3">
                    <input
                      type="number"
                      value={emp.bonus}
                      onChange={(e) => handleInputChange(emp.id, "bonus", e.target.value)}
                      className="border text-black rounded px-2 py-1 w-24"
                    />
                  </td>
                  <td className="p-3">
                    <input
                      type="number"
                      value={emp.deductions}
                      onChange={(e) => handleInputChange(emp.id, "deductions", e.target.value)}
                      className="border text-black rounded px-2 py-1 w-24"
                    />
                  </td>

                  <td className="p-3 font-semibold">${netPay}</td>

                  <td className="p-3">
                    <select
                      value={emp.status}
                      onChange={(e) => handleInputChange(emp.id, "status", e.target.value)}
                      className="border text-black rounded px-2 py-1"
                    >
                      <option value="Paid">Paid</option>
                      <option value="Pending">Pending</option>
                    </select>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payroll;
