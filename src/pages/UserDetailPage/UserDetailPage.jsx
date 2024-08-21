import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Sidebar1 from "../../components/Sidebar1";
import UserPanel from "./UserPanel";
import UserTable from "./UserTable";
import { useSelector } from "react-redux";

function UserDetailPage() {
  const { userId } = useParams(); // userId is a string from useParams
  const { users } = useSelector((state) => state.data);

  // Ensure data types match when comparing IDs
  const userByID = users.find((user) => user.id === userId, 10);
  return (
    <div className=" relative bg-primary-primary-50 overflow-y-auto flex flex-col items-start justify-start pt-[17px] px-0 pb-0 box-border leading-[normal] tracking-[normal] text-left text-sm text-neutral-neutral-900 font-text-sm-semibold ">
      <Header />

      <main className="self-stretch flex flex-row items-start justify-start max-w-full mq850:pl-5 mq850:pr-5 mq850:box-border">
        <Sidebar1 />

        <section className="w-full flex-1 flex flex-row items-start justify-start pt-[22px] px-[5px] pb-3 box-border max-w-[calc(100%_-_240px)] z-[1] text-left text-sm text-gray-600 font-text-sm-semibold mq850:max-w-full mr-12 mt-10">
          <div
            className="shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-xl bg-base-white border-gray-200 border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-col items-start justify-start max-w-full z-[2] w-full"
            style={{ width: "100%" }}
          >
            <div className="flex justify-between gap-5">
              <UserTable />
              <UserPanel userByID={userByID} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default UserDetailPage;
