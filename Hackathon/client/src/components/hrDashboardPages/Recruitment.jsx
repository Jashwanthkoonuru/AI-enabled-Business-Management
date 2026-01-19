import { useState } from "react";
import {
  FaUserPlus,
  FaPlus,
  FaClipboardList,
  FaCheckCircle,
  FaTimesCircle,
  FaUsers,
} from "react-icons/fa";

const initialCandidates = [
  { id: 1, name: "John Doe", jobId: 1, stage: "Interview", status: "Pending" },
  { id: 2, name: "Sara Smith", jobId: 2, stage: "Screening", status: "Pending" },
];

const initialJobs = [
  { id: 1, title: "Frontend Developer", department: "Engineering", positions: 3 },
  { id: 2, title: "Marketing Manager", department: "Marketing", positions: 2 },
];

const summaryCards = [
  { title: "Total Candidates", value: 12, color: "bg-indigo-500", icon: <FaUsers className="h-6 w-6 text-white" /> },
  { title: "Hired", value: 5, color: "bg-green-500", icon: <FaCheckCircle className="h-6 w-6 text-white" /> },
  { title: "Rejected", value: 2, color: "bg-red-500", icon: <FaTimesCircle className="h-6 w-6 text-white" /> },
  { title: "Pending", value: 5, color: "bg-yellow-400", icon: <FaClipboardList className="h-6 w-6 text-white" /> },
];

const stages = ["Screening", "Interview", "Offer"];
const statuses = ["Pending", "Hired", "Rejected"];

const Recruitment = () => {
  const [jobs, setJobs] = useState(initialJobs);
  const [candidates, setCandidates] = useState(initialCandidates);
  const [showJobModal, setShowJobModal] = useState(false);
  const [newJob, setNewJob] = useState({ title: "", department: "", positions: 1 });

  const addJob = () => {
    setJobs([...jobs, { ...newJob, id: Date.now() }]);
    setNewJob({ title: "", department: "", positions: 1 });
    setShowJobModal(false);
  };

  const updateCandidate = (id, field, value) => {
    setCandidates(candidates.map(c => (c.id === id ? { ...c, [field]: value } : c)));
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card) => (
          <div key={card.title} className={`${card.color} text-white rounded-xl shadow p-6 flex justify-between items-center hover:scale-105 transition transform`}>
            <div>
              <p className="text-sm flex items-center gap-2">{card.icon} {card.title}</p>
              <p className="text-3xl font-bold">{card.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => setShowJobModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          <FaPlus /> Create Job
        </button>
      </div>
      <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
        <h2 className="text-xl text-black font-semibold mb-4 flex items-center gap-2">
          <FaClipboardList className="text-indigo-600" /> Open Positions
        </h2>
        <table className="w-full table-auto border-collapse text-black">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Job Title</th>
              <th className="p-3 text-left">Department</th>
              <th className="p-3 text-left">Positions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{job.title}</td>
                <td className="p-3">{job.department}</td>
                <td className="p-3">{job.positions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
        <h2 className="text-xl text-black font-semibold mb-4 flex items-center gap-2">
          <FaUserPlus className="text-indigo-600" /> Candidate Overview
        </h2>

        <table className="w-full table-auto border-collapse text-black">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Candidate</th>
              <th className="p-3 text-left">Job</th>
              <th className="p-3 text-left">Stage</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((cand) => {
              const job = jobs.find(j => j.id === cand.jobId);
              return (
                <tr key={cand.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                      <FaUserPlus className="h-4 w-4" />
                    </div>
                    {cand.name}
                  </td>
                  <td className="p-3">{job ? job.title : "—"}</td>
                  <td className="p-3">
                    <select
                      className="border px-2 py-1 rounded"
                      value={cand.stage}
                      onChange={(e) => updateCandidate(cand.id, "stage", e.target.value)}
                    >
                      {stages.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </td>
                  <td className="p-3">
                    <select
                      className="border px-2 py-1 rounded"
                      value={cand.status}
                      onChange={(e) => updateCandidate(cand.id, "status", e.target.value)}
                    >
                      {statuses.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {showJobModal && (
        <div className="fixed  text-black inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow w-96">
            <h3 className="text-lg font-semibold mb-4">Create New Job</h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Job Title"
                className="w-full border px-3 py-2 rounded"
                value={newJob.title}
                onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
              />
              <input
                type="text"
                placeholder="Department"
                className="w-full border px-3 py-2 rounded"
                value={newJob.department}
                onChange={(e) => setNewJob({ ...newJob, department: e.target.value })}
              />
              <input
                type="number"
                placeholder="Positions"
                className="w-full border px-3 py-2 rounded"
                value={newJob.positions}
                min={1}
                onChange={(e) => setNewJob({ ...newJob, positions: parseInt(e.target.value) })}
              />
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setShowJobModal(false)}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={addJob}
                className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Recruitment;
