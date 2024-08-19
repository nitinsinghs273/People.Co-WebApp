import React from "react";
import Pagination from "./Pagination";
import TableHeaderCell from "./TableHeaderCell";
import PaginationWrapper from "./PaginationWrapper";
import TableCell from "./TableCell";
import { useSelector, useDispatch } from "react-redux";

function Table() {
  const dispatch = useDispatch();
  const { users, searchQuery, filterCriteria } = useSelector(
    (state) => state.data
  );

  const filteredUsers = users
    .filter(
      (user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.status.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(
      (user) =>
        filterCriteria.roles.length === 0 ||
        filterCriteria.roles.includes(user.role)
    )
    .filter(
      (user) =>
        filterCriteria.teams.length === 0 ||
        filterCriteria.teams.every((team) => user.teams.includes(team))
    );

  return (
    <div style={{ width: "100%" }}>
      <PaginationWrapper
        divider="/divider.svg"
        Number_of_data={filteredUsers.length}
        nosearch={true}
      />
      <div className="" style={{ width: "95%" }}>
        <TableHeaderCell />
        {filteredUsers.map((item) => (
          <TableCell
            key={item.id}
            data={item}
            propBackgroundColor={item.id % 2 == 0 ? "#f9fafb" : ""}
          />
        ))}
      </div>
      <Pagination />
    </div>
  );
}

export default Table;
