import React from "react";

function Role({ role, setRole }) {
  return (
    <div>
      <select
        name="role"
        id="role"
        className="w-[260px] h-full bg-base-white border-none focus:outline-none text-neutral-neutral-700 text-base font-semibold appearance-none"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        {[
          "Developer",
          "Designer",
          "Product Manager",
          "Analyst",
          "Marketing Manager",
          "Sales Executive",
          "Data Scientist",
          "Content Writer",
          "Finance Manager",
          "HR Manager",
        ].map((role, index) => (
          <option key={index} value={role}>
            {role}
          </option>
        ))}
        <option value="">Select Role</option>
      </select>
    </div>
  );
}

export default Role;
