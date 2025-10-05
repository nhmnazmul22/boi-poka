import Container from "../Layout/Container";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const getNavLinkClass = ({ isActive }) =>
    `btn hover:text-white ${
      isActive ? "btn-outline btn-success" : "btn-ghost btn-success"
    }`;

  return (
    <div className="bg-base-100 shadow-sm">
      <Container>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="drop-down"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                data-testid="mobile-links"
              >
                <li className="">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/listed-books">Listed Books</NavLink>
                </li>
                <li>
                  <NavLink to="/read-books">Pages to read</NavLink>
                </li>
              </ul>
            </div>
            <Link to="/" className="text-2xl font-bold">
              Book Vibe
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul
              className="menu menu-horizontal px-1 space-x-3"
              data-testid="desktop-links"
            >
              <li>
                <NavLink to="/" className={getNavLinkClass}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/listed-books" className={getNavLinkClass}>
                  Listed Books
                </NavLink>
              </li>
              <li>
                <NavLink to="/read-books" className={getNavLinkClass}>
                  Pages to read
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end space-x-3">
            <Link
              to="/"
              className="btn bg-[#23BE0A] text-white border-0 hover:border-0 hover:scale-103 transition-all duration-300"
            >
              Sign in
            </Link>
            <Link
              to="/"
              className="btn bg-[#59C6D2] text-white border-0 hover:border-0 hover:scale-103 transition-all duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
