import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown, Image } from "react-bootstrap";
import { logout } from "../../actions/userActions";

export default function Header() {
  const { isAuthenticated, user } = useSelector((state) => state.authState);
  const { items: cartItems } = useSelector((state) => state.cartState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(logout);
  };

  return (
    <nav className="navbar">
      <div className="">
        <div className="navbar-brand">
          <Link to="/" className="link logo">
            Siva
          </Link>
        </div>
      </div>

      <div className="navSearch">
        <Search />
      </div>

      <div className="profileContainer">
        {isAuthenticated ? (
          <Dropdown className="d-inline">
            <Dropdown.Toggle variant="default pr-5" id="dropdown-basic">
              <figure className="avatar avatar-nav">
                <Image src={user.avatar ?? "./images/default_avatar.png"} />
              </figure>
              <span className="navUsername">{user.name}</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {user.role === "admin" && (
                <Dropdown.Item
                  onClick={() => {
                    navigate("admin/dashboard");
                  }}
                  className="dropdownItems"
                >
                  Dashboard
                </Dropdown.Item>
              )}
              <Dropdown.Item
                onClick={() => {
                  navigate("/myprofile");
                }}
                className="dropdownItems"
              >
                Profile
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  navigate("/orders");
                }}
                className="dropdownItems"
              >
                Orders
              </Dropdown.Item>
              <Dropdown.Item
                onClick={logoutHandler}
                className="text-danger dropdownItems"
              >
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Link to="/login" className="btn" id="login_btn">
            Login
          </Link>
        )}
        <Link to="/cart">
          <span id="cart" className="ml-1">
            <i
              class="fa-brands fa-shopify"
              style={{ color: "#2e2e2e", fontSize: "1.4rem" }}
            ></i>
          </span>
        </Link>
        <span className="ml-1" id="cart_count">
          {cartItems.length}
        </span>
      </div>
    </nav>
  );
}
