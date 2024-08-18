import { useMemo } from "react";
import PropTypes from "prop-types";

const Input = ({
  className = "",
  iconEnd = true,

  text = "Active",
  iconStart = false,
  propDisplay,
  propMinWidth,
  children,
}) => {
  const textHereStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div
      className={`self-stretch rounded bg-base-white overflow-hidden flex flex-row items-start justify-start gap-[110px] text-left text-base text-neutral-neutral-700 font-text-sm-semibold mq450:gap-[55px] ${className}`}
    >
      <div className="h-12 flex-1 relative">
        <div className="absolute top-[0px] left-[0px] rounded bg-base-white border-neutral-neutral-300 border-[1px] border-solid box-border w-full h-full" />
        <div className="absolute top-[48px] left-[0px] border-neutral-neutral-600 border-t-[1px] border-solid box-border w-[313px] h-px" />
        <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-primary h-[1.2px] hidden" />
        <div className="absolute top-[1px] left-[12px] flex flex-row items-start justify-start py-[13px] px-0 gap-2.5 z-[1]">
          {iconStart && (
            <img
              className="h-6 w-6 relative"
              alt=""
              src="../../../public/placeholder.svg"
            />
          )}
          <div
            className="relative leading-[125%] inline-block min-w-[48px]"
            style={textHereStyle}
          >
            {children}
          </div>
        </div>
        {iconEnd && (
          <img
            className="absolute top-[12px] left-[282px] w-6 h-6 overflow-hidden z-[1]"
            alt=""
            src="../../../public/icon-end-1-medium.svg"
          />
        )}
      </div>
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  iconEnd: PropTypes.bool,
  text: PropTypes.string,
  iconStart: PropTypes.bool,

  /** Style props */
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Input;
