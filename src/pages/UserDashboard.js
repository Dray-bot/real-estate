import React from "react";

function UserDashboard() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>
      
      <div className="bg-white p-4 shadow-lg rounded-lg mb-6">
        <h2 className="text-xl font-semibold">Saved Listings</h2>
        <p className="text-gray-600">You have no saved properties yet.</p>
      </div>

      <div className="bg-white p-4 shadow-lg rounded-lg mb-6">
        <h2 className="text-xl font-semibold">Messages</h2>
        <p className="text-gray-600">No messages yet.</p>
      </div>

      <div className="bg-white p-4 shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold">Notifications</h2>
        <p className="text-gray-600">No new notifications.</p>
      </div>
    </div>
  );
}

export default UserDashboard;
