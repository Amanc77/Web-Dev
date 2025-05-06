import React from "react";

function AdminPanel() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <div>
        <button className="bg-green-500 text-white p-2 rounded-2xl">
          Add New Profile
        </button>
      </div>
    </div>
  );
}

export default AdminPanel;
