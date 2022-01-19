import { useState } from "react";
import React from "react";
import Head from "next/head";

import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";

export const getStaticProps = async () => {
  const res = await fetch("https://www.theoutfit.ro/test-react/");
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
};

export default function Home({ products }) {
  const [filteredList, setFilteredList] = useState(products);

  const updateFilteredList = (newProducts) => {
    setFilteredList([...newProducts]);
  };

  return (
    <>
      <Head>
        <title>The Outfit Tech Challange</title>
        <meta name="description" content="The Outfit tech challange" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="all-products-box">
        <Filters db={products} updateFilteredList={updateFilteredList} />

        <ul className="flex flex-wrap justify-center">
          {filteredList.length === 0 ? (
            <div>No products. Please try a different search.</div>
          ) : (
            filteredList.map((product) => (
              <li key={product.productId}>
                <ProductCard product={product} />
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
}
