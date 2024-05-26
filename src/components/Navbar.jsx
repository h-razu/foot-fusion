import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            {!user && (
              <>
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>
                <li>
                  <Link to={"/register"}>Register</Link>
                </li>
              </>
            )}
            {user && (
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
        <a
          className="btn btn-ghost text-xl lg:text-4xl"
          style={{ fontFamily: "redressed" }}
        >
          Foot Fusion
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"} className="text-xl">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="text-xl">
              About
            </Link>
          </li>
          {!user && (
            <>
              <li>
                <Link to={"/login"} className="text-xl">
                  Login
                </Link>
              </li>
              <li>
                <Link to={"/register"} className="text-xl">
                  Register
                </Link>
              </li>
            </>
          )}
          {user && (
            <li>
              <Link to={"/dashboard"} className="text-xl">
                Dashboard
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        {user?.email && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-14 rounded-full">
                <img
                  alt="Profile Image"
                  src={user?.photoURL || "/public/placeholder.jpg"}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li className="text-lg font-semibold text-center my-2">
                {user?.displayName}
              </li>

              <li className="mt-3">
                <button className="btn btn-ghost" onClick={handleLogout}>
                  LOG OUT
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
