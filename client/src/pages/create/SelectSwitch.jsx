import React, { useContext } from "react";
import { SelectionsContext } from "../../context/SelectionsContext";

function SelectSwitch() {
  const { selections, setSelections } = useContext(SelectionsContext);
  console.log(selections);
  return (
    <div>
      <h1>hi</h1>
    </div>
  );
}

export default SelectSwitch;
