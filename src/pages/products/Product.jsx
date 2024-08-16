import { useContext } from "react";
import Pagination from "./components/Pagination";
import ProductCard from "./components/ProductCard";
import Sidebar from "./components/Sidebar";
import { Context } from "../../context/ContextProvider";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function Product() {
  const {
    priceSelected,
    rangeSelected,
    newest,
    brand,
    category,
    setTotalProduct,
  } = useContext(Context);
  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.search.value;
    console.log(value);
  };

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const response = await axios.post("http://localhost:5000/products", {
          price: priceSelected,
          range: rangeSelected,
          newest: newest,
          brand: brand,
          category: category,
          productPerPage: 9,
        });
        return response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
      }
    },
    // staleTime: 1000 * 60, // 1 minute
    // refetchInterval: 1000 * 60, // 1 minute
  });
  console.log(data);
  setTotalProduct(data?.length);
  // try {
  //   const data = axios.post("http://localhost:5000/products", {
  //     price: priceSelected,
  //     range: rangeSelected,
  //     newest: newest,
  //     brand: brand,
  //     category: category,
  //   });
  //   console.log(data);
  // } catch (err) {
  //   console.log(err);
  // }

  if (isFetching || isLoading) {
    return <div>Loading...</div>;
  }
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
          <div className=" grid grid-cols-3 gap-10">
            {data.map((product) => (
              <ProductCard data={product} key={product._id} />
            ))}
          </div>
          <div className=" flex justify-center my-2">
            <Pagination />
          </div>
        </div>
      </div>
    </section>
  );
}
