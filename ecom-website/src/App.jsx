import { Outlet } from "react-router-dom";
import NavItem from "./components/NavItem";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <NavItem />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
