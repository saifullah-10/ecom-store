import ProductCard from "./components/ProductCard";
import Sidebar from "./components/Sidebar";

export default function Product() {
  return (
    <section>
      <div className=" flex gap-10 my-5">
        <Sidebar />
        <div className=" flex-1 ">
          <div className=" flex mb-10 justify-center">
            <form>
              <fieldset className="border-2 px-5 flex rounded-full overflow-hidden">
                <input
                  type="text"
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
          <div className=" grid grid-cols-3 gap-10">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </section>
  );
}
