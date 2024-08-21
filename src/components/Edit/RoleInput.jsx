import PropTypes from "prop-types";
import Status from "./Status";
import Role from "./Role";
import { useState } from "react";

const RoleInput = ({ className = "", role, status, setRole, setStatus }) => {
  const [icon, setIcon] = useState(true);
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full text-left text-sm text-neutral-neutral-900 font-text-sm-semibold ${className}`}
    >
      <div className="flex-1 flex flex-row flex-wrap items-start justify-start py-0 pl-0 pr-0.5 box-border gap-x-3 gap-y-[26px] max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[7px] min-w-[125px]">
          <div className="self-stretch relative leading-[17px] font-semibold">
            Role
          </div>

          <div
            className={`self-stretch rounded bg-base-white overflow-hidden flex flex-row items-start justify-start gap-[110px] text-left text-base text-neutral-neutral-700 font-text-sm-semibold mq450:gap-[55px]`}
          >
            <div className="h-12 flex-1 relative">
              <div className="absolute top-[0px] left-[0px] rounded bg-base-white border-neutral-neutral-300 border-[1px] border-solid box-border w-full h-full" />
              <div className="absolute top-[48px] left-[0px] border-neutral-neutral-600 border-t-[1px] border-solid box-border w-[313px] h-px" />
              <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-primary h-[1.2px] hidden" />
              <div className="absolute top-[1px] left-[12px] flex flex-row items-start justify-start py-[13px] px-0 gap-2.5 z-[1]">
                {!icon && (
                  <img
                    className="h-6 w-6 relative"
                    alt=""
                    src="/placeholder.svg"
                  />
                )}
                <div className="relative leading-[125%] inline-block min-w-[48px]">
                  <Status status={status} setStatus={setStatus} />
                </div>
              </div>
              {icon && (
                <img
                  className="absolute top-[12px] left-[282px] w-6 h-6 overflow-hidden z-[1]"
                  alt=""
                  src="/icon-end-1-medium.svg"
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[7px] min-w-[125px]">
          <div className="self-stretch relative leading-[17px] font-semibold">
            Status
          </div>
          <div
            className={`self-stretch rounded bg-base-white overflow-hidden flex flex-row items-start justify-start gap-[110px] text-left text-base text-neutral-neutral-700 font-text-sm-semibold mq450:gap-[55px] `}
          >
            <div className="h-12 flex-1 relative">
              <div className="absolute top-[0px] left-[0px] rounded bg-base-white border-neutral-neutral-300 border-[1px] border-solid box-border w-full h-full" />
              <div className="absolute top-[48px] left-[0px] border-neutral-neutral-600 border-t-[1px] border-solid box-border w-[313px] h-px" />
              <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-primary h-[1.2px] hidden" />
              <div className="absolute top-[1px] left-[12px] flex flex-row items-start justify-start py-[13px] px-0 gap-2.5 z-[1]">
                {icon && (
                  <img
                    className="h-6 w-6 relative"
                    alt=""
                    src="/placeholder.svg"
                  />
                )}
                <div className="relative leading-[125%] inline-block min-w-[48px]">
                  <Role role={role} setRole={setRole} />
                </div>
              </div>
              {icon && (
                <img
                  className="absolute top-[12px] left-[282px] w-6 h-6 overflow-hidden z-[1]"
                  alt=""
                  src="/icon-end-1-medium.svg"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

RoleInput.propTypes = {
  className: PropTypes.string,
};

export default RoleInput;
