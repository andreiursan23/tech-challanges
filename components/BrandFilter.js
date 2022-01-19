import { useCategories } from "../hooks/useCategories";

function BrandFilter({
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
  const { brandArr } = useCategories(db);

  const filterByBrand = (selectedBrand) => {
    // Reset all filters when category "All" is selected
    if (selectedBrand === "All") {
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
        product.brand.includes(selectedBrand) &&
        product.category.includes(categoryFilter) &&
        product.price >= minPriceFilter &&
        product.price <= maxPriceFilter
      ) {
        filteredList.push(product);
      }

      sizeMatch = false;
    });

    updateFilteredList(filteredList);

    setBrandFilter(selectedBrand);
  };

  return (
    <div className="filter">
      <label htmlFor="brand-select">Choose a brand:</label>
      <select
        name="brand"
        id="brand-select"
        onChange={(e) => filterByBrand(e.target.value)}
        value={brandFilter}
      >
        {brandArr.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </div>
  );
}

export default BrandFilter;
