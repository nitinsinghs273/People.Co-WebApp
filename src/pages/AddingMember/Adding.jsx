import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../Slices/DataSlices";
import { useNavigate } from "react-router-dom";
import TagsInput from "../../components/TagsInput/TagsInput";

function Adding() {
  const { users } = useSelector((state) => state.data);
  const [tagData, setTagData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    status: "",
    role: "",
    teams: [],
    researchPublications: [{ title: "", publication: "", year: "", about: "" }],
  });
  const textInput = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const firstInputRef = useRef(null);

  useEffect(() => {
    firstInputRef.current.focus();
  }, []);

  // Function to check if any field is empty
  const isAnyFieldEmpty = (data) => {
    // Check if any basic fields are empty
    const hasEmptyBasicFields = Object.values(data).some((value) => {
      if (Array.isArray(value)) {
        return value.length === 0; // Check if array fields (like 'teams') are empty
      }
      return value === ""; // Check if string fields are empty
    });

    // Check if researchPublications array contains any empty fields
    const hasEmptyPublications = data.researchPublications.some((publication) =>
      Object.values(publication).some((field) => field === "")
    );

    return hasEmptyBasicFields || hasEmptyPublications;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePublicationChange = (index, field, value) => {
    const newPublications = [...formData.researchPublications];
    newPublications[index][field] = value;
    setFormData((prevState) => ({
      ...prevState,
      researchPublications: newPublications,
    }));
  };

  const handleAddPublication = () => {
    setFormData((prevState) => ({
      ...prevState,
      researchPublications: [
        ...prevState.researchPublications,
        { title: "", publication: "", year: "", about: "" },
      ],
    }));
  };

  const handleRemovePublication = (index) => {
    setFormData((prevState) => ({
      ...prevState,
      researchPublications: prevState.researchPublications.filter(
        (_, i) => i !== index
      ),
    }));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newUser = { ...formData, id: users.length, teams: tagData };
    if (isAnyFieldEmpty(newUser)) return;
    console.log(newUser);
    dispatch(addUser(newUser));
    navigate("/directory"); // Navigate to the directory after submission
  };
  const handleBack = (e) => {
    e.preventDefault();
    navigate("/directory");
  };

  return (
    <div className="flex flex-col justify-center items-center mt-9 mb-52">
      <h1 className="text-9xl font-bold mb-4 text-indigo-600">Add Employee</h1>
      <form className="w-[1180px]">
        <div className="mb-4 flex flex-col">
          <label htmlFor="name" className="text-sm font-medium mb-1">
            Employee Name
          </label>
          <div className="flex items-start justify-end bg-primary-primary-50 border-neutral-neutral-300 border-[1px] border-solid px-3">
            <input
              id="name"
              name="name"
              type="text"
              ref={firstInputRef}
              value={formData.name}
              onChange={handleChange}
              className="w-full h-9 rounded bg-primary-primary-50 border-neutral-neutral-300 px-5 py-1.5 text-base outline-none"
            />
          </div>
        </div>

        <div className="mb-4 flex flex-col">
          <label htmlFor="mobile" className="text-sm font-medium mb-1">
            Mobile Number
          </label>
          <div className="flex items-start justify-end bg-primary-primary-50 border-neutral-neutral-300 border-[1px] border-solid px-3">
            <input
              id="mobile"
              name="mobile"
              type="text"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full h-9 rounded bg-primary-primary-50 border-neutral-neutral-300 px-4 py-1.5 text-base outline-none"
            />
          </div>
        </div>

        <div className="mb-4 flex flex-col">
          <label htmlFor="email" className="text-sm font-medium mb-1">
            Email Id
          </label>
          <div className="flex items-start justify-end bg-primary-primary-50 border-neutral-neutral-300 border-[1px] border-solid px-3">
            <input
              id="email"
              name="email"
              type="text"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-9 rounded bg-primary-primary-50 border-neutral-neutral-300 px-4 py-1.5 text-base outline-none"
            />
          </div>
        </div>

        <div className="mb-4 flex flex-col">
          <label htmlFor="dateOfBirth" className="text-sm font-medium mb-1">
            Date of Birth
          </label>
          <div className="flex items-start justify-end bg-primary-primary-50 border-neutral-neutral-300 border-[1px] border-solid px-3">
            <input
              id="dateOfBirth"
              name="dateOfBirth"
              type="text"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full h-9 rounded bg-primary-primary-50 border-neutral-neutral-300 px-4 py-1.5 text-base outline-none"
            />
          </div>
        </div>

        <div className="mb-4 flex flex-col">
          <label htmlFor="gender" className="text-sm font-medium mb-1">
            Gender
          </label>
          <div className="flex items-start justify-end bg-primary-primary-50 border-neutral-neutral-300 border-[1px] border-solid px-3">
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full h-9 rounded bg-primary-primary-50 border-neutral-neutral-300 px-4 py-1.5 text-base outline-none"
            >
              <option value="">Select gender</option>
              <option value="Active">Male</option>
              <option value="Inactive">Female</option>
              <option value="Inactive">Others</option>
              {/* Add more status options as needed */}
            </select>
          </div>
        </div>

        <div className="mb-4 flex flex-col">
          <label htmlFor="nationality" className="text-sm font-medium mb-1">
            Nationality
          </label>
          <div className="flex items-start justify-end bg-primary-primary-50 border-neutral-neutral-300 border-[1px] border-solid px-3">
            <input
              id="nationality"
              name="nationality"
              type="text"
              value={formData.nationality}
              onChange={handleChange}
              className="w-full h-9 rounded bg-primary-primary-50 border-neutral-neutral-300 px-4 py-1.5 text-base outline-none"
            />
          </div>
        </div>

        <div className="mb-4 flex flex-col">
          <label htmlFor="status" className="text-sm font-medium mb-1">
            Status
          </label>
          <div className="flex items-start justify-end bg-primary-primary-50 border-neutral-neutral-300 border-[1px] border-solid ">
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full h-9 rounded bg-primary-primary-50 border-neutral-neutral-300 px-4 py-1.5 text-base outline-none"
            >
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Pending">Pending</option>
              {/* Add more status options as needed */}
            </select>
          </div>
        </div>

        <div className="mb-4 flex flex-col">
          <label htmlFor="role" className="text-sm font-medium mb-1">
            Role
          </label>
          <div className="flex items-start justify-end bg-primary-primary-50 border-neutral-neutral-300 border-[1px] border-solid ">
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full h-9  bg-primary-primary-50 border-neutral-neutral-300 px-4 py-1.5 text-base outline-none"
            >
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
              ].map((role, index) => (
                <option key={index} value={role}>
                  {role}
                </option>
              ))}
              <option value="">Select Role</option>

              {/* Add more role options as needed */}
            </select>
          </div>
        </div>

        <div className="mb-4 flex flex-col">
          <label htmlFor="teams" className="text-sm font-medium mb-1">
            Teams
          </label>
          <div className="flex items-start justify-start bg-primary-primary-50 border-neutral-neutral-300 border-[1px] border-solid px-3">
            <TagsInput tagData={tagData} setTagData={setTagData} />
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Research Publications</h2>
          {formData.researchPublications.map((publication, index) => (
            <div key={index} className="mb-4 flex flex-col">
              <label
                htmlFor={`title-${index}`}
                className="text-sm font-medium mb-1"
              >
                Title
              </label>
              <div className="flex items-start justify-end bg-primary-primary-50 border-neutral-neutral-300 border-[1px] border-solid px-3">
                <input
                  id={`title-${index}`}
                  name={`title-${index}`}
                  type="text"
                  value={publication.title}
                  onChange={(e) =>
                    handlePublicationChange(index, "title", e.target.value)
                  }
                  className="w-full h-9 rounded bg-primary-primary-50 border-neutral-neutral-300 px-4 py-1.5 text-base outline-none"
                />
              </div>

              <label
                htmlFor={`year-${index}`}
                className="text-sm font-medium mb-1 mt-4"
              >
                Year
              </label>
              <div className="flex items-start justify-end bg-primary-primary-50 border-neutral-neutral-300 border-[1px] border-solid px-3">
                <input
                  id={`year-${index}`}
                  name={`year-${index}`}
                  type="text"
                  value={publication.year}
                  onChange={(e) =>
                    handlePublicationChange(index, "year", e.target.value)
                  }
                  className="w-full h-9 rounded bg-primary-primary-50 border-neutral-neutral-300 px-4 py-1.5 text-base outline-none "
                />
              </div>

              <label
                htmlFor={`publication-${index}`}
                className="text-sm font-medium mb-1 mt-4"
              >
                Publication
              </label>
              <div className="flex items-start justify-end bg-primary-primary-50 border-neutral-neutral-300 border-[1px] border-solid px-3 ">
                <input
                  id={`publication-${index}`}
                  name={`publication-${index}`}
                  type="text"
                  value={publication.publication}
                  onChange={(e) =>
                    handlePublicationChange(
                      index,
                      "publication",
                      e.target.value
                    )
                  }
                  className="w-full  h-9 rounded bg-primary-primary-50 border-neutral-neutral-300 px-4 py-1.5 ml-2 text-base outline-none"
                />
              </div>

              <label
                htmlFor={`about-${index}`}
                className="text-sm font-medium mb-1 mt-4"
              >
                About
              </label>
              <div className="flex items-start justify-end bg-primary-primary-50 border-neutral-neutral-300 border-[1px] border-solid px-3 py-3">
                <textarea
                  id={`about-${index}`}
                  name={`about-${index}`}
                  type="text"
                  value={publication.about}
                  onChange={(e) =>
                    handlePublicationChange(index, "about", e.target.value)
                  }
                  className="w-full  h-24 rounded bg-primary-primary-50 border-neutral-neutral-300 px-4 py-10 text-base outline-none"
                />
              </div>

              <button
                type="button"
                onClick={() => handleRemovePublication(index)}
                className="text-red-600 px-3 py-4 border-[1px] border-red-500 border-solid rounded mt-4"
              >
                Remove Publication
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddPublication}
            className=" bg-indigo-500 text-white px-3 py-4 border-0 rounded"
          >
            Add Publication
          </button>
        </div>

        <button
          onClick={handleAdd}
          className="bg-indigo-500 text-white p-4 border-0 rounded"
        >
          Add Employee
        </button>
        <button
          onClick={handleBack}
          className=" py-4 border-1 rounded border-gray-600 border-solid ml-4 px-8 font-medium"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default Adding;
