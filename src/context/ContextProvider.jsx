import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../utils/firebase.config";

export const Context = createContext(null);

export default function ContextProvider({ children }) {
  const [priceSelected, setpriceSelected] = useState("");
  const [rangeSelected, setRangeSelected] = useState("");
  const [newest, setNewest] = useState("");
  const [user, setUser] = useState(null);
  const [brand, setBrand] = useState([]);
  const [category, setCategory] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProduct, setTotalProduct] = useState(0);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unSubscribe(); // Clean up function when component unmounts
  }, []);

  return (
    <Context.Provider
      value={{
        priceSelected,
        setCurrentPage,
        currentPage,
        user,
        setUser,
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
