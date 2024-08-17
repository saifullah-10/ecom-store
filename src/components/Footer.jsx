import Logo from "../assets/shop-logo.png";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer>
      <div className=" bg-slate-200 rounded-lg p-1 lg:p-8 mb-5">
        <div className=" flex flex-col-reverse lg:flex-row gap-5 justify-between items-center px-8">
          <div className="flex flex-1 flex-col items-center">
            <img className=" w-32" src={Logo} alt="" />
            <p>A Reliable E-commarce Website </p>
          </div>
          <div className=" flex-1 flex justify-center">
            <ul className=" text-2xl flex gap-8">
              <li className=" cursor-pointer">
                <SlSocialFacebook />
              </li>
              <li className=" cursor-pointer">
                <FaInstagram />
              </li>
              <li className=" cursor-pointer">
                <FaXTwitter />
              </li>
              <li></li>
            </ul>
          </div>
          <div className="flex-1 flex  justify-center">
            <ul className=" text-lg flex  flex-col gap-1">
              <li className=" cursor-pointer hover:text-orange-600">Home</li>
              <li className=" cursor-pointer hover:text-orange-600">
                Products
              </li>
              <li className=" cursor-pointer hover:text-orange-600">
                Category
              </li>
              <li className=" cursor-pointer hover:text-orange-600">Cart</li>
              <li className=" cursor-pointer hover:text-orange-600">Contact</li>
              <li className=" cursor-pointer hover:text-orange-600">Contact</li>
              <li className=" cursor-pointer hover:text-orange-600">Login</li>
            </ul>
          </div>
        </div>

        <div className=" my-3 h-[1px] bg-black mx-5"></div>
        <div className=" flex justify-center ">
          <p className=" text-sm ">&copy; ShopZen All Right Reserve</p>
        </div>
      </div>
    </footer>
  );
}
