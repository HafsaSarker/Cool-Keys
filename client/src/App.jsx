import Nav from "./components/Nav";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    // {
    //   path: "/locations/:location",
    //   element: <Location />,
    // },
    // {
    //   path: "/events",
    //   element: <AllEvents />,
    // },
  ]);
  return (
    <div className="h-full">
      <Nav />
      {element}
    </div>
  );
}

export default App;
