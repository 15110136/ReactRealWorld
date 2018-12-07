import React from 'react';
import { connect } from 'react-redux'
import { favorite, unfavorite } from "../../store/actions/projectAction";

const FAVORITED_CLASS = 'btn btn-primary';
const NOT_FAVORITED_CLASS = 'btn btn-outline-primary';



const ProjectSummary = props => {
  const { project } = props;
  const favoriteButtonClass = project.favorited ?
    FAVORITED_CLASS :
    NOT_FAVORITED_CLASS;

  const handleClick = ev => {
    ev.preventDefault();
    if (project.favorited) {
      props.unfavorite(project.slug);
    } else {
      console.log("delete");
      props.favorite(project.slug);
    }
  };

  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <img src={project.author.image} alt={project.author.username} width="50px" height="50px" />
        <p className="green-text ">{project.author.username}</p>
        <span className="grey-text">
          {new Date(project.createdAt).toDateString()}
        </span>
      </div>
      <h1 className="center">{project.title}</h1>
      <div className="xs-right">
        <button className={favoriteButtonClass} onClick={handleClick}>
          <i className="ion-heart"></i> {project.favoritesCount}
        </button>
      </div>
    </div>
  )
}
const mapDispatchToProps = dispatch => ({
  favorite: slug => dispatch(favorite(slug)),
  unfavorite: slug => dispatch(unfavorite(slug))
});


export default connect(null,mapDispatchToProps)(ProjectSummary);