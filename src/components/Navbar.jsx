import { NavLink } from "react-router-dom";
import Logo from "../assets/shop-logo.png";
import { useContext, useState } from "react";
import { Context } from "../context/ContextProvider";
import { signOut } from "firebase/auth";
import auth from "../utils/firebase.config";
import { MdOutlineClose } from "react-icons/md";
import Swal from "sweetalert2";
export default function Navbar() {
  const { user, setUser } = useContext(Context);
  const [open, setOpen] = useState(false);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Successfully Log Out",
        });

        setUser(null);
      })
      .catch((err) => [console.log(err)]);
  };

  const handleDrawer = () => {
    setOpen(true);
  };
  const closeDrawer = () => {
    setOpen(false);
  };
  console.log(open);
  return (
    <>
      <header className=" w-full  mt-4 bg-white rounded-lg drop-shadow-lg px-3 py-4">
        <nav className=" flex justify-between items-center">
          <div>
            <img className=" w-28" src={Logo} alt="logo" />
          </div>
          <div
            onClick={handleDrawer}
            className=" lg:hidden flex flex-col gap-2"
          >
            <div className=" w-7 h-[2px] bg-black"></div>
            <div className=" w-7 h-[2px] bg-black"></div>
            <div className=" w-7 h-[2px] bg-black"></div>
          </div>
          <div className=" hidden lg:block">
            <ul className=" flex gap-5 text-lg ">
              <li className=" py-1 font-sm  px-4 rounded-lg cursor-pointer">
                Home
              </li>
              <NavLink to={"/"}>
                <li className=" py-1 font-sm  px-4 rounded-lg cursor-pointer">
                  Products
                </li>
              </NavLink>
              <li className=" py-1 font-sm  px-4 rounded-lg cursor-pointer">
                Category
              </li>
              <li className=" py-1 font-sm  px-4 rounded-lg cursor-pointer">
                Cart
              </li>
              <li className=" py-1 font-sm  px-4 rounded-lg cursor-pointer">
                Contact
              </li>
              {user ? (
                <li
                  onClick={handleLogOut}
                  className=" py-1 font-sm  px-4 rounded-lg cursor-pointer"
                >
                  LogOut
                </li>
              ) : (
                <NavLink to={"/login"}>
                  <li className=" py-1 font-sm  px-4 rounded-lg cursor-pointer">
                    Login
                  </li>
                </NavLink>
              )}
            </ul>
          </div>
        </nav>
        {/* drawer */}
      </header>
      <div
        className={`absolute z-10 top-0 w-full left-0 lg:hidden transition-all ${
          open
            ? " translate-x-0 "
            : " sm:-translate-x-[1000px] -translate-x-[700px] "
        } h-screen bg-slate-200 `}
      >
        <div
          onClick={closeDrawer}
          className=" flex justify-end relative right-5 top-5 text-4xl"
        >
          <MdOutlineClose />
        </div>

        <div>
          <ul className=" flex flex-col gap-5 text-lg ">
            <li
              onClick={closeDrawer}
              className=" py-1 font-sm  px-4 rounded-lg cursor-pointer"
            >
              Home
            </li>
            <NavLink to={"/"}>
              <li
                onClick={closeDrawer}
                className=" py-1 font-sm  px-4 rounded-lg cursor-pointer"
              >
                Products
              </li>
            </NavLink>
            <li className=" py-1 font-sm  px-4 rounded-lg cursor-pointer">
              Category
            </li>
            <li className=" py-1 font-sm  px-4 rounded-lg cursor-pointer">
              Cart
            </li>
            <li className=" py-1 font-sm  px-4 rounded-lg cursor-pointer">
              Contact
            </li>
            {user ? (
              <li
                onClick={() => {
                  handleLogOut();
                  closeDrawer();
                }}
                className=" py-1 font-sm  px-4 rounded-lg cursor-pointer"
              >
                LogOut
              </li>
            ) : (
              <NavLink to={"/login"}>
                <li
                  onClick={closeDrawer}
                  className=" py-1 font-sm  px-4 rounded-lg cursor-pointer"
                >
                  Login
                </li>
              </NavLink>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
