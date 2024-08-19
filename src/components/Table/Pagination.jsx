import PropTypes from "prop-types";

const Pagination = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch border-l-0 border-r-0  border-b-[1px] border-t-0  border-gray-200 border-solid box-border flex flex-row flex-wrap items-start justify-center pt-3 px-6 pb-4 gap-0.5 max-w-full text-center text-sm text-gray-600 font-text-sm-semibold ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-center gap-3 min-w-[434px] max-w-full mq675:flex-wrap mq675:min-w-full">
        <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[263px] max-w-full">
          <div className="self-stretch flex flex-row items-center justify-start">
            <button className="cursor-pointer border-gray-300 border-[1px] border-solid py-1.5 px-[11px] bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg overflow-hidden flex flex-row items-center justify-center gap-1">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                alt=""
                src="/arrowleft.svg"
              />
              <div className="flex flex-row items-center justify-center py-0 px-0.5">
                <div className="relative text-sm leading-[20px] font-semibold font-text-sm-semibold text-gray-700 text-left inline-block min-w-[59px]">
                  Previous
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="w-[250px] flex flex-row items-start justify-start gap-0.5">
          <div className="flex-1 rounded-lg bg-gray-50 overflow-hidden flex flex-row items-start justify-start text-gray-800">
            <div className="flex-1 rounded-lg flex flex-row items-start justify-start py-2.5 px-4">
              <div className="w-[7px] relative leading-[20px] font-medium inline-block min-w-[7px]">
                1
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-lg overflow-hidden flex flex-row items-start justify-start">
            <div className="flex-1 rounded-lg flex flex-row items-start justify-start py-2.5 px-[15px]">
              <div className="relative leading-[20px] font-medium inline-block min-w-[9px]">
                2
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden flex flex-row items-start justify-start">
            <div className="rounded-lg flex flex-row items-start justify-start py-2.5 px-[15px]">
              <div className="w-2.5 relative leading-[20px] font-medium inline-block min-w-[10px]">
                3
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-lg overflow-hidden flex flex-row items-start justify-start">
            <div className="flex-1 rounded-lg flex flex-row items-start justify-start py-2.5 px-[13px]">
              <div className="relative leading-[20px] font-medium inline-block min-w-[13px]">
                ...
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-lg overflow-hidden flex flex-row items-start justify-start">
            <div className="flex-1 rounded-lg flex flex-row items-start justify-start py-2.5 px-[15px]">
              <div className="relative leading-[20px] font-medium inline-block min-w-[9px]">
                8
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-lg overflow-hidden flex flex-row items-start justify-start">
            <div className="flex-1 rounded-lg flex flex-row items-start justify-start py-2.5 px-[15px]">
              <div className="relative leading-[20px] font-medium inline-block min-w-[9px]">
                9
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[457.5px] flex flex-row items-start justify-center gap-3 max-w-full mq450:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[263px] max-w-full">
          <div className="self-stretch flex flex-row items-center justify-end">
            <button className="cursor-pointer border-gray-300 border-[1px] border-solid py-1.5 px-[11px] bg-base-white w-[84px] shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg box-border overflow-hidden shrink-0 flex flex-row items-center justify-center gap-1">
              <div className="flex flex-row items-center justify-center py-0 px-0.5">
                <div className="relative text-sm leading-[20px] font-semibold font-text-sm-semibold text-gray-700 text-left inline-block min-w-[32px]">
                  Next
                </div>
              </div>
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                alt=""
                src="/arrowright.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  className: PropTypes.string,
};

export default Pagination;
