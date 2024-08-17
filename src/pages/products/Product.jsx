import Pagination from "./components/Pagination";

import Sidebar from "./components/Sidebar";

import Products from "./components/Products";
import { useContext } from "react";
import { Context } from "../../context/ContextProvider";

export default function Product() {
  const { setSearchValue } = useContext(Context);

  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.search.value;

    setSearchValue(value);
  };

  return (
    <section>
      <div className=" flex gap-10 my-5">
        <Sidebar />
        <div className=" flex-1 ">
          <div className=" flex mb-10 justify-center">
            <form onSubmit={handleSearch}>
              <fieldset className="border-2 px-5 flex rounded-full overflow-hidden">
                <input
                  type="text"
                  name="search"
                  className=" rounded-xl py-2 pr-4 outline-none text-lg w-96 "
                />
                <input
                  type="submit"
                  className="    cursor-pointer"
                  value="Search"
                />
              </fieldset>
            </form>
          </div>
          <div>
            <Products />
          </div>
          <div className=" flex justify-center my-2">
            <Pagination />
          </div>
        </div>
      </div>
    </section>
  );
}
