import { useState } from "react";
import { FaFileAlt, FaFilePdf, FaFileWord, FaFileExcel, FaUpload, FaTrash } from "react-icons/fa";

const initialDocuments = [
  { id: 1, name: "Leave Policy.pdf", type: "pdf" },
  { id: 2, name: "Code of Conduct.docx", type: "word" },
  { id: 3, name: "Salary Structure.xlsx", type: "excel" },
];

const PoliciesDocuments = () => {
  const [documents, setDocuments] = useState(initialDocuments);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [newDoc, setNewDoc] = useState({ name: "", type: "pdf" });
  const addDocument = () => {
    if (!newDoc.name) return;
    setDocuments([...documents, { ...newDoc, id: Date.now() }]);
    setNewDoc({ name: "", type: "pdf" });
    setShowUploadModal(false);
  };
  const deleteDocument = (id) => {
    setDocuments(documents.filter(doc => doc.id !== id));
  };
  const getFileIcon = (type) => {
    switch (type) {
      case "pdf": return <FaFilePdf className="text-red-600 h-6 w-6" />;
      case "word": return <FaFileWord className="text-blue-600 h-6 w-6" />;
      case "excel": return <FaFileExcel className="text-green-600 h-6 w-6" />;
      default: return <FaFileAlt className="text-gray-600 h-6 w-6" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold ">Policies & Documents</h2>
        <button
          onClick={() => setShowUploadModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          <FaUpload /> Upload Document
        </button>
      </div>
      <div className="bg-white text-black p-6 rounded-xl shadow overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Document Name</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc) => (
              <tr key={doc.id} className="border-b hover:bg-gray-50">
                <td className="p-3 flex items-center gap-2">
                  {getFileIcon(doc.type)}
                  {doc.name}
                </td>
                <td className="p-3 capitalize">{doc.type}</td>
                <td className="p-3 flex gap-2">
                  <button
                    onClick={() => deleteDocument(doc.id)}
                    className="text-red-600 hover:text-red-800 flex items-center gap-1"
                  >
                    <FaTrash /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showUploadModal && (
        <div className="text-black fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow w-96">
            <h3 className="text-lg font-semibold mb-4">Upload New Document</h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Document Name"
                className="w-full border px-3 py-2 rounded"
                value={newDoc.name}
                onChange={(e) => setNewDoc({ ...newDoc, name: e.target.value })}
              />
              <select
                className="w-full border px-3 py-2 rounded"
                value={newDoc.type}
                onChange={(e) => setNewDoc({ ...newDoc, type: e.target.value })}
              >
                <option value="pdf">PDF</option>
                <option value="word">Word</option>
                <option value="excel">Excel</option>
                <option value="other">Other</option>
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
                onClick={addDocument}
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

export default PoliciesDocuments;
