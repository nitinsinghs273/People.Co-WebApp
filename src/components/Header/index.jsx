import Bell from "../Bell";
import Divider from "../Divider";
import PropTypes from "prop-types";

const Header = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch flex flex-col items-end justify-start gap-[21px] max-w-full text-left text-19xl text-brand-700 font-text-sm-semibold ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[29px] pr-7 box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq450:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <h1 className="m-0 relative text-inherit leading-[48px] font-bold font-[inherit]">
              PEOPLE.CO
            </h1>
          </div>
          <div className="flex flex-row items-start justify-start gap-2 text-center text-2xs text-base-white font-bold-11">
            <div className="rounded-medium1 overflow-hidden flex flex-row items-start justify-start p-2">
              <div className="flex flex-row items-start justify-start">
                <Bell />
              </div>
            </div>
            <img
              className="h-9 w-9 relative rounded-[50%] object-cover min-h-[36px]"
              loading="lazy"
              alt=""
              src="/public/ellipse-211@2x.png"
            />
            <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0 text-base text-neutral-neutral-900 font-text-sm-semibold">
              <div className="relative leading-[125%] inline-block min-w-[72px]">
                Jane Doe
              </div>
            </div>
          </div>
        </div>
      </div>
      <Divider />
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
