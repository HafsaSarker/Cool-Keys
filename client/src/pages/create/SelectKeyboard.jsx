import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SelectionsContext } from "../../context/SelectionsContext";

function SelectKeyboard() {
  const { selections, setSelections } = useContext(SelectionsContext);

  const navigate = useNavigate();

  const selectKeyboard = (val) => {
    setSelections({
      ...selections,
      keyboard: val,
    });

    navigate("/switches");
  };

  return (
    <div className="h-full flex justify-start items-center text-center flex-col pt-16">
      <h2 className="font-semibold text-3xl">Choose Your Keyboard</h2>
      <div className="flex flex-col mt-6 justify-start items-start w-96">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Name your keeb:
        </label>
        <input
          onChange={(e) =>
            setSelections({ ...selections, name: e.target.value })
          }
          type="text"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-none"
          placeholder="sugarCube"
          required
        ></input>
      </div>

      <div className="flex flex-row gap-6 flex-wrap items-center justify-center">
        <div className="flex flex-col h-96 w-96 items-center">
          <img
            width={350}
            src="https://www.wasdkeyboards.com/pub/media/catalog/product/cache/924411c816434bc14ad00683e2943d0e/8/7/87.png"
            alt=""
          />
          <h2 className="text-xl font-semibold">
            V3 87-Key Custom Mechanical Keyboard
          </h2>
          <h4 className="mt-2 ">$180.99</h4>
          <button
            onClick={(e) => selectKeyboard(e.target.value)}
            value="V3 87-Key Custom Mechanical Keyboard"
            className="px-5 py-2 mt-2 text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
          >
            Select
          </button>
        </div>

        <div className="flex flex-col h-96 w-96 items-center">
          <img
            width={350}
            src="https://www.wasdkeyboards.com/pub/media/catalog/product/cache/924411c816434bc14ad00683e2943d0e/6/1/61_whitecase.png"
            alt=""
          />
          <h2 className="text-xl font-semibold">
            VP3 61-Key Custom Mechanical Keyboard - White Case
          </h2>
          <h4 className="mt-2 ">$175.99</h4>
          <button
            onClick={(e) => selectKeyboard(e.target.value)}
            value="VP3 61-Key Custom Mechanical Keyboard - White Case"
            className="px-5 py-2 mt-2 text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
          >
            Select
          </button>
        </div>

        <div className="flex flex-col h-96 w-96 items-center">
          <img
            width={350}
            src="https://www.wasdkeyboards.com/pub/media/catalog/product/cache/924411c816434bc14ad00683e2943d0e/6/1/61_1.png"
            alt=""
          />
          <h2 className="text-xl font-semibold">
            VP3 61-Key Custom Mechanical Keyboard
          </h2>
          <h4 className="mt-2 ">$175.99</h4>
          <button
            onClick={(e) => selectKeyboard(e.target.value)}
            value="VP3 61-Key Custom Mechanical Keyboard"
            className="px-5 py-2 mt-2 text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
          >
            Select
          </button>
        </div>

        <div className="flex flex-col h-96 w-96 items-center">
          <img
            width={350}
            src="https://www.wasdkeyboards.com/pub/media/catalog/product/cache/924411c816434bc14ad00683e2943d0e/6/2/62.png"
            alt=""
          />
          <h2 className="text-xl font-semibold">
            VP3 62-Key ISO Custom Mechanical Keyboard
          </h2>
          <h4 className="mt-2 ">$179.99</h4>
          <button
            onClick={(e) => selectKeyboard(e.target.value)}
            value="VP3 62-Key ISO Custom Mechanical Keyboard"
            className="px-5 py-2 mt-2 text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectKeyboard;
