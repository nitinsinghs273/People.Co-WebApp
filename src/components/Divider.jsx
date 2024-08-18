import PropTypes from "prop-types";

const Divider = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-0 flex flex-row items-start justify-start max-w-full ${className}`}
    >
      <div className="h-0 flex-1 relative border-neutral-neutral-200 border-t-[1px] border-solid box-border max-w-full" />
    </div>
  );
};

Divider.propTypes = {
  className: PropTypes.string,
};

export default Divider;
