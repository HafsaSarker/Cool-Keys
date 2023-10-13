import { createContext, useState } from "react";

export const SelectionsContext = createContext();

export const SelectionsProvider = ({ children }) => {
  const [selections, setSelections] = useState({
    keyboard: "",
    color: "",
    switchType: "",
  });

  return (
    <SelectionsContext.Provider value={{ selections, setSelections }}>
      {children}
    </SelectionsContext.Provider>
  );
};
