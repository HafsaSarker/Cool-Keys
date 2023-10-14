import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SelectionsContext } from "../../context/SelectionsContext";
import { api_path } from "../../utils/api_path";
import { palette } from "../../utils/palette";
import { UpdateKeebs } from "../../utils/keebsCRUD";

function EditKeyboard() {
  const [keebImg, setKeebImg] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchKeeb = async () => {
      const response = await fetch(`${api_path}/${id}`);
      const data = await response.json();

      const { image, name, keyboard, keygroup, swatch, switchtype } = data;

      setKeebImg(image);

      setSelections({
        name: name,
        keyboard: keyboard,
        color: {
          keyGroup: keygroup,
          swatch: swatch,
        },
        switchType: switchtype,
      });
    };
    fetchKeeb();
  }, []);

  const { selections, setSelections } = useContext(SelectionsContext);

  const selectKeyboard = (val) => {
    setSelections({
      ...selections,
      keyboard: val,
    });
  };

  const setColorSwatch = (val) => {
    setSelections({
      name: selections.name,
      keyboard: selections.keyboard,
      color: { keyGroup: selections.color.keyGroup, swatch: val },
      switchType: selections.switchType,
    });
  };

  const setKeyGroup = (val) => {
    setSelections({
      name: selections.name,
      keyboard: selections.keyboard,
      color: {
        keyGroup: val,
        swatch: selections.color.swatch,
      },
      switchType: selections.switchType,
    });
  };

  return (
    <div className="min-h-full flex justify-start items-center text-center flex-col py-16">
      <h2 className="font-semibold text-3xl">Edit Keeb =)</h2>
      <div className="flex flex-col mt-6 justify-start items-start w-96">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Name:
        </label>
        <input
          onChange={(e) =>
            setSelections({ ...selections, name: e.target.value })
          }
          type="text"
          id="name"
          value={selections.name}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-none"
          placeholder="sugarCube"
          required
        ></input>
      </div>

      <h2 className="mt-6 font-semibold text-lg underline underline-offset-2">
        Current Keboard: {selections.keyboard}
      </h2>

      <div className="mt-6 flex flex-row gap-2 flex-wrap items-center justify-center">
        <div className="flex border flex-col h-72 w-96 items-center">
          <img
            width={200}
            src="https://www.wasdkeyboards.com/pub/media/catalog/product/cache/924411c816434bc14ad00683e2943d0e/8/7/87.png"
            alt=""
          />
          <h2 className="text-md font-semibold">
            V3 87-Key Custom Mechanical Keyboard
          </h2>
          <h4 className="mt-2  text-sm">$180.99</h4>
          <button
            onClick={(e) => selectKeyboard(e.target.value)}
            value="V3 87-Key Custom Mechanical Keyboard"
            className="px-2 py-0.5 text-sm mt-2 text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
          >
            Select
          </button>
        </div>

        <div className="flex border flex-col h-72 w-96 items-center">
          <img
            width={200}
            src="https://www.wasdkeyboards.com/pub/media/catalog/product/cache/924411c816434bc14ad00683e2943d0e/6/1/61_whitecase.png"
            alt=""
          />
          <h2 className="text-md font-semibold">
            VP3 61-Key Custom Mechanical Keyboard - White Case
          </h2>
          <h4 className="mt-2  text-sm">$175.99</h4>
          <button
            onClick={(e) => selectKeyboard(e.target.value)}
            value="VP3 61-Key Custom Mechanical Keyboard - White Case"
            className="px-2 py-0.5 text-sm mt-2 text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
          >
            Select
          </button>
        </div>

        <div className="flex border flex-col h-72 w-96 items-center">
          <img
            width={200}
            src="https://www.wasdkeyboards.com/pub/media/catalog/product/cache/924411c816434bc14ad00683e2943d0e/6/1/61_1.png"
            alt=""
          />
          <h2 className="text-md font-semibold">
            VP3 61-Key Custom Mechanical Keyboard
          </h2>
          <h4 className="mt-2  text-sm">$175.99</h4>
          <button
            onClick={(e) => selectKeyboard(e.target.value)}
            value="VP3 61-Key Custom Mechanical Keyboard"
            className="px-2 py-0.5 text-sm mt-2 text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
          >
            Select
          </button>
        </div>

        <div className="flex border flex-col h-72 w-96 items-center">
          <img
            width={200}
            src="https://www.wasdkeyboards.com/pub/media/catalog/product/cache/924411c816434bc14ad00683e2943d0e/6/2/62.png"
            alt=""
          />
          <h2 className="text-md font-semibold">
            VP3 62-Key ISO Custom Mechanical Keyboard
          </h2>
          <h4 className="mt-2  text-sm">$179.99</h4>
          <button
            onClick={(e) => selectKeyboard(e.target.value)}
            value="VP3 62-Key ISO Custom Mechanical Keyboard"
            className="px-2 py-0.5 text-sm mt-2 text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
          >
            Select
          </button>
        </div>
      </div>

      <div className="mt-10 items-center flex flex-col">
        <div className="w-4 h-4 bg-gray-200 rounded-full border border-gray-300"></div>
        <span className="border border-gray-300 w-0.5 h-36"></span>
      </div>

      <h2 className="font-semibold text-lg border pl-2 rounded-full border-gray-300">
        Current Swatch:{" "}
        <span
          className={`rounded-full py-0.5 px-1 bg-${selections.color.swatch}`}
        >
          {selections.color.swatch}
        </span>
      </h2>

      <div className="flex gap-5 w-96 flex-wrap justify-center mt-6">
        {palette.map((item, index) => (
          <div key={index} className="h-20 flex flex-col text-center text-xs">
            <button
              value={item}
              onClick={(e) => {
                setColorSwatch(e.target.value);
              }}
              className={`w-12 h-8 bg-${item} mb-1 focus:ring-2 focus:ring-gray-300`}
            ></button>
            {item}
          </div>
        ))}
      </div>

      <div className="mt-10 items-center flex flex-col">
        <div className="w-4 h-4 bg-gray-200 rounded-full border border-gray-300"></div>
        <span className="border border-gray-300 w-0.5 h-36"></span>
      </div>

      <h2 className="mb-6 font-semibold text-lg border px-2 border-gray-300 rounded-full">
        Current key Group: {selections.color.keyGroup}
      </h2>

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
        onClick={() => UpdateKeebs(selections, id)}
        className="mt-10 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
      >
        Update Keyboard
      </button>
    </div>
  );
}

export default EditKeyboard;
