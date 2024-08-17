import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../context/ContextProvider";

export default function Sidebar() {
  // const [priceSelected, setpriceSelected] = useState("");
  // const [rangeSelected, setRangeSelected] = useState("");
  // const [newest, setNewest] = useState("");
  // const [brand, setBrand] = useState([]);
  // const [category, setCategory] = useState([]);

  const {
    priceSelected,
    rangeSelected,
    setRangeSelected,
    setpriceSelected,
    setNewest,
    setBrand,
    setCategory,
  } = useContext(Context);

  // console.log(priceSelected, rangeSelected, category, newest, brand);

  // useEffect(() => {
  //   try {
  //     const data = {
  //       price: priceSelected,
  //       range: rangeSelected,
  //       newest,
  //       brand,
  //       category,
  //     };
  //     axios
  //       .post("http://localhost:5000/products", data)
  //       .then((res) => {
  //         console.log(res.data);
  //       })
  //       .catch((err) => console.log(err));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, [brand, category, priceSelected, rangeSelected, newest]);

  const handleRangeChange = (e) => {
    const range = e.target.value;
    if (e.target.checked) {
      setRangeSelected(range);
    } else {
      setRangeSelected("");
    }
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setpriceSelected(value);
    } else {
      setpriceSelected("");
    }
  };
  const handleNewestChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setNewest(value);
    } else {
      setNewest("");
    }
  };
  const handleBrandChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setBrand((pre) => [...pre, value]);
    } else {
      setBrand((pre) => pre.filter((item) => item !== value));
    }
  };
  const handleCategory = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setCategory((pre) => [...pre, value]);
      // setBrand(value);
    } else {
      setCategory((pre) => pre.filter((item) => item !== value));
    }
  };

  return (
    <aside>
      <div className=" p-5 border-2 rounded-xl">
        <div>
          <div>
            <form>
              <p className=" text-lg">Price:</p>
              {/* price */}
              <div>
                <div className=" flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="Low_To_High"
                    checked={priceSelected === "Low_To_High"}
                    className=" transform scale-125 "
                    name="sorting_price"
                    id="Low_To_High"
                    onChange={handlePriceChange}
                  />
                  <label htmlFor="Low_To_High">Low To High</label>
                </div>
                <div className=" flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="High_To_Low"
                    checked={priceSelected === "High_To_Low"}
                    className=" transform scale-125 "
                    name="sorting_price"
                    id="High_To_Low"
                    onChange={handlePriceChange}
                  />
                  <label htmlFor="High_To_Low">High To Low</label>
                </div>
              </div>
              {/* price */}
              {/* newest */}
              <div className=" mt-8 flex items-center gap-2">
                <input
                  type="checkbox"
                  value="Newest"
                  className=" transform scale-125 "
                  id="Newest"
                  onChange={handleNewestChange}
                />
                <label htmlFor="Newest">Newest</label>
              </div>
              {/* newest */}
              {/* brand */}
              <div className=" mt-8">
                <p className=" text-lg">Brand:</p>
                <div className="  flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="timefit"
                    className=" transform scale-125 "
                    id="timefit"
                    onChange={handleBrandChange}
                  />
                  <label htmlFor="timefit">TimeFit</label>
                </div>
                <div className="  flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="crispcook"
                    className=" transform scale-125 "
                    id="crispcook"
                    onChange={handleBrandChange}
                  />
                  <label htmlFor="crispcook">CrispCook</label>
                </div>
                <div className="  flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="techpack"
                    className=" transform scale-125 "
                    id="techpack"
                    onChange={handleBrandChange}
                  />
                  <label htmlFor="techpack">TechPack</label>
                </div>
                <div className="  flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="powerup"
                    className=" transform scale-125 "
                    id="powerup"
                    onChange={handleBrandChange}
                  />
                  <label htmlFor="powerup">PowerUp</label>
                </div>
              </div>
              {/* brand */}
              {/* category */}
              <div className=" mt-8">
                <p className=" text-lg">Category:</p>
                <div className="  flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="electronics"
                    className=" transform scale-125 "
                    id="electronics"
                    onChange={handleCategory}
                  />
                  <label htmlFor="electronics">Electronics</label>
                </div>
                <div className="  flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="home"
                    className=" transform scale-125 "
                    id="home"
                    onChange={handleCategory}
                  />
                  <label htmlFor="home">Home</label>
                </div>
                <div className="  flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="beauty"
                    className=" transform scale-125 "
                    id="beauty"
                    onChange={handleCategory}
                  />
                  <label htmlFor="beauty">Beauty</label>
                </div>
                <div className="  flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="tools"
                    className=" transform scale-125 "
                    id="tools"
                    onChange={handleCategory}
                  />
                  <label htmlFor="tools">Tools</label>
                </div>
              </div>
              {/* category */}
              {/* price range */}
              <div className=" mt-8">
                <p className=" text-lg">Price Range:</p>
                <div className="  flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="50"
                    checked={rangeSelected === "50"}
                    className=" transform scale-125 "
                    name="50"
                    id="50"
                    onChange={handleRangeChange}
                  />
                  <label htmlFor="50">1-50 $</label>
                </div>
                <div className="  flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="100"
                    checked={rangeSelected === "100"}
                    className=" transform scale-125 "
                    id="100"
                    onChange={handleRangeChange}
                  />
                  <label htmlFor="100">51-100 $</label>
                </div>
                <div className="  flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="150"
                    checked={rangeSelected === "150"}
                    className=" transform scale-125 "
                    name="150"
                    id="150"
                    onChange={handleRangeChange}
                  />
                  <label htmlFor="beauty">101-150 $</label>
                </div>
                <div className="  flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="200"
                    checked={rangeSelected === "200"}
                    className=" transform scale-125 "
                    name="200"
                    id="tools"
                    onChange={handleRangeChange}
                  />
                  <label htmlFor="200">151-200 $</label>
                </div>
                <div className="  flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="250"
                    checked={rangeSelected === "250"}
                    className=" transform scale-125 "
                    name="250"
                    id="250"
                    onChange={handleRangeChange}
                  />
                  <label htmlFor="250">201-250 $</label>
                </div>
                <div className="  flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="300"
                    checked={rangeSelected === "300"}
                    className=" transform scale-125 "
                    name="300"
                    id="tools"
                    onChange={handleRangeChange}
                  />
                  <label htmlFor="300">251-300 $</label>
                </div>
                <div className="  flex items-center gap-2">
                  <input
                    type="checkbox"
                    value=">300"
                    checked={rangeSelected === ">300"}
                    className=" transform scale-125 "
                    name=">300"
                    id=">300"
                    onChange={handleRangeChange}
                  />
                  <label htmlFor=">300"> up to 300 $</label>
                </div>
              </div>
              {/* price range */}
            </form>
          </div>
        </div>
      </div>
    </aside>
  );
}
