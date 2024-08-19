import { memo, useState, useEffect } from "react";
import Checkbox from "./Checkbox";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setFilterCriteria } from "../../Slices/DataSlices"; // Adjust the import based on your actual file structure

const Filter = memo(({ className = "", onClose }) => {
  const dispatch = useDispatch();
  const currentFilterCriteria = useSelector(
    (state) => state.data.filterCriteria
  );

  // Local state for tracking selected roles and teams
  const [selectedRoles, setSelectedRoles] = useState(
    currentFilterCriteria.roles
  );
  const [selectedTeams, setSelectedTeams] = useState(
    currentFilterCriteria.teams
  );

  const [roleHidden, setRoleHidden] = useState(false);
  const [teamHidden, setTeamHidden] = useState(false);

  // Toggle display for roles and teams sections
  const toggleRoleHidden = () => {
    setRoleHidden(!roleHidden);
    setTeamHidden(false);
  };
  const toggleTeamHidden = () => {
    setTeamHidden(!teamHidden);
    setRoleHidden(false);
  };

  // Handle checkbox selections
  const handleRoleChange = (role) => {
    const updatedRoles = selectedRoles.includes(role)
      ? selectedRoles.filter((r) => r !== role)
      : [...selectedRoles, role];
    setSelectedRoles(updatedRoles);
  };

  const handleTeamChange = (team) => {
    const updatedTeams = selectedTeams.includes(team)
      ? selectedTeams.filter((t) => t !== team)
      : [...selectedTeams, team];
    setSelectedTeams(updatedTeams);
  };

  const handleSelectClick = () => {
    // Dispatch the selected filters to Redux
    dispatch(
      setFilterCriteria({
        roles: selectedRoles,
        teams: selectedTeams,
      })
    );

    // Close the filter component
    onClose();
  };

  // Determine if the "SELECT" button should be enabled
  const isSelectButtonDisabled =
    selectedRoles.length === 0 && selectedTeams.length === 0;

  return (
    <div
      className={`relative shadow-md rounded bg-white border border-gray-300 p-4 flex flex-col gap-4  w-[300px]${className}`}
    >
      <div className="flex items-center justify-between">
        <span className="font-semibold">Filters</span>
        <img
          className="w-4 h-4 cursor-pointer"
          alt="Close"
          src="/public/down-arrow.png"
          onClick={onClose}
        />
      </div>
      <hr className="border-gray-300" />

      {/* Roles Section */}
      <div>
        <div
          className="flex justify-between cursor-pointer"
          onClick={toggleRoleHidden}
        >
          <div className="flex items-center gap-2">
            <Checkbox />
            <span>Roles</span>
          </div>
          <img
            className={`h-4 w-4 transform transition-transform ${
              roleHidden ? "rotate-180" : ""
            }`}
            src="/public/down-arrow.png"
            alt="Toggle"
          />
        </div>
        <div
          className={`transition-all duration-300 overflow-hidden ${
            roleHidden ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-2 flex flex-col gap-2 pl-7">
            {[
              "Developer",
              "Designer",
              "Product Manager",
              "Analyst",
              "Marketing Manager",
              "Sales Executive",
              "Data Scientist",
              "Content Writer",
              "Finance Manager",
              "HR Manager",
            ].map((role) => (
              <div key={role} className="flex items-center gap-2">
                <Checkbox
                  isChecked={selectedRoles.includes(role)}
                  onChange={() => handleRoleChange(role)}
                />
                <span>{role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Teams Section */}
      <div>
        <div
          className="flex justify-between cursor-pointer"
          onClick={toggleTeamHidden}
        >
          <div className="flex items-center gap-2">
            <Checkbox />
            <span>Teams</span>
          </div>
          <img
            className={`h-4 w-4 transform transition-transform ${
              teamHidden ? "rotate-180" : ""
            }`}
            src="../../../public/down-arrow.png"
            alt="Toggle"
          />
        </div>
        <div
          className={`transition-all duration-300 overflow-hidden ${
            teamHidden ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-2 flex flex-col gap-2 pl-7">
            {["product", "marketing", "developer", "sales", "finance"].map(
              (team) => (
                <div key={team} className="flex items-center gap-2">
                  <Checkbox
                    isChecked={selectedTeams.includes(team)}
                    onChange={() => handleTeamChange(team)}
                  />
                  <span>{team}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <button
        className="cursor-pointer [border:none] py-[11.5px] px-[11px] bg-indigo-500 text-white rounded-medium overflow-hidden flex flex-row items-center justify-center"
        onClick={handleSelectClick}
        disabled={isSelectButtonDisabled}
      >
        SELECT
      </button>
    </div>
  );
});

Filter.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default Filter;
