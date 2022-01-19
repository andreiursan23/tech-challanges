import { useState } from "react/cjs/react.development";
import SizeFilter from "../components/SizeFilter";
import BrandFilter from "./BrandFilter";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";

function Filters({ db, updateFilteredList }) {
  const [sizeFilter, setSizeFilter] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [minPriceFilter, setMinPriceFilter] = useState(0);
  const [maxPriceFilter, setMaxPriceFilter] = useState(9999);

  const resetFilters = () => {
    setSizeFilter("");
    setBrandFilter("");
    setCategoryFilter("");
    setMinPriceFilter(0);
    setMaxPriceFilter(9999);

    updateFilteredList(db);
  };

  return (
    <>
      <p className="filter-title filter-container">Filter by:</p>
      <div className="flex flex-wrap filter-container">
        <SizeFilter
          db={db}
          updateFilteredList={updateFilteredList}
          sizeFilter={sizeFilter}
          setSizeFilter={setSizeFilter}
          brandFilter={brandFilter}
          setBrandFilter={setBrandFilter}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          minPriceFilter={minPriceFilter}
          setMinPriceFilter={setMinPriceFilter}
          maxPriceFilter={maxPriceFilter}
          setMaxPriceFilter={setMaxPriceFilter}
        />

        <BrandFilter
          db={db}
          updateFilteredList={updateFilteredList}
          sizeFilter={sizeFilter}
          setSizeFilter={setSizeFilter}
          brandFilter={brandFilter}
          setBrandFilter={setBrandFilter}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          minPriceFilter={minPriceFilter}
          setMinPriceFilter={setMinPriceFilter}
          maxPriceFilter={maxPriceFilter}
          setMaxPriceFilter={setMaxPriceFilter}
        />

        <CategoryFilter
          db={db}
          updateFilteredList={updateFilteredList}
          sizeFilter={sizeFilter}
          setSizeFilter={setSizeFilter}
          brandFilter={brandFilter}
          setBrandFilter={setBrandFilter}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          minPriceFilter={minPriceFilter}
          setMinPriceFilter={setMinPriceFilter}
          maxPriceFilter={maxPriceFilter}
          setMaxPriceFilter={setMaxPriceFilter}
        />

        <PriceFilter
          db={db}
          updateFilteredList={updateFilteredList}
          sizeFilter={sizeFilter}
          setSizeFilter={setSizeFilter}
          brandFilter={brandFilter}
          setBrandFilter={setBrandFilter}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          minPriceFilter={minPriceFilter}
          setMinPriceFilter={setMinPriceFilter}
          maxPriceFilter={maxPriceFilter}
          setMaxPriceFilter={setMaxPriceFilter}
        />
      </div>
      <div className="flex flex-wrap justify-start filter-container">
        <button onClick={resetFilters}>Reset all filters</button>
      </div>
    </>
  );
}

export default Filters;
