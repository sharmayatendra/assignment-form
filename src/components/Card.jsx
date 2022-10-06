import React, { useState } from "react";
import Modal from "./Modal";
import victor from "./victor.jpg";

const Card = ({
  user: { profile_image, employee_name, employee_age, id, employee_salary },
}) => {
  const [showModal, setShowModal] = useState(false);
  const handlemodal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl w-full h-full overflow-hidden relative">
      <div className="">
        <header className="bg-blue-400 h-24"></header>
        <section className="flex flex-col items-center">
          <img
            className="border-2 border-solid border-white rounded-full -mt-12"
            src={profile_image || victor}
            alt="victor"
          />
          <h1 className="text-2xl font-bold p-2">{employee_name}</h1>
          <p className="p-1">
            Email: <span>victo@v.com</span>
          </p>
          <p className="p-1">
            Age: <span>{employee_age}</span>
          </p>
          <button
            className="border border-sky-500 rounded px-4 bg-sky-200 m-4"
            onClick={handlemodal}
          >
            Edit
          </button>
        </section>
      </div>
      {showModal && (
        <Modal
          id={id}
          profile_image={profile_image}
          employee_name={employee_name}
          employee_age={employee_age}
          employee_salary={employee_salary}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
};

export { Card };
