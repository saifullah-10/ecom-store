import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const Context = createContext(null);

export default function ContextProvider({ children }) {
  const [priceSelected, setpriceSelected] = useState("");
  const [rangeSelected, setRangeSelected] = useState("");
  const [newest, setNewest] = useState("");
  const [brand, setBrand] = useState([]);
  const [category, setCategory] = useState([]);
  const [searchValue, setSearchValue] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProduct, setTotalProduct] = useState(0);

  return (
    <Context.Provider
      value={{
        priceSelected,
        setCurrentPage,
        currentPage,
        searchValue,
        setSearchValue,
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

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
