import { Link } from "react-router-dom";

export default function Product({ product, col }) {
  return (
    <div className="productCards">
      <div className="Productcard">
        {product.images.length > 0 && (
          <img
            className="ProductImg"
            src={product.images[0].image}
            alt={product.name}
          />
        )}
        <div className="Productdetails">
          <h5 className="productName">
            <Link className="link" to={`/product/${product._id}`}>
              {product.name}
            </Link>
          </h5>
          <div className="ratings mt-auto">
            <div className="rating-outer">
              <div
                className="rating-inner"
                style={{ width: `${(product.ratings / 5) * 100}%` }}
              ></div>
            </div>
            <span id="no_of_reviews">({product.numOfReviews} Reviews)</span>
          </div>
          <p className="Productprice">${product.price}</p>
          <Link to={`/product/${product._id}`} className="detailsBtn">
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
