import { useState, useMemo, useCallback } from "react";
import Edit from "../Edit";
import PortalPopup from "../PortalPopup";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../Slices/DataSlices";
import Filter from "../filter/Filter";
import { useNavigate } from "react-router-dom";

const PaginationWrapper = ({
  className = "",
  propTextDecoration,
  Number_of_data,
  nosearch,
}) => {
  const [isEditOpen, setEditOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  //Queries
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdding = () => {
    navigate(`/addmember`);
  };

  const handleChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };
  const handleFilterPopup = (e) => {
    setHidden((isHidden) => !isHidden);
  };

  const badgeContentStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  const openEdit = useCallback(() => {
    setEditOpen(true);
  }, []);

  const closeEdit = useCallback(() => {
    setEditOpen(false);
  }, []);

  return (
    <>
      <div
        className={`self-stretch flex flex-row items-start justify-start max-w-full  text-left text-lg text-gray-900 font-text-sm-semibold border-gray-200 border-l-0 border-r-0  border-b-[1px] border-t-0 border-solid ${className}`}
      >
        <div className="flex-1 bg-base-white flex flex-col items-start justify-start relative max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-5 px-6 gap-4">
            <div className="flex flex-col items-start justify-center">
              <div className="flex flex-row items-center justify-start gap-2">
                <a className="[text-decoration:none] relative leading-[28px] font-semibold text-[inherit]">
                  Team members
                </a>
                <div className="w-[82px] rounded-2xl bg-brand-50 border-gray-200 border-[1px] border-solid box-border flex flex-row items-center justify-start py-0 px-[7px] whitespace-nowrap text-center text-sm text-brand-700">
                  <div
                    className="w-[66px] relative leading-[20px] font-medium inline-block min-w-[66px]"
                    style={badgeContentStyle}
                  >
                    {Number_of_data} users
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden flex-col items-start justify-start">
              <img
                className="w-5 h-5 relative overflow-hidden shrink-0"
                alt=""
                src="/dotsvertical.svg"
              />
            </div>
          </div>

          {nosearch && (
            <div>
              <div className="w-[312px] h-9 !m-[0] absolute top-[15px] right-[209px] rounded bg-primary-primary-50 border-neutral-neutral-300 border-[1px] border-solid box-border flex flex-col items-end justify-start py-1.5 px-0 gap-1.5 z-[3]">
                <div className="self-stretch h-9 relative rounded bg-primary-primary-50 border-neutral-neutral-300 border-[1px] border-solid box-border hidden" />
                <div className="self-stretch flex flex-row items-start justify-end py-0 pl-4 pr-1.5">
                  <div className="flex-1 flex flex-row items-start justify-between gap-5">
                    <input
                      className="w-full [border:none] [outline:none] bg-[transparent] h-[21px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border font-text-sm-semibold text-base text-lightslategray"
                      placeholder="Search"
                      type="text"
                      onChange={handleChange}
                    />
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[1]"
                      alt=""
                      src="/search.svg"
                    />
                  </div>
                </div>
                <div className="w-6 h-6 relative hidden" />
                <div className="self-stretch h-px relative border-neutral-neutral-600 border-l-0 border-r-0  border-t-[1px] border-b-0   border-solid box-border" />
              </div>
              <div className="!m-[0] absolute top-[15px] right-[165px] flex flex-col items-start justify-start p-2.5 z-[3]">
                <img
                  className="w-5 h-[18px] relative"
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                  onClick={handleFilterPopup}
                />
                {hidden && (
                  <div className="absolute top-[15px] right-[165px]">
                    <PortalPopup
                      overlayColor="rgba(113, 113, 113, 0.3)"
                      onOutsideClick={handleFilterPopup}
                      placement="Centered"
                    >
                      {" "}
                      <Filter onClose={handleFilterPopup} />
                    </PortalPopup>
                  </div>
                )}
              </div>

              <button
                className="cursor-pointer [border:none] p-2 bg-brand-700 !m-[0] absolute top-[15px] right-[11px] rounded-medium overflow-hidden flex flex-row items-center justify-center z-[3]"
                onClick={handleAdding}
              >
                <div className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center gap-[7px]">
                  <img
                    className="h-5 w-5 relative min-h-[20px]"
                    alt=""
                    src="/icon.svg"
                  />
                  <div className="flex flex-row items-center justify-center">
                    <a className="relative text-sm tracking-[0.08em] leading-[120%] uppercase inline-block font-text-sm-semibold text-base-white text-left min-w-[107px]">
                      Add Member
                    </a>
                  </div>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
      {isEditOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeEdit}
        >
          <Edit onClose={closeEdit} />
        </PortalPopup>
      )}
    </>
  );
};

PaginationWrapper.propTypes = {
  className: PropTypes.string,
  divider: PropTypes.string,

  /** Style props */
  propTextDecoration: PropTypes.any,
};

export default PaginationWrapper;
