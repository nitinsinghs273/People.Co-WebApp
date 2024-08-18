import React from "react";

function Select() {
  return (
    <div>
      <select
        name="role"
        id="role"
        className="w-full h-full bg-base-white border-none focus:outline-none text-neutral-neutral-700 text-base font-semibold appearance-none"
      >
        <option value="">Select Role</option>
        <option value="product-developer">Product Developer</option>
        <option value="web-developer">Web Developer</option>
        <option value="frontend-developer">Frontend Developer</option>
        <option value="backend-developer">Backend Developer</option>
        <option value="fullstack-developer">Fullstack Developer</option>
        <option value="ui-ux-designer">UI/UX Designer</option>
      </select>
    </div>
  );
}

export default Select;
