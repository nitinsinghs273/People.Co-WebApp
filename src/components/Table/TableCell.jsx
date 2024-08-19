import { useState, useMemo, useCallback } from "react";
import Edit from "../Edit";
import PortalPopup from "../PortalPopup";
import PropTypes from "prop-types";
import { deleteUser } from "../../Slices/DataSlices";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DeleteDialog from "../Dialog/DeleteDialog";

const TableCell = ({ data, className = "", propBackgroundColor }) => {
  const [isEditOpen, setEditOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCellClick = (id) => {
    navigate(`/detail/${id}`);
  };

  const tableCellStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
    setIsDelete(false);
  };

  const openEdit = useCallback(() => {
    setEditOpen(true);
  }, []);

  const closeEdit = useCallback(() => {
    setEditOpen(false);
  }, []);
  const OpenDelete = useCallback(() => {
    setIsDelete(true);
  }, []);
  const CloseDelete = useCallback(() => {
    setIsDelete(false);
  }, []);

  return (
    <>
      <div
        className={`flex flex-row items-center justify-between w-full border-l-0 border-r-0 border-b-[1px] border-t-0 border-gray-200 border-solid ${className}`}
        style={tableCellStyle}
      >
        <section
          className="flex items-center justify-start pl-4 gap-3"
          style={{ width: "20%" }}
          onClick={() => handleCellClick(data.id)}
        >
          <div
            className="h-10 w-10 rounded-full bg-gray-300 bg-cover"
            style={{ backgroundImage: "url('/avatar9@3x.png')" }}
          />
          <div className="text-gray-600 min-w-[48px]" style={{ width: "80%" }}>
            <div className="font-medium">{data.name}</div>
            <div className="text-gray-600">{data.username}</div>
          </div>
        </section>

        <div
          className="text-gray-600 flex items-center justify-start gap-3"
          style={{ width: "10%" }}
        >
          <div className="self-stretch flex flex-row items-center justify-start pt-[25px] pb-[23px]">
            <div className="flex-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-md flex flex-row items-center justify-start gap-1 p-1">
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

        <div
          className="text-gray-600 flex justify-start items-center"
          style={{ width: "10%" }}
        >
          {data.role}
        </div>

        <div
          className="text-gray-600 flex items-center"
          style={{ width: "20%" }}
        >
          {data.email}
        </div>

        <div
          className="text-gray-600 flex items-center"
          style={{ width: "20%" }}
        >
          {data.teams.slice(0, 3).map((item, key) => (
            <div
              key={key}
              className={`rounded-2xl border-[1px] border-solid box-border shrink-0 flex items-center justify-start p-1 mr-2 whitespace-nowrap gap-2 ${
                key % 3 === 0
                  ? "bg-indigo-50 border-indigo-200 text-indigo-700"
                  : key % 3 === 1
                  ? "bg-blue-50 border-blue-200 text-blue-700"
                  : "bg-green-50 border-green-200 text-green-700"
              }`}
            >
              <div className="relative leading-[18px] font-medium inline-block">
                {item}
              </div>
            </div>
          ))}

          {/* Handling remaining items count */}
          {data.teams.length > 3 && (
            <div className="rounded-2xl bg-red-50 border-red-200 border-[1px] border-solid box-border shrink-0 flex items-center justify-start p-1 text-red-700">
              <div className="relative leading-[18px] font-medium inline-block">
                +{data.teams.length - 3}
              </div>
            </div>
          )}
        </div>

        <div
          className="flex flex-row items-center justify-center gap-2"
          style={{ width: "10%" }}
        >
          <div className="p-2.5 cursor-pointer">
            <img
              className="h-5 w-5"
              alt="Trash"
              src="/trash01.svg"
              onClick={OpenDelete}
            />
          </div>
          <div className="p-2.5 cursor-pointer" onClick={openEdit}>
            <img className="h-5 w-5" alt="Edit" src="/edit01.svg" />
          </div>
        </div>
      </div>
      {isEditOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeEdit}
        >
          <Edit onClose={closeEdit} user={data} />
        </PortalPopup>
      )}
      {isDelete && (
        <PortalPopup
          overlayColor="rgba(239, 237, 237, .89)"
          placement="Centered"
          onOutsideClick={CloseDelete}
        >
          <DeleteDialog
            setIsDelete={setIsDelete}
            data={data}
            handleDeleteUser={handleDeleteUser}
          />
        </PortalPopup>
      )}
    </>
  );
};

TableCell.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
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

export default TableCell;
