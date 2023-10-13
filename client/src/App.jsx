import Nav from "./components/Nav";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import SelectKeyboard from "./pages/create/SelectKeyboard";
import SelectSwitch from "./pages/create/SelectSwitch";
import SelectColors from "./pages/create/SelectColors";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/keyboards",
      element: <SelectKeyboard />,
    },
    {
      path: "/switches",
      element: <SelectSwitch />,
    },
    {
      path: "/colors",
      element: <SelectColors />,
    },
  ]);
  return (
    <div className="h-full overflow-y-scroll">
      <Nav />
      {element}
    </div>
  );
}

export default App;
