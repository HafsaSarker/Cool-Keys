import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SelectKeyboard() {
  const [keyboard, setKeyboard] = useState("");
  const navigate = useNavigate();

  const handleClick = (val) => {
    setKeyboard(val);

    navigate("/switches");
  };

  return (
    <div className="h-full flex justify-start items-center text-center flex-col pt-16">
      <h2 className="font-semibold text-3xl">1st: Choose Your Keyboard</h2>
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
          <button className="px-5 py-2 mt-2 text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
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
          <button className="px-5 py-2 mt-2 text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
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
          <button className="px-5 py-2 mt-2 text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
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
          <button className="px-5 py-2 mt-2 text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
            Select
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectKeyboard;
