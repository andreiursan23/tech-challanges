import { useCategories } from "../hooks/useCategories";

function SizeFilter({
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
  const { sizesArr } = useCategories(db);

  const filterBySize = (selectedSize) => {
    // Reset all filters when category "All" is selected
    if (selectedSize === "All") {
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
          if (item.size.includes(selectedSize)) {
            sizeMatch = true;
          }
        });

      if (
        sizeMatch &&
        product.brand.includes(brandFilter) &&
        product.category.includes(categoryFilter) &&
        product.price >= minPriceFilter &&
        product.price <= maxPriceFilter
      ) {
        filteredList.push(product);
      }

      sizeMatch = false;
    });

    updateFilteredList(filteredList);

    setSizeFilter(selectedSize);
  };

  return (
    <div className="filter">
      <label htmlFor="size-select">Choose a size:</label>
      <select
        name="sizes"
        id="size-select"
        onChange={(e) => filterBySize(e.target.value)}
        value={sizeFilter}
      >
        {sizesArr.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SizeFilter;
