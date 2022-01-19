import { useCategories } from "../hooks/useCategories";

function CategoryFilter({
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
  const { categArr } = useCategories(db);

  const filterByCategory = (selectedCategory) => {
    // Reset all filters when category "All" is selected
    if (selectedCategory === "all") {
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
        product.category.includes(selectedCategory) &&
        product.price >= minPriceFilter &&
        product.price <= maxPriceFilter
      ) {
        filteredList.push(product);
      }

      sizeMatch = false;
    });

    updateFilteredList(filteredList);

    setCategoryFilter(selectedCategory);
  };

  return (
    <div className="filter">
      <label htmlFor="brand-select">Choose a category:</label>
      <select
        name="brand"
        id="brand-select"
        onChange={(e) => filterByCategory(e.target.value)}
        value={categoryFilter}
      >
        <option value="all">All</option>
        {categArr.map((categ) => (
          <option key={categ} value={categ}>
            {categ}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
