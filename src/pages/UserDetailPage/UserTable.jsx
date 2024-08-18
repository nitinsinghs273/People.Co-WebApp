import React from "react";
import Pagination from "../../components/Table/Pagination";
import UserTableHeader from "./UserTableHeader";
import PaginationWrapper from "../../components/Table/PaginationWrapper";
import UserTableCell from "./UserTableCell";
import { useSelector, useDispatch } from "react-redux";
import {
  setUsers,
  addUser,
  updateUser,
  deleteUser,
  setSearchQuery,
} from "../../Slices/DataSlices";

function UserTable() {
  const dispatch = useDispatch();
  const { users, searchQuery } = useSelector((state) => state.data);
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div style={{ width: "40%" }}>
      <PaginationWrapper
        divider="/divider.svg"
        Number_of_data={filteredUsers.length}
        noSearch={false}
      />
      <div className="" style={{ width: "95%" }}>
        <UserTableHeader />
        {filteredUsers.map((item) => (
          <UserTableCell key={item.id} data={item} />
        ))}
      </div>
      <Pagination />
    </div>
  );
}

export default UserTable;
