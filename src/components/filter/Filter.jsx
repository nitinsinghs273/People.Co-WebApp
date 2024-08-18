import { memo, useState } from "react";
import Checkbox from "./Checkbox";
import Button from "./Button";
import PropTypes from "prop-types";

const Filter = memo(({ className = "", onClose }) => {
  const [roleHidden, setRoleHidden] = useState(false);
  const [teamHidden, setTeamHidden] = useState(false);

  const toggleRoleHidden = () => {
    setRoleHidden(!roleHidden);
    setTeamHidden(false);
  };
  const toggleTeamHidden = () => {
    setTeamHidden(!teamHidden);
    setRoleHidden(false);
  };

  return (
    <div
      className={` relative shadow-[0px_4px_12px_rgba(0,_0,_0,_0.1)] rounded-medium bg-primary-primary-50 border-primary-primary-100 border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start pt-2.5 px-0 pb-0 gap-[12.4px] leading-[normal] tracking-[normal] max-w-full max-h-full text-left text-base text-neutral-neutral-900 font-buttons-cta-text ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-3 gap-2">
        <div className="self-stretch flex flex-row items-center justify-between">
          <span className="font-semibold">Filters</span>
          <img
            className="w-4 h-4 cursor-pointer"
            alt="Close"
            src="../../../public/frame.svg"
            onClick={onClose}
          />
        </div>
        <hr className="self-stretch h-[0.2px] border border-solid border-gray-300" />

        <div className="self-stretch flex flex-col gap-4">
          {/* Role Section */}
          <div>
            <div
              className="flex flex-row items-center justify-between cursor-pointer"
              onClick={toggleRoleHidden}
            >
              <div className="flex flex-row items-center gap-2">
                <Checkbox />
                <span>Roles</span>
              </div>
              <img
                className={`h-4 w-4 transform transition-transform ${
                  roleHidden ? "rotate-180" : ""
                }`}
                src="../../../public/icons--lucide@2x.png"
                alt="Toggle"
              />
            </div>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                roleHidden ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="mt-2 flex flex-col gap-2 pl-7">
                <div className="flex items-center gap-2">
                  <Checkbox />
                  <span>Product Designer</span>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox />
                  <span>Product Manager</span>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox />
                  <span>Frontend Developer</span>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox />
                  <span>Backend Developer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div>
            <div
              className="flex flex-row items-center justify-between cursor-pointer"
              onClick={toggleTeamHidden}
            >
              <div className="flex flex-row items-center gap-2">
                <Checkbox />
                <span>Teams</span>
              </div>
              <img
                className={`h-4 w-4 transform transition-transform ${
                  teamHidden ? "rotate-180" : ""
                }`}
                src="../../../public/icons--lucide-1@2x.png"
                alt="Toggle"
              />
            </div>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                teamHidden ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="mt-2 flex flex-col gap-2 pl-7">
                <div className="flex items-center gap-2">
                  <Checkbox />
                  <span>Marketing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox />
                  <span>Product</span>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox />
                  <span>Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Button
        text="SELECT"
        propBorder="none"
        propBackgroundColor="#f1f5f9"
        propFlex="unset"
        propColor="#cbd5e1"
        propMinWidth="58px"
        buttonPadding="8px 80px"
        frameDivPadding="0px 1px"
      />
    </div>
  );
});

Filter.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default Filter;
