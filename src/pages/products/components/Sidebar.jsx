import { useState } from "react";

export default function Sidebar() {
  const [pricerangeSelected, setPricerangeSelected] = useState("");
  const [rangeSelected, setRangeSelected] = useState("");

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setPricerangeSelected(value);
      setRangeSelected(value);
    } else {
      setPricerangeSelected("");
      setRangeSelected("");
    }
  };

  //   if (!queryArray.includes(rangeSelected)) {
  //     queryArray = [...queryArray, rangeSelected];
  //   }
  //   console.log(queryArray);

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
                    checked={pricerangeSelected === "Low_To_High"}
                    className=" transform scale-125 "
                    name="sorting_price"
                    id="Low_To_High"
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="Low_To_High">Low To High</label>
                </div>
                <div className=" flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="High_To_Low"
                    checked={pricerangeSelected === "High_To_Low"}
                    className=" transform scale-125 "
                    name="sorting_price"
                    id="High_To_Low"
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="High_To_Low">Low To High</label>
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
                  onChange={handleCheckboxChange}
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
                    // checked={rangeSelected === "Newest"}
                    className=" transform scale-125 "
                    // name="Newest"
                    id="timefit"
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="timefit">TimeFit</label>
                </div>
                <div className="  flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="crispcook"
                    // checked={rangeSelected === "Newest"}
                    className=" transform scale-125 "
                    // name="Newest"
                    id="crispcook"
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="crispcook">CrispCook</label>
                </div>
                <div className="  flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="techpack"
                    // checked={rangeSelected === "Newest"}
                    className=" transform scale-125 "
                    // name="Newest"
                    id="techpack"
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="techpack">TechPack</label>
                </div>
                <div className="  flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="powerup"
                    // checked={rangeSelected === "Newest"}
                    className=" transform scale-125 "
                    // name="Newest"
                    id="powerup"
                    onChange={handleCheckboxChange}
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
                    // checked={rangeSelected === "Newest"}
                    className=" transform scale-125 "
                    // name="Newest"
                    id="electronics"
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="electronics">Electronics</label>
                </div>
                <div className="  flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="home"
                    // checked={rangeSelected === "Newest"}
                    className=" transform scale-125 "
                    // name="Newest"
                    id="home"
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="home">Home</label>
                </div>
                <div className="  flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="beauty"
                    // checked={rangeSelected === "Newest"}
                    className=" transform scale-125 "
                    // name="Newest"
                    id="beauty"
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="beauty">Beauty</label>
                </div>
                <div className="  flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="tools"
                    // checked={rangeSelected === "Newest"}
                    className=" transform scale-125 "
                    // name="Newest"
                    id="tools"
                    onChange={handleCheckboxChange}
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
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="50">1-50 $</label>
                </div>
                <div className="  flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="100"
                    checked={rangeSelected === "100"}
                    className=" transform scale-125 "
                    // name="Newest"
                    id="100"
                    onChange={handleCheckboxChange}
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
                    onChange={handleCheckboxChange}
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
                    onChange={handleCheckboxChange}
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
                    onChange={handleCheckboxChange}
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
                    onChange={handleCheckboxChange}
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
                    onChange={handleCheckboxChange}
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
