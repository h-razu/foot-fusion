import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const shoe = useLoaderData();

  const { brand, description, image_url, price, title } = shoe;

  return (
    <div className="bg-gray-100 p-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-2 flex-col md:justify-between md:items-center md:flex-row -mx-4 bg-white rounded-lg">
          <div className="md:flex-1">
            <div className="h-[460px] rounded-lg bg-gray-300">
              <img
                className="w-full h-full object-cover"
                src={image_url}
                alt="Product Image"
              />
            </div>
          </div>
          <div className="md:flex-1 p-4">
            <h2 className="text-4xl font-bold text-gray-800 md:mb-5">
              {title}
            </h2>
            <div className="mr-4 md:mb-4">
              <span className="font-semibold text-gray-700">Brand: </span>
              <span className="font-bold text-gray-600">{brand}</span>
            </div>
            <div className="mr-4 md:mb-4">
              <span className="font-semibold text-gray-700">Price: </span>
              <span className="font-bold text-gray-600">${price}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">
                Product Description:
              </span>
              <p className="text-gray-600 text-md mt-2">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
