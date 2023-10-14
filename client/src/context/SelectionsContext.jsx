import { createContext, useState } from "react";

export const SelectionsContext = createContext();

export const SelectionsProvider = ({ children }) => {
  const [selections, setSelections] = useState({
    name: "",
    keyboard: "",
    color: {
      keyGroup: "",
      swatch: "",
    },
    switchType: "",
  });

  return (
    <SelectionsContext.Provider value={{ selections, setSelections }}>
      {children}
    </SelectionsContext.Provider>
  );
};
