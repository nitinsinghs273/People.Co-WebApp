import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-center justify-between w-full border-0 ${className}`}
    >
      <div className="flex items-center pl-4 gap-3 w-1/4 sm:w-1/5">
        <span className="font-medium text-gray-700">Name</span>
      </div>
      <div className="flex items-center gap-3 w-1/6 sm:w-1/10">
        <span className="font-medium text-gray-700">Status</span>
      </div>
      <div className="flex items-center w-1/6 sm:w-1/10">
        <span className="font-medium text-gray-700">Role</span>
      </div>
      <div className="flex items-center w-1/4 sm:w-1/5">
        <span className="font-medium text-gray-700">Email</span>
      </div>
      <div className="flex items-center w-1/4 sm:w-1/5">
        <span className="font-medium text-gray-700">Teams</span>
      </div>
      <div className="flex items-center justify-center gap-2 w-1/6 sm:w-1/10"></div>
    </div>
  );
};

TableHeader.propTypes = {
  className: PropTypes.string,
};

export default TableHeader;
