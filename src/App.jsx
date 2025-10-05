import Navbar from "../src/components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../src/components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
