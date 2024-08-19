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
    <div className="flex flex-wrap min-h-[48px] p-2 border border-gray-300 rounded-lg">
      <ul className="flex flex-wrap p-0 mt-2">
        {tagData.map((tag, index) => (
          <li
            key={index}
            className="flex items-center justify-center h-8 px-2 text-white text-sm rounded-lg bg-blue-600 mr-2 mb-2"
          >
            <span className="mt-0.5">{tag}</span>
            <span
              className="w-4 h-4 flex items-center justify-center text-blue-600 text-xs rounded-full bg-white ml-2 cursor-pointer"
              onClick={() => removeTagData(index)}
            >
              x
            </span>
          </li>
        ))}
      </ul>
      <input
        type="text"
        onKeyUp={(e) => (e.key === "Enter" ? addTagData(e) : null)}
        placeholder="Press enter to add a tag"
        className="flex-1 border-none h-[46px]  focus:outline-none w-full  rounded bg-primary-primary-50 border-neutral-neutral-300 px-4 py-1.5 text-base outline-none"
      />
    </div>
  );
};

export default TagsInput;
