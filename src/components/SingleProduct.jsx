import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleProduct = ({ shoe }) => {
  const { id, title, brand, price, image_url } = shoe;

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <div className="h-96 w-full">
        <img
          className="rounded-t-lg h-full w-full object-cover"
          src={image_url}
          alt="product image"
        />
      </div>

      <div className="p-3">
        <div className="flex items-center mt-2.5 mb-5 gap-2">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {brand}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">${price}</span>

          <Link to={`/products/${id}`}>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              See details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
