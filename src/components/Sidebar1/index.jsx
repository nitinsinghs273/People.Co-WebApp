import React, { useState } from "react";
import { Menu, Sidebar } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";

export default function Sidebar1({ ...props }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sidebar
      {...props}
      width="242px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      className={`${props.className} flex flex-col h-screen pt-[18px] top-0 px-4 bg-white-a700_01 !sticky overflow-auto border-0`}
    >
      <Menu
        menuItemStyles={{
          button: {
            padding: "10px",
            gap: "12px",
            backgroundColor: "#ffffff",
            color: "#1e1e1e",
            fontWeight: 600,
            fontSize: "16px",
            borderRadius: "4px",
            [`&:hover, &.ps-active`]: { color: "#6840c6" },
          },
        }}
        rootStyles={{ ["&>ul"]: { gap: "8px" } }}
        className="flex w-full flex-col self-stretch"
      >
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {({ isActive }) => (
            <div className="flex-1 flex flex-col items-start justify-start z-[1]">
              <div className="self-stretch rounded bg-base-white overflow-hidden flex flex-col items-start justify-start p-2">
                <div className="flex flex-row items-center justify-start gap-2">
                  <img
                    className="h-6 w-6 relative rounded overflow-hidden shrink-0"
                    alt=""
                    src={isActive ? "/frame-513-1.svg" : "/frame-513.svg"}
                  />
                  <div className="relative leading-[125%] font-semibold inline-block min-w-[74px]">
                    Overview
                  </div>
                </div>
              </div>
            </div>
          )}
        </NavLink>
        <NavLink
          to="/directory"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {({ isActive }) => (
            <div className="flex-1 flex flex-col items-start justify-start z-[1]">
              <div className="self-stretch rounded bg-base-white overflow-hidden flex flex-col items-start justify-start p-2">
                <div className="flex flex-row items-center justify-start gap-2">
                  <img
                    className="h-6 w-6 relative rounded overflow-hidden shrink-0"
                    alt=""
                    src={isActive ? "/frame-513-1.svg" : "/frame-513.svg"}
                  />
                  <div className="relative leading-[125%] font-semibold inline-block min-w-[74px] ">
                    People Directory
                  </div>
                </div>
              </div>
            </div>
          )}
        </NavLink>
      </Menu>
    </Sidebar>
  );
}
