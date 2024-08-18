import React from "react";

function Role() {
  return (
    <select
      name="status"
      id="status"
      className="w-full h-full bg-base-white border-none focus:outline-none text-neutral-neutral-700 text-base font-semibold appearance-none"
    >
      <option
        className="w-full h-full bg-base-white border-none focus:outline-none text-neutral-neutral-700 text-base font-semibold appearance-none"
        value=""
      >
        Select Status
      </option>
      <option value="active">Active</option>
      <option value="inactive">Inactive</option>
      <option value="pending">Pending</option>
      <option value="suspended">Suspended</option>
    </select>
  );
}

export default Role;
