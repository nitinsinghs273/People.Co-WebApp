import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-center justify-between w-full border-l-0 border-r-0  border-b-[1px] border-t-0  border-gray-200 border-solid  p-3 ${className}`}
    >
      <div className="flex items-center justify-center pl-4 gap-3 w-1/4 sm:w-1/5">
        <span className="font-medium text-gray-700">Name</span>
      </div>
      <div className="flex items-center justify-center gap-3 w-1/6 sm:w-1/10">
        <span className="font-medium text-gray-700">Status</span>
      </div>
    </div>
  );
};

TableHeader.propTypes = {
  className: PropTypes.string,
};

export default TableHeader;
