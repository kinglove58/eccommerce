import { Outlet } from "react-router-dom";
import NavItem from "./components/NavItem";

function App() {
  return (
    <>
      <NavItem />
      <Outlet />
    </>
  );
}

export default App;
