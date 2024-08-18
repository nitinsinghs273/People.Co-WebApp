import TableHeader from "./TableHeader";
import PropTypes from "prop-types";

const TableHeaderCell = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-base-white border-l-0 border-r-0 border-b-1 border-t-0 border-b-[1px] border-gray-200 border-solid w-full flex flex-row items-center justify-start pt-[13px] px-6 pb-[11px] ${className}`}
    >
      <TableHeader />
    </div>
  );
};

TableHeaderCell.propTypes = {
  className: PropTypes.string,
};

export default TableHeaderCell;
