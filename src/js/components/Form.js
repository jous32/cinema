import React, { Component } from "react";
import { connect } from "react-redux";
import { changeId,changeName,saveMovieRemote,changeDescription,changeImageUrl } from '../actions/index';
import Dropdown from 'react-dropdown'

class ConnectedForm extends Component {
  constructor() {
    super();

    this.handleChangeId = this.handleChangeId.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeImageUrl = this.handleChangeImageUrl.bind(this);
    this.handleSubmitSave = this.handleSubmitSave.bind(this);
  }

  handleChangeId(event) {
    this.props.changeId(event.target.value);
  }
  handleChangeName(event) {
    this.props.changeName(event.target.value);
  }
  handleChangeDescription(event) {
    this.props.changeDescription(event.target.value)
  }
  handleChangeImageUrl(event) {
    this.props.changeImageUrl(event.target.value)
  }

  handleSubmitSave(event) {
    event.preventDefault();
    this.props.saveMovieRemote();
  }



  render() {
    console.log('as')
    console.log(this.props)
    if(this.props.createEditVisible){

      return (

          <div>
            <h2>Crear/Editar Pelicula</h2>
          <div className="form-group">
            <label htmlFor="id">Id</label>
            <input
              type="text"
              className="form-control"
              id="movieId"
              value={this.props.movieId}
              onChange={this.handleChangeId}
              disabled={true}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={this.props.movieName}
              onChange={this.handleChangeName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Descripcion</label>
            <input
              type="text"
              className="form-control"
              id="description"
              value={this.props.movieDescription}
              onChange={this.handleChangeDescription}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image_url">Image url</label>
            <input
              type="text"
              className="form-control"
              id="image_url"
              value={this.props.movieImageUrl}
              onChange={this.handleChangeImageUrl}
            />
          </div>


          <button className="btn btn-success btn-lg" onClick={this.handleSubmitSave}>
            Save
          </button>

          </div>
      );
    }else{
      return (
        <div>
        </div>
      );
    }
  }
}
const mapStateToProps = (state) => {
    return {
        movieId: state.movieId,
        movieName: state.movieName,
        movieDescription: state.movieDescription,
        movieImageUrl: state.movieImageUrl,
        createEditVisible : state.createEditVisible,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeId : (movieId) => dispatch(changeId(movieId)),
        changeName: (movieName) => dispatch(changeName(movieName)),
        saveMovieRemote: () => dispatch(saveMovieRemote()),
        changeDescription: (movieDescription) => dispatch(changeDescription(movieDescription)),
        changeImageUrl: (movieImageUrl) => dispatch(changeImageUrl(movieImageUrl))

    };
};

const Form = connect(mapStateToProps, mapDispatchToProps)(ConnectedForm);
export default Form;
