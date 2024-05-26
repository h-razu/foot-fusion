/* eslint-disable no-undef */
import SingleProduct from "../SingleProduct";

// eslint-disable-next-line react/prop-types
const Products = ({ data }) => {
  return (
    <div>
      <h1 className="my-8 text-3xl font-bold text-center">Our Products</h1>

      <div className="flex gap-8 justify-center items-center ">
        {
          // eslint-disable-next-line react/prop-types
          data.slice(0, 3).map((shoe) => (
            <SingleProduct key={shoe.id} shoe={shoe} />
          ))
        }
      </div>
    </div>
  );
};

export default Products;
