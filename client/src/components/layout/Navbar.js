import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/contactContext";

export const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);
  const { isAuthenticated, logout, user, loading } = authContext;
  const { clearContacts } = contactContext;
  const onLogout = () => {
    logout();
    clearContacts();
  };
  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a href="" onClick={onLogout}>
          <i className="fa fa-sign-out"></i>
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      <li className="nav-item">
        <Link to="/register" className="nav-link">
          Register
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar bg-primary ">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul className="navbar-nav">{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fa fa-id-card",
};
