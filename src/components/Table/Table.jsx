import React from "react";
import Pagination from "./Pagination";
import TableHeaderCell from "./TableHeaderCell";
import PaginationWrapper from "./PaginationWrapper";
import TableCell from "./TableCell";
import { useSelector, useDispatch } from "react-redux";
import {
  setUsers,
  addUser,
  updateUser,
  deleteUser,
  setSearchQuery,
} from "../../Slices/DataSlices";

function Table() {
  const dispatch = useDispatch();
  const { users, searchQuery, filterCriteria } = useSelector(
    (state) => state.data
  );
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div style={{ width: "100%" }}>
      <PaginationWrapper
        divider="../../../public/divider.svg"
        Number_of_data={filteredUsers.length}
        nosearch={true}
      />
      <div className="" style={{ width: "95%" }}>
        <TableHeaderCell />
        {filteredUsers.map((item) => (
          <TableCell key={item.id} data={item} />
        ))}
      </div>
      <Pagination />
    </div>
  );
}

export default Table;
