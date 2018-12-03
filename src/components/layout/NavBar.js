import React from 'react';
import { Link } from "react-router-dom";
import SignedInLink from './SignedInLink';
import SignedOutLinks from './SignedOutLink';
import { connect } from 'react-redux'

const NavBar = (props) => {
  const link = props.auth.isAuthenticated ? <SignedInLink /> : <SignedOutLinks />

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">
          Kai'Sa Plan
        </Link>
        {link}
        {/* <SignedInLink />
        <SignedOutLinks /> */}
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  // console.log(state);

  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(NavBar);
