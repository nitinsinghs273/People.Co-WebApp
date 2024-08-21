import { useState } from "react";

const TagsInput = ({ tagData, setTagData }) => {
  const removeTagData = (indexToRemove) => {
    setTagData([...tagData.filter((_, index) => index !== indexToRemove)]);
  };

  const addTagData = (event) => {
    if (event.target.value !== "") {
      setTagData([...tagData, event.target.value]);
      event.target.value = "";
    }
  };

  return (
    <div
      className={`self-stretch  w-full  flex-col items-start justify-start gap-1 max-w-full text-left text-base font-text-sm-semibold `}
    >
      <div className=" relative leading-[125%] inline-block whitespace-nowrap text-sm font-medium mb-1">
        Teams
      </div>

      <footer className="self-stretch rounded bg-base-white overflow-hidden flex flex-row items-start justify-start  text-left text-sm text-brand-700 font-text-sm-semibold mq450:gap-[27px] mq675:gap-[55px]">
        <div className=" flex-1 rounded bg-base-white border-neutral-neutral-300 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-[7px] px-0 pb-2.5 gap-2.5 max-w-full">
          <div className="flex flex-wrap items-start justify-start px-3 w-full gap-3">
            {tagData.map((tag, index) => (
              <div
                key={index}
                className="rounded-medium1 bg-primary-primary-50 border-neutral-neutral-200 border-[0.5px] border-solid flex flex-row items-start justify-center p-[3px] gap-2.5"
              >
                <div className="relative leading-[20px] inline-block min-w-[60px]">
                  {tag}
                </div>
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <img
                    className="w-4 h-4 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/icons--lucide-2.svg"
                    onClick={() => removeTagData(index)}
                  />
                </div>
              </div>
            ))}

            <input
              type="text"
              onKeyUp={(e) => (e.key === "Enter" ? addTagData(e) : null)}
              placeholder="Press enter to add a tag"
              className=" w-full h-9 rounded bg-primary-primary-50 border-neutral-neutral-300 text-base outline-none "
            />

            {/* <div className="self-stretch h-[13px] relative bg-primary hidden" />
            <div className="w-[156.4px] h-[43.1px] hidden flex-row items-center justify-center py-[9px] px-0 box-border">
              <img className="h-6 w-6 relative hidden" alt="" src="/public/" />
            </div>
            <div className="self-stretch h-px relative border-neutral-neutral-600 border-t-[1px] border-solid box-border shrink-0" /> */}
          </div>
        </div>
      </footer>

      <div className="flex flex-wrap min-h-[48px] p-2 border border-gray-300 rounded-lg"></div>
    </div>
  );
};

export default TagsInput;
