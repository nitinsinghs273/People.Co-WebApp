import React from "react";

const sizes = {
  headings: "text-[16px] font-semibold",
  headingxl: "text-[36px] font-semibold md:text-[34px] sm:text-[32px]",
};

const Heading = ({ children, className = "", size = "headings", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900_01 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
