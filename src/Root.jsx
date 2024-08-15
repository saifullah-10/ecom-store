import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Home from "./pages/home/Home";

export default function Root() {
  return (
    <section className=" max-w-[1440px] w-[90%] mx-auto">
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </section>
  );
}
