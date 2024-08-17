import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../context/ContextProvider";

export default function Products() {
  const {
    currentPage,
    brand,
    category,
    rangeSelected,
    priceSelected,
    setTotalProduct,
  } = useContext(Context);
  const brandString = brand.join(",");
  const categoryString = category.join(",");
  const [data, setData] = useState([]);
  // const [totalProduct, setTotalProduct] = useState(0);

  console.log(currentPage, priceSelected);
  const {
    data: allProduct,
    isFetching,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:5000/allProducts?page=${currentPage}&price=${priceSelected}&brand=${brandString}&category=${categoryString}&range=${rangeSelected}`
      );
      setTotalProduct(response.data.totalCount);
      console.log(response.data.totalCount);
      return response.data.allProducts;
    },
  });

  console.log(allProduct);
  useEffect(() => {
    refetch();
  }, [currentPage, refetch, priceSelected, brand, category, rangeSelected]);
  useEffect(() => {
    setData(allProduct);
  }, [allProduct]);
  if (isFetching || isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className=" grid grid-cols-3 gap-10">
      {data?.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
  );
}
