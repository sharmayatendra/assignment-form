import axios from "axios";
import React, { useState } from "react";

const Modal = ({
  id,
  profile_image,
  employee_name,
  employee_age,
  setShowModal,
  employee_salary,
}) => {
  const [editable, setEditable] = useState({
    employee_name: employee_name,
    employee_age: employee_age,
    employee_salary: employee_salary,
    profile_image: profile_image,
    email: "victor@v.com",
    id: id,
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const handlemodal = () => {
    setShowModal((prev) => !prev);
  };

  const saveButtonHandler = async () => {
    try {
      const resp = await axios.put(
        `https://dummy.restapiexample.com/public/api/v1/update/${id}`,

        editable
      );
      console.log("LLL", resp);
      setSuccess(resp.data.message);
    } catch (err) {
      setError("Oops! something went wrong");
    }

    // handlemodal();
  };

  return (
    <div className="">
      <div className="fixed shadow-2xl top-1/3 left-1/3 z-10 bg-slate-100 p-12">
        <div className=" flex flex-col gap-4 justify-center items-center">
          {/* <h1 className="text-2xl font-bold">Modal body</h1> */}
          <label htmlFor="name">
            Name:
            <input
              type="text"
              id="name"
              className="mx-4"
              value={editable.employee_name}
              onChange={(e) =>
                setEditable((prev) => ({
                  ...prev,
                  employee_name: e.target.value,
                }))
              }
            />
          </label>
          <label htmlFor="email">
            E-mail:
            <input
              type="email"
              id="email"
              className="mx-4"
              value={editable.email}
              onChange={(e) =>
                setEditable((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
            />
          </label>
          <label htmlFor="age">
            Age:
            <input
              type="number"
              id="age"
              className="mx-4"
              value={editable.employee_age}
              onChange={(e) =>
                setEditable((prev) => ({
                  ...prev,
                  employee_age: e.target.value,
                }))
              }
            />
          </label>
          {success && <span className="text-green-500">{success}</span>}
          {error && <span className="text-red-500">{error}</span>}
          <button
            className="border border-sky-500 rounded px-4 bg-sky-200"
            onClick={saveButtonHandler}
          >
            Save
          </button>
          <button
            className="border border-sky-500 rounded px-4 bg-sky-200"
            onClick={handlemodal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
