import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const activeNav = {
    color: "#009B4D",
    background: "none",
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 bg-gray-300 min-h-screen p-12">
        <ul className="flex flex-col gap-y-7">
          <li>
            <NavLink
              to={"home"}
              className="text-2xl font-semibold"
              style={({ isActive }) => (isActive ? activeNav : undefined)}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"all-products"}
              className="text-2xl font-semibold"
              style={({ isActive }) => (isActive ? activeNav : undefined)}
            >
              All Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"add-products"}
              className="text-2xl font-semibold"
              style={({ isActive }) => (isActive ? activeNav : undefined)}
            >
              Add Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/"}
              className="text-2xl font-semibold"
              style={({ isActive }) => (isActive ? activeNav : undefined)}
            >
              Home
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="col-span-10 p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
