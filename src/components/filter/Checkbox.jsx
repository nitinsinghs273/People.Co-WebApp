import { memo } from "react";
import PropTypes from "prop-types";

const Checkbox = memo(({ className = "", isChecked, onChange }) => {
  return (
    <div
      className={`self-stretch w-[31px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-1 text-left text-sm text-colors-grey-black font-text-sm-semibold ${className}`}
    >
      <div className="flex flex-row items-start justify-start p-2">
        <input
          className="m-0 h-4 w-4 relative rounded-sm border-neutral-neutral-700 border-[1px] border-solid box-border"
          type="checkbox"
          onChange={onChange}
          checked={isChecked}
        />
      </div>
      <div className="self-stretch w-12 flex flex-row items-center justify-center py-1.5 pl-0 pr-3 box-border shrink-0">
        <div className="self-stretch flex-1 flex flex-row items-end justify-start gap-1">
          <div className="self-stretch flex-1 relative leading-[20px]">
            Label
          </div>
          <div className="self-stretch w-1.5 relative leading-[20px] font-web-body-1 text-status-danger-foreground-3-rest hidden">
            *
          </div>
        </div>
      </div>
    </div>
  );
});

Checkbox.propTypes = {
  className: PropTypes.string,
};

export default Checkbox;
