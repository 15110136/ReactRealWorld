import React from 'react'
import ProjectSummary from './ProjectSummary';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { deleteProject } from "../../store/actions/projectAction";

class ProjectList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: "",
    }
  }
  handleDelete = (project) => {
    this.props.deleteProject(project.id);
  }

  handleUpdate = (project) => {
    console.log(project);
  }

  render() {
    const { projects, page } = this.props;

    let startIndex = 10 * (page - 1);
    let endIndex = 10 * ((page - 1) + 1);
    // console.log(startIndex, endIndex);
    return (
      <div className="project-list section">
        {projects && projects.slice(startIndex, endIndex).map(project => {
          if (project) {
            return (
              <div className="card z-depth-0 project-summary" key={project.slug}>
                <Link to={`/project/${project.id}`}>
                  <ProjectSummary project={project} />
                </Link>
                <button className="btn-floating btn-medium waves-effect waves-light red" onClick={() => this.handleDelete(project)}><i className="material-icons"></i></button>
                <button className="right btn-floating btn-medium waves-effect waves-light cyan" onClick={() => this.handleUpdate(project)}><i className="material-icons"></i></button>
              </div>
            )
          }else{
            return null
          }
        })}
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    deleteProject: (id) => dispatch(deleteProject(id))
  }
}
export default connect(null, mapDispatchToProps)(ProjectList);