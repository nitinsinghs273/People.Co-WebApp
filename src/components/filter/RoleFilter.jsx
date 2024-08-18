import { memo } from "react";
import Checkbox from "./Checkbox";
import Button from "./Button";
import PropTypes from "prop-types";

const Filter = memo(({ className = "" }) => {
  return (
    <div
      className={`shadow-[0px_4px_12px_rgba(0,_0,_0,_0.1)] rounded-medium bg-primary-primary-50 border-primary-primary-100 border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start pt-2.5 px-0 pb-0 gap-3.5 leading-[normal] tracking-[normal] text-left text-base text-neutral-neutral-900 font-buttons-cta-text ${className}`}
    >
      <div className="self-stretch h-[228px] flex flex-row items-start justify-start py-0 pl-3 pr-[15px] box-border">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4.9px]">
          <div className="self-stretch flex flex-col items-start justify-start py-0 pl-0 pr-0.5 gap-2">
            <div className="self-stretch flex flex-row items-start justify-between gap-5">
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[46px]">
                Filters
              </a>
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <img
                  className="w-4 h-4 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/frame.svg"
                />
              </div>
            </div>
            <img
              className="self-stretch h-[0.2px] relative max-w-full overflow-hidden shrink-0 object-contain"
              loading="lazy"
              alt=""
              src="/line-1.svg"
            />
          </div>
          <div className="self-stretch flex-1 flex flex-col items-start justify-start text-sm text-colors-grey-black font-text-sm-regular">
            <div className="self-stretch h-8 flex flex-row items-center justify-between gap-5">
              <div className="self-stretch flex flex-row items-center justify-start gap-1">
                <div className="self-stretch w-[31px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-1">
                  <div className="flex flex-row items-start justify-start p-2">
                    <img
                      className="h-4 w-4 relative rounded-sm"
                      alt=""
                      src="/icon.svg"
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
                <a className="[text-decoration:none] relative text-base font-buttons-cta-text text-neutral-neutral-800 inline-block min-w-[40px]">
                  Roles
                </a>
              </div>
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 object-contain"
                alt=""
                src="/icons--lucide@2x.png"
              />
            </div>
            <div className="flex-1 flex flex-row items-start justify-start py-0 px-[29px] text-gray-600">
              <div className="self-stretch w-[118px] flex flex-col items-start justify-start py-0 px-0 box-border">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="flex-1 flex flex-row items-center justify-start py-0 pl-0 pr-4">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[3px]">
                      <Checkbox />
                      <div className="relative leading-[20px] inline-block min-w-[116px]">
                        Product Designer
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-row items-center justify-start py-0 pl-0 pr-4">
                    <div className="self-stretch flex flex-row items-center justify-start gap-1">
                      <Checkbox />
                      <div className="relative leading-[20px] inline-block min-w-[115px]">
                        Product Manager
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="self-stretch flex flex-row items-center justify-start gap-1">
                      <Checkbox />
                      <div className="relative leading-[20px] whitespace-nowrap">
                        Frontend Developer
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-row items-center justify-start py-0 pl-0 pr-0.5">
                    <div className="self-stretch flex flex-row items-center justify-start gap-1">
                      <Checkbox />
                      <div className="relative leading-[20px] inline-block min-w-[129px] whitespace-nowrap">
                        Backend Developer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-8 flex flex-col items-start justify-start text-neutral-neutral-800">
            <div className="self-stretch flex-1 flex flex-row items-center justify-between gap-5">
              <div className="self-stretch flex flex-row items-center justify-start gap-1">
                <Checkbox />
                <div className="relative inline-block min-w-[47px]">Teams</div>
              </div>
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 object-contain"
                alt=""
                src="/icons--lucide-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <Button
        text="SELECT"
        propBorder="none"
        propBackgroundColor="#6941c6"
        propFlex="unset"
        propColor="#fff"
        propMinWidth="58px"
        buttonPadding="8px 80px"
        frameDivPadding="0px 1px"
      />
    </div>
  );
});

FilterDefault.propTypes = {
  className: PropTypes.string,
};

export default FilterDefault;
