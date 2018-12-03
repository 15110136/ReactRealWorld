import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Home from "./Home";

class App extends React.Component {
  render() {
    return <div>
      <Header appName={this.props.appName}/>
      {this.props.children}
    </div>;
  }
}

const mapStateToProps = state => {
  return {
    appName: state.appName
  };
};

App.contextType={
  router: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps)(App);
