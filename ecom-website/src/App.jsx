import { Outlet } from "react-router-dom";
import NavItem from "./components/NavItem";

function App() {
  return (
    <>
      <div>
        <NavItem />
        <Outlet />
      </div>
    </>
  );
}

export default App;
