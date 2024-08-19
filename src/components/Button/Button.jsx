import { useMemo } from "react";
import PropTypes from "prop-types";

const Button = ({
  className = "",
  text = "Save",
  propBorder,
  propBackgroundColor,
  propFlex,
  propColor,
  propMinWidth,
  onHandleSelect,
}) => {
  const buttonStyle = useMemo(() => {
    return {
      border: propBorder,
      backgroundColor: propBackgroundColor,
      flex: propFlex,
    };
  }, [propBorder, propBackgroundColor, propFlex]);

  const textStyle = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth,
    };
  }, [propColor, propMinWidth]);

  return (
    <button
      className={`cursor-pointer [border:none] py-[11.5px] px-[11px] bg-neutral-neutral-100 rounded-medium overflow-hidden flex flex-row items-center justify-center ${className}`}
      style={buttonStyle}
      onClick={onHandleSelect}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-center">
          <b
            className="relative text-base tracking-[0.08em] leading-[120%] uppercase inline-block font-buttons-cta-text text-neutral-neutral-300 text-left min-w-[47px]"
            style={textStyle}
          >
            {text}
          </b>
        </div>
      </div>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,

  /** Style props */
  propBorder: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propFlex: PropTypes.any,
  propColor: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Button;
