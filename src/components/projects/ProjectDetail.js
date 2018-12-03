import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'

const ProjectDetail = (props) => {
  const { project, auth } = props;  
  if (!auth.isAuthenticated) return <Redirect to='signin'/>
  if (project!==null) {
    console.log(project);
    
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Create by: {project.authorFirstName} {project.authorLastName}</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="center">Loading project...</div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.auth
  }
}

export default compose(connect(mapStateToProps), firestoreConnect([{ collection: 'projects' }]))(ProjectDetail);