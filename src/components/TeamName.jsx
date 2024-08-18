import PropTypes from "prop-types";

const TeamName = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-1 max-w-full text-left text-base text-neutral-neutral-700 font-text-sm-semibold ${className}`}
    >
      <div className="w-[243px] relative leading-[125%] inline-block whitespace-nowrap">
        Teams
      </div>
      <footer className="self-stretch rounded bg-base-white overflow-hidden flex flex-row items-start justify-start gap-[110px] max-w-full text-left text-sm text-brand-700 font-text-sm-semibold mq450:gap-[27px] mq675:gap-[55px]">
        <div className="h-[45px] flex-1 rounded bg-base-white border-neutral-neutral-300 border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[7px] px-0 pb-2.5 gap-2.5 max-w-full">
          <div className="self-stretch h-[45px] relative rounded bg-base-white border-neutral-neutral-300 border-[1px] border-solid box-border hidden" />
          <div className="w-[643px] flex flex-row items-start justify-start py-0 px-1.5 box-border max-w-full">
            <div className="flex-1 flex flex-row items-end justify-start gap-[7px] max-w-full">
              <div className="flex-1 flex flex-row flex-wrap items-end justify-start py-0 pl-0 pr-1 box-border gap-x-1 gap-y-[3.4px] max-w-full z-[2] mq675:hidden">
                <div className="w-20 rounded-medium1 bg-primary-primary-50 border-neutral-neutral-200 border-[0.5px] border-solid box-border flex flex-row items-start justify-start p-[3px] gap-2.5">
                  <div className="relative leading-[20px] inline-block min-w-[46px]">
                    Design
                  </div>
                  <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <img
                      className="w-4 h-4 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="../../../public/icons--lucide-2.svg"
                    />
                  </div>
                </div>
                <div className="w-[86px] rounded-medium1 bg-primary-primary-50 border-neutral-neutral-200 border-[0.5px] border-solid box-border flex flex-row items-start justify-start p-[3px] gap-2.5">
                  <div className="relative leading-[20px] inline-block min-w-[52px]">
                    Product
                  </div>
                  <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <img
                      className="w-4 h-4 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="../../../public/icons--lucide-2.svg"
                    />
                  </div>
                </div>
                <div className="rounded-medium1 bg-primary-primary-50 border-neutral-neutral-200 border-[0.5px] border-solid flex flex-row items-start justify-start p-[3px] gap-2.5">
                  <div className="relative leading-[20px] inline-block min-w-[67px]">
                    Marketing
                  </div>
                  <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <img
                      className="w-4 h-4 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/icons--lucide-2.svg"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="w-[86px] rounded-medium1 bg-primary-primary-50 border-neutral-neutral-200 border-[0.5px] border-solid box-border flex flex-row items-start justify-start p-[3px] gap-[9px]">
                    <div className="relative leading-[20px] inline-block min-w-[53px]">
                      Finance
                    </div>
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <img
                        className="w-4 h-4 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="../../../public/icons--lucide-2.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
                  <img
                    className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                    loading="lazy"
                    alt=""
                    src="../../../public/icons--lucide-6.svg"
                  />
                </div>
              </div>
              <div className="h-[26.5px] w-[0.5px] relative border-neutral-neutral-200 border-r-[0.5px] border-solid box-border z-[1]" />
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="../../../public/icon-end-1-medium-2.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch h-[1.1px] relative bg-primary hidden" />
          <div className="w-[156.4px] h-[43.1px] hidden flex-row items-center justify-center py-[9px] px-0 box-border">
            <img
              className="h-6 w-6 relative hidden"
              alt=""
              src="../../../public/placeholder1.svg"
            />
          </div>
          <div className="self-stretch h-px relative border-neutral-neutral-600 border-t-[1px] border-solid box-border shrink-0" />
        </div>
        <div className="hidden flex-col items-start justify-start text-neutral-neutral-900">
          <div className="w-[312px] bg-base-white border-neutral-neutral-300 border-r-[1px] border-solid border-neutral-neutral-300 border-l-[1px] border-solid box-border overflow-hidden flex flex-row items-center justify-start py-2 pl-5 pr-0 whitespace-nowrap">
            <div className="relative leading-[125%]">Option item</div>
          </div>
          <div className="w-[312px] bg-base-white border-neutral-neutral-300 border-r-[1px] border-solid border-neutral-neutral-300 border-l-[1px] border-solid box-border overflow-hidden flex flex-row items-center justify-start py-2 pl-5 pr-0 whitespace-nowrap">
            <div className="relative leading-[125%]">Option item</div>
          </div>
          <div className="w-[312px] bg-base-white border-neutral-neutral-300 border-r-[1px] border-solid border-neutral-neutral-300 border-l-[1px] border-solid box-border overflow-hidden flex flex-row items-center justify-start py-2 pl-5 pr-0 whitespace-nowrap">
            <div className="relative leading-[125%]">Option item</div>
          </div>
          <div className="w-[312px] rounded-t-none rounded-b bg-base-white border-neutral-neutral-300 border-r-[1px] border-solid border-neutral-neutral-300 border-b-[1px] border-solid border-neutral-neutral-300 border-l-[1px] border-solid box-border overflow-hidden flex flex-row items-center justify-start pt-2 pb-1.5 pl-5 pr-0 whitespace-nowrap">
            <div className="relative leading-[125%]">Option item</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

TeamName.propTypes = {
  className: PropTypes.string,
};

export default TeamName;
