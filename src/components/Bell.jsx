import PropTypes from "prop-types";

const Bell = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-start justify-start text-center text-2xs text-base-white font-bold-11 ${className}`}
    >
      <img
        className="h-5 w-5 relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src="../../../public/iconoutlinebell.svg"
      />
      <div className="h-[18px] w-[14.2px] relative hidden">
        <div className="absolute h-[78.89%] w-full top-[4.44%] right-[0%] bottom-[16.67%] left-[0%] rounded-[50%] bg-indigo-600" />
        <b className="absolute top-[0%] left-[22.54%] leading-[18px]">6</b>
      </div>
    </div>
  );
};

Bell.propTypes = {
  className: PropTypes.string,
};

export default Bell;
