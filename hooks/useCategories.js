import { useEffect, useState } from "react";

export const useCategories = (db) => {
  const [sizesArr, setSizesArr] = useState([]);
  const [brandArr, setBrandArr] = useState([]);
  const [categArr, setCategArr] = useState([]);

  useEffect(() => {
    let sizesArray = ["All"];
    let brandArray = ["All"];
    let categoryArray = [];

    db.forEach((product) => {
      // Create all sizes options for the Size select
      product.warehouseStock.length !== 0 &&
        product.warehouseStock.forEach((item) => {
          if (sizesArray.indexOf(item.size) === -1) {
            sizesArray.push(item.size);
          }
        });

      // Create all brands options for the Brand select
      if (brandArray.indexOf(product.brand) === -1) {
        brandArray.push(product.brand);
      }

      // Create all category options for the Category select
      if (categoryArray.indexOf(product.category) === -1) {
        categoryArray.push(product.category);
      }
    });

    setSizesArr(sizesArray);
    setBrandArr(brandArray);
    setCategArr(categoryArray);
  }, []);

  return { sizesArr, brandArr, categArr };
};
