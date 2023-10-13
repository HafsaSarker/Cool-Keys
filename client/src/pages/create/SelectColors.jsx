import React, { useContext } from "react";
import { SelectionsContext } from "../../context/SelectionsContext";
import { palette } from "../../utils/palette";
import { createKeebs } from "../../utils/createKeebs";

function SelectColors() {
  const { selections, setSelections } = useContext(SelectionsContext);

  const setColorSwatch = (val) => {
    setSelections({
      keyboard: selections.keyboard,
      color: { keyGroup: selections.color.keyGroup, swatch: val },
      switchType: selections.switchType,
    });
  };

  const setKeyGroup = (val) => {
    setSelections({
      keyboard: selections.keyboard,
      color: {
        keyGroup: val,
        swatch: selections.color.swatch,
      },
      switchType: selections.switchType,
    });
  };

  return (
    <div className="flex flex-col justify-center items-center mt-16">
      <h1 className="font-semibold text-xl mb-5">Colors</h1>
      <div className="flex gap-5 w-96 flex-wrap justify-center">
        {palette.map((item, index) => (
          <div key={index} className="h-20 flex flex-col text-center text-xs">
            <button
              value={item}
              onClick={(e) => {
                setColorSwatch(e.target.value);
              }}
              className={`w-16 h-10 bg-${item} mb-1 focus:ring-2 focus:ring-gray-300`}
            ></button>
            {item}
          </div>
        ))}
      </div>
      <h1 className="font-semibold text-xl my-5">Key Groups</h1>
      <div className="flex gap-5">
        <button
          className="border rounded-sm border-gray-400 p-2 text-sm text-gray-500 focus:ring-2"
          value="Alphanumeric"
          onClick={() => setKeyGroup("Alphanumeric")}
        >
          Alphanumeric
          <img
            width={200}
            src="https://www.wasdkeyboards.com/pub/static/version1693932845/frontend/Trellis/wasd/en_US/images/alphanumeric.png"
            alt=""
          />
        </button>
        <button
          className="border rounded-sm border-gray-400 p-2 text-sm text-gray-500 focus:ring-2"
          value="Modifiers"
          onClick={() => setKeyGroup("Modifiers")}
        >
          Modifiers
          <img
            width={200}
            src="https://www.wasdkeyboards.com/pub/static/version1693932845/frontend/Trellis/wasd/en_US/images/modifiers.png"
            alt=""
          />
        </button>
        <button
          className="border rounded-sm border-gray-400 p-2 text-sm text-gray-500 focus:ring-2"
          onClick={() => setKeyGroup("All Keys")}
        >
          All Keys
          <img
            width={200}
            src="https://www.wasdkeyboards.com/pub/static/version1693932845/frontend/Trellis/wasd/en_US/images/allkeys.png"
            alt=""
          />
        </button>
      </div>
      <button
        onClick={() => createKeebs(selections)}
        className="mt-10 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
      >
        Create Keyboard
      </button>
    </div>
  );
}

export default SelectColors;
