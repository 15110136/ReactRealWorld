import React, { Component } from "react";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";

import { Redirect } from "react-router-dom";
import 'rc-pagination/assets/index.css';
import Pagination from 'rc-pagination';
import { getArticles } from "../../store/actions/projectAction";

export class DashBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 1,
      token:localStorage.getItem('token')
    }

  }

  onChange = (page) => {
    console.log(page);
    
    this.setState({
      currentPage: page
    });
    // const token = localStorage.getItem('token');
    this.props.getArticles(page,this.state.token)
  }
  componentDidMount(){
    this.props.getArticles(1,this.state.token);
  }
  render() {
    var { projects, auth } = this.props;
    if (!auth.isAuthenticated) return <Redirect to="/signin" />;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} page={this.state.currentPage}/>
          </div>
          <div className="col s12 m5 offset-m1">
            {/* <Notifications notifications={notifications} /> */}
          </div>
        </div>
        <Pagination className="ant-pagination" total={100} onChange={this.onChange} defaultCurrent={1} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.auth,
    projects:state.projects.projects.articles
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getArticles: (page,token) => dispatch(getArticles(page,token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
