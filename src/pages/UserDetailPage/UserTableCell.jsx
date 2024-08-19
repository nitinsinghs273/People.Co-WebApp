import { useMemo } from "react";

import PropTypes from "prop-types";

import { useNavigate } from "react-router-dom";

const UserTableCell = ({ data, className = "", propBackgroundColor }) => {
  const navigate = useNavigate();

  const handleCellClick = (id) => {
    navigate(`/detail/${id}`);
  };

  const tableCellStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <>
      <div
        className={`flex flex-row items-center justify-between w-full border-l-0 border-r-0  border-b-[1px] border-t-0  border-gray-200 border-solid  ${className}`}
        onClick={() => handleCellClick(data.id)}
        style={tableCellStyle}
      >
        <div className="flex items-center justify-start pl-4 gap-3">
          <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
            <input className="m-0 w-5 h-5" type="checkbox" />
          </div>
          <div
            className="h-10 w-10 rounded-full bg-gray-300 bg-cover"
            style={{ backgroundImage: "url('/avatar9@3x.png')" }}
          />

          <div className="text-gray-600 min-w-[48px]">
            <div className="font-medium">{data.name}</div>
            <div className="text-gray-600">{data.username}</div>
          </div>
        </div>

        <div className="text-gray-600 flex items-center justify-start  gap-3">
          <div className="self-stretch flex flex-row items-center justify-start pt-[25px] px-6 pb-[23px]">
            <div className="flex-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-md bg-base-white border-gray-300 border-[1px] border-solid flex flex-row items-center justify-start gap-1">
              <img
                className="h-2 w-2 relative"
                loading="lazy"
                alt=""
                src="/-dot.svg"
              />
              <div className="relative leading-[18px] font-medium inline-block min-w-[37px]">
                {data.status}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

UserTableCell.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    teams: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  className: PropTypes.string,
  propBackgroundColor: PropTypes.string,
};

export default UserTableCell;
