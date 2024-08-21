import PropTypes from "prop-types";

const TeamName = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-1 max-w-full text-left text-base text-neutral-neutral-700 font-text-sm-semibold ${className}`}
    >
      <div className="w-[243px] relative leading-[125%] inline-block whitespace-nowrap">
        Teams
      </div>
    </div>
  );
};

TeamName.propTypes = {
  className: PropTypes.string,
};

export default TeamName;
