import Nav from "./components/Nav";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import SelectKeyboard from "./pages/create/SelectKeyboard";
import SelectSwitch from "./pages/create/SelectSwitch";
import SelectColors from "./pages/create/SelectColors";
import AllCreations from "./pages/view/AllCreations";
import OneKeeb from "./pages/view/OneKeeb";
import EditKeeb from "./pages/edit/EditKeeb";

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
    {
      path: "/all",
      element: <AllCreations />,
    },
    {
      path: "/all/:id",
      element: <OneKeeb />,
    },
    {
      path: "/edit/:id",
      element: <EditKeeb />,
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
