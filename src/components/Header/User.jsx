import React from "react";
import { Img } from "../Img";
import { Text } from "../Sidebar1/Text";

function User() {
  return (
    <div className="flex flex-1 items-center justify-center gap-2 ">
      <a href="#">
        <Img
          src="images/img_ellipse_211.png"
          alt="Profile Image"
          className="h-[50px] w-[50px] rounded-[18px] object-cover"
        />
      </a>
      <div className="">
        <Text as="p">Jane Doe</Text>
      </div>
    </div>
  );
}

export default User;
