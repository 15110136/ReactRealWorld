import React from 'react'
import ProjectSummary from './ProjectSummary';
import { Link } from "react-router-dom";




class ProjectList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: "",
    }
  }

  handleUpdate = (project) => {
    console.log(project);
  }

  render() {
    const { projects } = this.props;

    if (!projects) {
      return (
        <div className="white-text center">
          Loading...
        </div>
      );
    } else {
      return (
        <div className="project-list section">
          {projects && projects.map(project => {
            if (project) {

              return (
                <div className="card z-depth-0 project-summary" key={project.slug}>
                  <ProjectSummary project={project} />
                  
                </div>
              )
            } else {
              return null
            }
          })}
        </div>
      )
    }
  }
}

export default ProjectList;