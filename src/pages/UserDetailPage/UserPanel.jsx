import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Details from "./Details";

import PropTypes from "prop-types";

const UserPanel = memo(({ className = "" }) => {
  const navigate = useNavigate();

  const onIconsLucideClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      className={`flex-1 rounded-2xl bg-primary-primary-50 border-neutral-neutral-300 border-[1px] border-solid box-border flex flex-col items-start justify-start pt-0 px-0 pb-[104px] gap-px min-w-[443px] max-w-full text-left text-xl text-primary-primary-50 font-text-sm-semibold mq750:min-w-full mq450:pb-11 mq450:box-border mq1025:pb-[68px] mq1025:box-border ${className}`}
    >
      <div className="self-stretch h-[888px] relative rounded-2xl bg-primary-primary-50 border-neutral-neutral-300 border-[1px] border-solid box-border hidden" />
      <div className="self-stretch shadow-[0px_-5px_10px_rgba(10,_10,_10,_0.2)_inset] rounded-t-lg rounded-b-none bg-secondary-secondary-700 flex flex-row items-start justify-between pt-[15px] pb-5 pl-6 pr-4 box-border max-w-full gap-5 z-[1]">
        <div className="h-[141px] w-[680px] relative shadow-[0px_-5px_10px_rgba(10,_10,_10,_0.2)_inset] rounded-t-x-large rounded-b-none bg-secondary-secondary-700 hidden max-w-full" />
        <div className="w-[325px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border max-w-[calc(100%_-_44px)]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[37px] mq450:flex-wrap mq450:gap-[18px]">
            <div className="h-[100px] w-[100px] rounded-181xl flex flex-row items-start justify-start bg-[url('/public/avatar10@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[100px] z-[1] mq450:flex-1">
              <div className="h-[100px] w-[100px] relative rounded-181xl border-miscellaneous-floating-tab-text-unselected border-[0.8px] border-solid box-border overflow-hidden shrink-0 opacity-[0.08]" />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[11.5px] px-0 pb-0 box-border min-w-[122px]">
              <div className="self-stretch flex flex-col items-start justify-start relative gap-3 z-[1]">
                <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[109px] mq450:text-base">
                  Olivia Rhye
                </a>
                <div className="flex flex-row items-start justify-start gap-6 text-sm">
                  <div className="flex flex-col items-start justify-end gap-1.5">
                    <div className="relative leading-[18px] inline-block min-w-[48px]">
                      @olivia
                    </div>
                    <div className="relative font-medium inline-block min-w-[49px] whitespace-nowrap">
                      User ID
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-end gap-1.5">
                    <div className="relative leading-[125%] inline-block min-w-[115px] whitespace-nowrap">
                      Product Designer
                    </div>
                    <div className="relative font-medium inline-block min-w-[30px]">
                      Role
                    </div>
                  </div>
                </div>
                <div className="w-px h-[34px] absolute !m-[0] bottom-[4.5px] left-[60px] border-base-white border-r-[1px] border-solid box-border z-[2]" />
              </div>
            </div>
          </div>
        </div>
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 cursor-pointer z-[1]"
          loading="lazy"
          alt=""
          src="../../../public/icons--lucide.svg"
          onClick={onIconsLucideClick}
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-1.5 box-border max-w-full text-sm text-gray-900">
        <Details />
      </div>
    </div>
  );
});

UserPanel.propTypes = {
  className: PropTypes.string,
};

export default UserPanel;
