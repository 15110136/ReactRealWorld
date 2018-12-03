import React, { Component } from "react";
import ProjectList from "../projects/ProjectList";
import Notifications from "./Notification";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import 'rc-pagination/assets/index.css';
import Pagination from 'rc-pagination';
import { getArticles } from "../../store/actions/projectAction";
// import Panigation from './Panigation'

export class DashBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 1
    }
  }

  onChange = (page) => {
    console.log(page);
    this.setState({
      currentPage: page
    });
  }
  componentDidMount() {
    this.props.getArticles(1);
  }

  render() {
    var { projects, auth, notifications } = this.props;

    if (!auth.isAuthenticated) return <Redirect to="/signin" />;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} page={this.state.currentPage} size={3} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
        <Pagination className="ant-pagination" total={100} onChange={this.onChange} defaultCurrent={1} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  // console.log(state);

  return {
    auth: state.auth,
    notifications: state.firestore.ordered.notifications
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getArticles: (page) => dispatch(getArticles(page))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DashBoard);
