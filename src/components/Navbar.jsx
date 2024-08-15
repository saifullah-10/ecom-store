import Logo from "../assets/shop-logo.png";
export default function Navbar() {
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
            <li className=" py-1 font-sm  px-4 rounded-lg cursor-pointer">
              Products
            </li>
            <li className=" py-1 font-sm  px-4 rounded-lg cursor-pointer">
              Category
            </li>
            <li className=" py-1 font-sm  px-4 rounded-lg cursor-pointer">
              Cart
            </li>
            <li className=" py-1 font-sm  px-4 rounded-lg cursor-pointer">
              Contact
            </li>
            <li className=" py-1 font-sm  px-4 rounded-lg cursor-pointer">
              Login
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
