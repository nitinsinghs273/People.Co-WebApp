import { memo } from "react";
import PropTypes from "prop-types";

const FrameComponent3 = memo(({ className = "", frame15206Placeholder }) => {
  return (
    <input
      className={`w-full [border:none] [outline:none] bg-secondary-secondary-100 self-stretch h-[42px] rounded-medium1 flex flex-row items-center justify-start py-[11.5px] px-2.5 box-border font-text-sm-semibold font-semibold text-base text-neutral-neutral-700 min-w-[250px] ${className}`}
      placeholder={frame15206Placeholder}
      type="text"
    />
  );
});

FrameComponent3.propTypes = {
  className: PropTypes.string,
  frame15206Placeholder: PropTypes.string,
};

export default FrameComponent3;
