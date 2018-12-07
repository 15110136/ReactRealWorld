import React from 'react';
import { NavLink } from "react-router-dom";
import { signOut } from "../../store/actions/authAction";
import { connect } from 'react-redux'

const SignedInLink=(props)=>{ 

  const {user}=props.auth;
  
  return(
    <ul className="right">
      <li><NavLink to='/create'>New Project</NavLink></li>
      <li><NavLink to='/' onClick={props.signOut}>Log Out</NavLink></li>
      <li>
        <NavLink to={`/${user.username}`} className="btn btn-large btn-floating blue lighten-1">
          <img src={user.image} alt={user.username} height="60px" widt="60px"/>
        </NavLink>
      </li>
    </ul>
  );
}

const mapDispatchToProps=(dispatch)=>{
  return{
    signOut:()=>dispatch(signOut())
  }
}
const mapStateToProps=state=>{
  return{
    auth:state.auth
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignedInLink)
