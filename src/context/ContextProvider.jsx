import { createContext, useState } from "react";

export const Context = createContext(null);

export default function ContextProvider({ children }) {
  const [priceSelected, setpriceSelected] = useState("");
  const [rangeSelected, setRangeSelected] = useState("");
  const [newest, setNewest] = useState("");
  const [brand, setBrand] = useState([]);
  const [category, setCategory] = useState([]);
  const [totalProduct, setTotalProduct] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [updateProduct, setUpdateProduct] = useState();
  return (
    <Context.Provider
      value={{
        priceSelected,
        setCurrentPage,
        currentPage,

        setTotalProduct,
        totalProduct,
        setpriceSelected,
        rangeSelected,
        setRangeSelected,
        newest,
        setNewest,
        brand,
        setBrand,
        category,
        setCategory,
      }}
    >
      {children}
    </Context.Provider>
  );
}
