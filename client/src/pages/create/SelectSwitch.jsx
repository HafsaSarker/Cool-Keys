import React, { useContext, useState } from "react";
import { SelectionsContext } from "../../context/SelectionsContext";
import { renderKeyboard } from "../../utils/renderKeyboard";
import { useNavigate } from "react-router-dom";

function SelectSwitch() {
  const navigate = useNavigate();

  const { selections, setSelections } = useContext(SelectionsContext);
  const switches = [
    "Cherry MX Black (Linear)",
    "Cherry MX Brown (Tactile Bump)",
    "Cherry MX Silent Red (Linear)",
    "Cherry MX Red (Linear)",
  ];

  const selectSwitch = (val) => {
    setSelections({
      ...selections,
      switchType: val,
    });
    navigate("/colors");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <img width={600} src={renderKeyboard(selections.keyboard)} alt="" />
      <h2 className="font-extrabold text-xl">{selections.keyboard}</h2>

      <div>
        <h3 className="font-bold text-lg mt-5">Switch Type</h3>

        <select
          className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-96 p-2.5"
          onChange={(e) => selectSwitch(e.target.value)}
        >
          <option defaultValue={""}>Choose an Option</option>
          <option value={switches[0]}>{switches[0]}</option>
          <option value={switches[1]}>{switches[1]}</option>
          <option value={switches[2]}>{switches[2]}</option>
          <option value={switches[3]}>{switches[3]}</option>
        </select>
      </div>
    </div>
  );
}

export default SelectSwitch;
