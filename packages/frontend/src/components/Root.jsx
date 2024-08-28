import { Outlet } from "react-router-dom";
import NavBar from "./pages/NavBar";

function Root() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default Root;
