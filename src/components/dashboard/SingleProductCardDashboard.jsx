/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import toast from "react-hot-toast";

// eslint-disable-next-line react/prop-types
const SingleProductCardDashboard = ({ shoe, onDelete }) => {
  const { id, title, brand, price, description, image_url } = shoe;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/shoes/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        onDelete(id);
        setIsModalOpen(false);
        toast.success("Product Delete Successful");
      });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="h-96 w-full">
          <img
            className="rounded-t-lg h-full w-full object-cover"
            src={image_url}
            alt="product image"
          />
        </div>
        <div className="card-body">
          <div className="flex items-center gap-2">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900">
              {title}
            </h5>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              {brand}
            </span>
          </div>

          <div>
            <span className="text-2xl font-bold text-gray-900">${price}</span>
          </div>
          <p className="text-gray-600">{description}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-indigo-500 text-white">
              <Link to={`productDetails/${id}`}>See details</Link>
            </button>
            <button className="btn bg-green-600 text-white">
              <Link to={`edit/${id}`}>Edit</Link>
            </button>
            <label
              onClick={() => setIsModalOpen(id)}
              htmlFor="modal"
              type="button"
              className="btn bg-red-500 text-white"
            >
              Delete
            </label>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal
          close={closeModal}
          message={`Are you sure you want to delete this product?`}
          success={handleDelete}
          data={id}
        ></Modal>
      )}
    </>
  );
};

export default SingleProductCardDashboard;
