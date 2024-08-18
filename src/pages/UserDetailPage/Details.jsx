import { memo } from "react";
import PropTypes from "prop-types";

const Component = memo(({ className = "" }) => {
  return (
    <div
      className={`w-full rounded-x-large max-w-full overflow-y-auto flex flex-col items-center justify-start pt-0 px-0 pb-[77px] leading-[normal] tracking-[normal] ${className}`}
    >
      <section className="self-stretch rounded-lg overflow-hidden shrink-0 flex flex-col items-start justify-start max-w-full text-left text-sm text-gray-900 font-desktop-caption-caption-1">
        <div className="self-stretch rounded-lg bg-base-white flex flex-col items-start justify-start pt-2.5 px-2.5 pb-5 box-border gap-2.5 max-w-full">
          <input
            className="w-full [border:none] [outline:none] bg-secondary-secondary-100 self-stretch h-[42px] rounded-medium1 flex flex-row items-center justify-start py-[11.5px] px-[9px]  font-desktop-caption-caption-1 font-semibold text-base text-neutral-neutral-700 min-w-[250px]"
            placeholder="Personal Information"
            type="text"
          />
          <div className="self-stretch rounded-lg flex flex-col items-start justify-start">
            <div className="self-stretch border-neutral-neutral-100 border-b-[1px] border-solid flex flex-row flex-wrap items-end justify-start pt-3 pb-2.5 pl-3 pr-[357px] gap-[38px] mq450:gap-[19px] mq450:pr-5 mq450:box-border">
              <div className="flex-1 relative leading-[20px] font-medium inline-block min-w-[66px]">
                Date of Birth
              </div>
              <div className="relative text-base leading-[125%] text-neutral-neutral-500 inline-block min-w-[94px]">
                29-04-2005
              </div>
            </div>
            <div className="self-stretch border-neutral-neutral-100 border-b-[1px] border-solid flex flex-row flex-wrap items-end justify-start pt-3 pb-2.5 pl-3 pr-[396px] gap-[38px] mq450:gap-[19px] mq450:pr-5 mq450:box-border">
              <div className="flex-1 relative leading-[20px] font-medium inline-block min-w-[39px]">
                Gender
              </div>
              <div className="relative text-base leading-[125%] text-neutral-neutral-500 inline-block min-w-[55px]">
                Female
              </div>
            </div>
            <div className="self-stretch border-neutral-neutral-100 border-b-[1px] border-solid flex flex-row flex-wrap items-end justify-start pt-3 pb-2.5 pl-3 pr-[379px] gap-[38px] mq450:gap-[19px] mq450:pr-5 mq450:box-border">
              <div className="flex-1 relative leading-[20px] font-medium inline-block min-w-[56px]">
                Nationality
              </div>
              <div className="relative text-base leading-[125%] text-neutral-neutral-500 inline-block min-w-[72px]">
                Canadian
              </div>
            </div>
            <div className="self-stretch border-neutral-neutral-100 border-b-[1px] border-solid flex flex-row flex-wrap items-end justify-start pt-3 pb-2.5 pl-3 pr-[354px] gap-[38px] mq450:gap-[19px] mq450:pr-5 mq450:box-border">
              <div className="flex-1 relative leading-[20px] font-medium inline-block min-w-[61px]">
                Contact no.
              </div>
              <div className="relative text-base leading-[125%] text-neutral-neutral-500 inline-block min-w-[97px]">
                1234567890
              </div>
            </div>
            <div className="self-stretch border-neutral-neutral-100 border-b-[1px] border-solid flex flex-row items-end justify-start pt-3 pb-2.5 pl-3 pr-[266px] gap-[37px] mq450:gap-[18px] mq450:pr-5 mq450:box-border mq650:flex-wrap">
              <div className="w-[155px] relative leading-[20px] font-medium inline-block shrink-0">
                E-mail Address
              </div>
              <div className="relative text-base leading-[125%] text-neutral-neutral-500 whitespace-nowrap">
                Oliviadesign@gmail.com
              </div>
            </div>
            <div className="self-stretch border-neutral-neutral-100 border-b-[1px] border-solid flex flex-row items-end justify-start pt-3 pb-2.5 pl-3 pr-[266px] gap-[37px] mq450:gap-[18px] mq450:pr-5 mq450:box-border mq650:flex-wrap">
              <div className="w-[155px] relative leading-[20px] font-medium inline-block shrink-0">
                Work email Address
              </div>
              <div className="relative text-base leading-[125%] text-neutral-neutral-500 whitespace-nowrap">
                Oliviadesign@gmail.com
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start max-w-full text-xs">
            <div className="self-stretch bg-base-white flex flex-col items-start justify-start max-w-full">
              <div className="w-full flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border max-w-full">
                <div className="[border:none] [outline:none] bg-slate-200 self-stretch h-[42px] rounded-medium1 flex flex-row items-center justify-start py-[11.5px] px-2.5 box-border font-desktop-caption-caption-1 font-semibold text-base text-neutral-neutral-700 min-w-[250px]">
                  Research & Publication
                </div>
                <div className="self-stretch bg-base-white border-neutral-neutral-200 border-b-[1px] border-solid flex flex-col items-start justify-end pt-3 pb-2.5 pl-3 pr-[113px] gap-2 mq450:pr-5 mq450:box-border mq625:pr-14 mq625:box-border">
                  <div className="relative text-sm leading-[20px] font-medium">
                    AI and User Experience: The Future of Design
                  </div>
                  <div className="flex flex-row items-center justify-start text-neutral-neutral-600">
                    <div className="flex flex-row items-center justify-center">
                      <div className="relative leading-[125%]">
                        Published in the Journal of Modern Design • 2022
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-neutral-neutral-700">
                    <div className="self-stretch h-[54px] relative leading-[125%] inline-block shrink-0">
                      <span>
                        AI, IoT based real time condition monitoring of
                        Electrical Machines using Python language Abstract:
                        Maintaining induction motors in good working order
                        before they fail benefits small
                      </span>
                      <span className="text-primary"> See More...</span>
                    </div>
                    <button className="cursor-pointer [border:none] p-2 bg-[transparent] rounded-medium overflow-hidden flex flex-row items-center justify-center">
                      <div className="flex flex-row items-center justify-center gap-[7px]">
                        <img
                          className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                          alt=""
                          src="../../../public/icon-1.svg"
                        />
                        <div className="flex flex-row items-center justify-center">
                          <b className="relative text-sm tracking-[0.08em] leading-[120%] uppercase font-ubuntu text-primary text-left">
                            See publication
                          </b>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

Component.propTypes = {
  className: PropTypes.string,
};

export default Component;
