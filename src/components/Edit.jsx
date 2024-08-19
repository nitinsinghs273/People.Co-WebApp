import { useState } from "react";
import EmailInput from "./EmailInput";
import RoleInput from "./RoleInput";
import TeamName from "./TeamName";
import FooterWithDivider from "./FooterWithDivider";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateUser } from "../Slices/DataSlices";

const Edit = ({ className = "", onClose, user }) => {
  const dispatch = useDispatch();

  // Local state management for input fields
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.role);
  const [teams, setTeams] = useState(user.teams);
  const [photo, setPhoto] = useState(user.photo);
  const [status, setStatus] = useState(user.status);

  // Handling change in role input
  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  // Handling change in teams input
  const handleTeamsChange = (newTeams) => {
    setTeams(newTeams);
  };

  const handleStatusChange = () => {};

  // Handling file upload for changing photo
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Remove photo functionality
  const handleRemovePhoto = () => {
    setPhoto(null); // Set photo state to null or default image
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch update user action
    dispatch(
      updateUser({
        id: user.id,
        email,
        role,
        teams,
        photo,
      })
    );
    onClose(); // Close the modal after saving
  };

  return (
    <div
      className={`relative shadow-[0px_32px_64px_rgba(0,_0,_0,_0.24),_0px_0px_8px_rgba(0,_0,_0,_0.2)] rounded-lg bg-base-white border-neutral-stroke-transparent-rest border-[1px] border-solid box-border overflow-auto flex flex-col items-start justify-start py-[22px] px-0 gap-[41px] leading-[normal] tracking-[normal] max-w-full max-h-full mq450:gap-5 ${className}`}
    >
      <section className="w-[704px] flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
        <form
          className="m-0 flex-1 flex flex-col items-start justify-start gap-[23.6px] max-w-full"
          onSubmit={handleSubmit}
        >
          <a className="[text-decoration:none] self-stretch relative text-5xl font-bold font-text-sm-semibold text-neutral-neutral-900 text-left mq450:text-[19px]">
            Edit Profile
          </a>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <div
              className="h-[100px] w-[100px] rounded-181xl flex flex-row items-start justify-start bg-cover bg-no-repeat bg-[top]"
              style={{
                backgroundImage: `url(${photo || "/default-avatar.png"})`,
              }}
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="flex flex-col items-center justify-start max-w-full">
              <div className="flex flex-row items-center justify-start py-0 px-0 gap-2 mq450:flex-wrap">
                {/* Change Photo Button */}
                <label className="cursor-pointer border-neutral-neutral-300 border-[1px] border-solid py-1.5 px-[7px] bg-neutral-neutral-50 rounded-medium overflow-hidden flex flex-row items-center justify-center">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    style={{ display: "none" }}
                  />
                  <div className="flex flex-row items-center justify-center gap-[7px]">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                      alt=""
                      src="/icons--lucide1.svg"
                    />
                    <div className="flex flex-row items-center justify-center">
                      <b className="relative text-sm tracking-[0.08em] leading-[120%] uppercase inline-block font-text-sm-semibold text-accent-accent-700 text-left min-w-[128px]">
                        change photo
                      </b>
                    </div>
                  </div>
                </label>

                {/* Remove Photo Button */}
                <button
                  type="button"
                  className="cursor-pointer border-neutral-neutral-300 border-[1px] border-solid py-1.5 px-[7px] bg-neutral-neutral-50 rounded-medium overflow-hidden flex flex-row items-center justify-center"
                  onClick={handleRemovePhoto}
                >
                  <div className="flex flex-row items-center justify-center gap-[7px]">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                      alt=""
                      src="/icons--lucide-1.svg"
                    />
                    <div className="flex flex-row items-center justify-center">
                      <b className="relative text-sm tracking-[0.08em] leading-[120%] uppercase inline-block font-text-sm-semibold text-accent-accent-700 text-left min-w-[127px]">
                        Remove photo
                      </b>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <EmailInput
            name={name}
            email={email}
            setName={setName}
            setEmail={setEmail}
          />
          {/* Email Input */}

          {/* Role Input */}
          <RoleInput role={role} status={status} />

          {/* Team Name Input */}
          <TeamName value={teams} onChange={handleTeamsChange} />

          {/* Footer with Save Button */}
          <FooterWithDivider>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Save Changes
            </button>
            <button
              type="button"
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
          </FooterWithDivider>
        </form>
      </section>
    </div>
  );
};

Edit.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    teams: PropTypes.arrayOf(PropTypes.string).isRequired,
    photo: PropTypes.string,
  }).isRequired,
};

export default Edit;
