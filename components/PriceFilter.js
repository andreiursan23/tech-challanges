import React from "react";

function PriceFilter({
  db,
  updateFilteredList,
  sizeFilter,
  setSizeFilter,
  brandFilter,
  setBrandFilter,
  categoryFilter,
  setCategoryFilter,
  minPriceFilter,
  setMinPriceFilter,
  maxPriceFilter,
  setMaxPriceFilter,
}) {
  const filterByMinimumPrice = (inputMinPrice) => {
    // Reset all filters when value "0" is inputed
    if (inputMinPrice === "0") {
      setSizeFilter("");
      setBrandFilter("");
      setCategoryFilter("");
      setMinPriceFilter(0);
      setMaxPriceFilter(9999);
      return updateFilteredList(db);
    }

    let filteredList = [];
    let sizeMatch = false;

    db.forEach((product) => {
      product.warehouseStock.length !== 0 &&
        product.warehouseStock.forEach((item) => {
          if (item.size.includes(sizeFilter)) {
            sizeMatch = true;
          }
        });

      if (
        sizeMatch &&
        product.brand.includes(brandFilter) &&
        product.category.includes(categoryFilter) &&
        product.price >= inputMinPrice &&
        product.price <= maxPriceFilter
      ) {
        filteredList.push(product);
      }

      sizeMatch = false;
    });

    updateFilteredList(filteredList);

    setMinPriceFilter(inputMinPrice);
  };

  const filterByMaximumPrice = (inputMaxPrice) => {
    // Reset all filters when value "9999" is inputed
    if (inputMaxPrice === "9999") {
      setSizeFilter("");
      setBrandFilter("");
      setCategoryFilter("");
      setMinPriceFilter(0);
      setMaxPriceFilter(9999);
      return updateFilteredList(db);
    }

    let filteredList = [];
    let sizeMatch = false;

    db.forEach((product) => {
      product.warehouseStock.length !== 0 &&
        product.warehouseStock.forEach((item) => {
          if (item.size.includes(sizeFilter)) {
            sizeMatch = true;
          }
        });

      if (
        sizeMatch &&
        product.brand.includes(brandFilter) &&
        product.category.includes(categoryFilter) &&
        product.price >= minPriceFilter &&
        product.price <= inputMaxPrice
      ) {
        filteredList.push(product);
      }

      sizeMatch = false;
    });

    updateFilteredList(filteredList);

    setMaxPriceFilter(inputMaxPrice);
  };

  return (
    <div className="filter">
      <label htmlFor="price-filter">Pick a price range:</label>
      <input
        type="number"
        placeholder="Minimum price"
        id="price-filter"
        onChange={(e) => filterByMinimumPrice(e.target.value)}
        value={minPriceFilter}
      />
      <input
        type="number"
        placeholder="Maximum price"
        id="price-filter"
        onChange={(e) => filterByMaximumPrice(e.target.value)}
        value={maxPriceFilter}
      />
    </div>
  );
}

export default PriceFilter;
