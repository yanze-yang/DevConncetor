import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <div className="navbar-end">
      <Link to="/profiles" className="navbar-item">
        Developers
      </Link>
      <Link to="/posts" className="navbar-item">Posts</Link>
      <Link to="/dashboard" className="navbar-item">
        <i className="fas fa-user" /> <span className="hide-sm">Dashboard</span>
      </Link>
      <a onClick={logout} href="#!" className="navbar-item">
        <i className="fas fa-sign-out-alt" />{" "}
        <span className="hide-sm">Logout</span>
      </a>
    </div>
  );

  const guestLinks = (
    <div className="navbar-end">
      <Link to="/profiles" className="navbar-item">
        Developers
      </Link>
      <Link to="/register" className="navbar-item">
        Register
      </Link>
      <Link to="/login" className="navbar-item">
        Login
      </Link>
    </div>
  );

  return (
    <div className="container">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <i className="fas fa-code" /> Dev<b>Connector</b>
          </Link>
        </div>
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
