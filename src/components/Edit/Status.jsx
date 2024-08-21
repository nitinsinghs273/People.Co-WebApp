import React from "react";

function Status({ status, setStatus }) {
  return (
    <select
      name="status"
      id="status"
      className="w-[300px] h-full bg-base-white border-none focus:outline-none text-neutral-neutral-700 text-base font-semibold appearance-none"
      value={status}
      onChange={(e) => setStatus(e.target.value)}
    >
      {["Inactive", "Suspended", "Pending", "Active"].map((role, index) => (
        <option key={index} value={role}>
          {role}
        </option>
      ))}
      <option value="">Select Role</option>
    </select>
  );
}

export default Status;
