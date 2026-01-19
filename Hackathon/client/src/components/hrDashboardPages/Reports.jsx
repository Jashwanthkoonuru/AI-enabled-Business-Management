import { useState } from "react";
import { FaFilePdf, FaFileExcel, FaDownload, FaTrash, FaCalendarAlt, FaFilter } from "react-icons/fa";
const initialReports = [
  { id: 1, name: "Attendance Report Jan 2026.pdf", type: "pdf", date: "2026-01-05" },
  { id: 2, name: "Payroll Report Dec 2025.xlsx", type: "excel", date: "2026-01-01" },
  { id: 3, name: "Leave Summary Jan 2026.pdf", type: "pdf", date: "2026-01-05" },
];

const Reports = () => {
  const [reports, setReports] = useState(initialReports);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [newReport, setNewReport] = useState({ name: "", type: "pdf", date: "" });
  const addReport = () => {
    if (!newReport.name || !newReport.date) return;
    setReports([...reports, { ...newReport, id: Date.now() }]);
    setNewReport({ name: "", type: "pdf", date: "" });
    setShowUploadModal(false);
  };
  const deleteReport = (id) => {
    setReports(reports.filter(r => r.id !== id));
  };
  const getFileIcon = (type) => {
    switch (type) {
      case "pdf": return <FaFilePdf className="text-red-600 h-6 w-6" />;
      case "excel": return <FaFileExcel className="text-green-600 h-6 w-6" />;
      default: return <FaFilePdf className="text-gray-600 h-6 w-6" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">HR Reports</h2>
        <button
          onClick={() => setShowUploadModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          <FaFilePdf /> Upload Report
        </button>
      </div>
      <div className="flex text-black flex-col md:flex-row gap-4 items-center">
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-blue-600" />
          <input
            type="date"
            className="border px-2 py-1 rounded"
          />
        </div>
        <div className="text-black flex items-center gap-2">
          <FaFilter className="text-blue-600" />
          <select className="border px-2 py-1 rounded">
            <option value="">All Types</option>
            <option value="pdf">PDF</option>
            <option value="excel">Excel</option>
          </select>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
        <table className="w-full table-auto border-collapse text-black">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Report Name</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id} className="border-b hover:bg-gray-50">
                <td className="p-3 flex items-center gap-2">
                  {getFileIcon(report.type)}
                  {report.name}
                </td>
                <td className="p-3 capitalize">{report.type}</td>
                <td className="p-3">{report.date}</td>
                <td className="p-3 flex gap-2">
                  <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800">
                    <FaDownload /> Download
                  </button>
                  <button onClick={() => deleteReport(report.id)} className="flex items-center gap-1 text-red-600 hover:text-red-800">
                    <FaTrash /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showUploadModal && (
        <div className="fixed text-black inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow w-96">
            <h3 className="text-lg font-semibold mb-4">Upload New Report</h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Report Name"
                className="w-full border px-3 py-2 rounded"
                value={newReport.name}
                onChange={(e) => setNewReport({ ...newReport, name: e.target.value })}
              />
              <input
                type="date"
                className="w-full border px-3 py-2 rounded"
                value={newReport.date}
                onChange={(e) => setNewReport({ ...newReport, date: e.target.value })}
              />
              <select
                className="w-full border px-3 py-2 rounded"
                value={newReport.type}
                onChange={(e) => setNewReport({ ...newReport, type: e.target.value })}
              >
                <option value="pdf">PDF</option>
                <option value="excel">Excel</option>
              </select>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setShowUploadModal(false)}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={addReport}
                className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Reports;
