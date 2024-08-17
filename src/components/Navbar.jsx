import { NavLink } from "react-router-dom";
import Logo from "../assets/shop-logo.png";
import { useContext } from "react";
import { Context } from "../context/ContextProvider";
import { signOut } from "firebase/auth";
import auth from "../utils/firebase.config";
export default function Navbar() {
  const { user, setUser } = useContext(Context);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((err) => [console.log(err)]);
  };
  return (
    <header className="  mt-4 bg-white rounded-lg drop-shadow-lg px-3 py-4">
      <nav className=" flex justify-between items-center">
        <div>
          <img className=" w-28" src={Logo} alt="logo" />
        </div>
        <div>
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
    </header>
  );
}
