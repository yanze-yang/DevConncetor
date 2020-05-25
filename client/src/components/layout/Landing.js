import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className="hero is-medium is-bold">
    <div className="hero-body">
      <div className="container">
        <p className="title">
          DEVELOPER
        </p>
        <p className="title">
          CONNECTOR
        </p>
        <h2 className="subtitle">
        Create a developer profile/portfolio, share posts and get help from
            other developers
        </h2>
          <div className='buttons'>
            <Link to='/register' style={{padding: "20px"}}>
              Sign Up
            </Link>

            <Link to='/login' style={{padding: "10px 15px",borderRadius:"5px", color:"#fff",backgroundColor:"#606BFF"}}>
              -> Login with the test account 😄
            </Link>
          </div>
      </div>
    </div>
  </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
