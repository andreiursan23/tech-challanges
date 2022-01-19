import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="product-box">
      <div className="img-card">
        <div className="img-container">
          <Image
            alt={product.name}
            src={product.imageURL}
            loading="lazy"
            layout="fill"
            objectFit="contain"
          />
          <div className="brand">
            <p>{product.brand}</p>
          </div>
        </div>
      </div>

      <div className="product-details">
        <p className="product-title">
          {product.brand} {product.name}
        </p>

        <div>
          {product.warehouseStock.length === 0 ? (
            <div className="flex product-sizes">
              <span className="product-size-box">
                <p>Out of stock</p>
              </span>
            </div>
          ) : (
            <ul className="flex product-sizes">
              {product.warehouseStock.map((item) => (
                <li className="product-size-box" key={item.size}>
                  <p>{item.size}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        <p className="product-price">
          {product.price.toLocaleString("ro-RO")} lei
        </p>
      </div>
    </div>
  );
}
