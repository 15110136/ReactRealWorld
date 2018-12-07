import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getProfile } from "../../store/actions/profileActions";

class Profile extends Component {
  constructor(props) {
    super(props)
    this.props.getProfile(this.props.match.params.username);
  }

  render() {
    console.log(this.props);
    
    return (
      <div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {

  return {
    getProfile: username => {
      dispatch(getProfile(username))
    }
  }
}


export default connect(null,mapDispatchToProps)(Profile);