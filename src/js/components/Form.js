import React, { Component } from "react";
import Modal from 'react-bootstrap4-modal';
import { connect } from "react-redux";
import { changeId,changeName,saveMovieRemote,changeDescription,changeImageUrl,cancelEditVisible } from '../actions/index';
import Dropdown from 'react-dropdown'

class ConnectedForm extends Component {
  constructor() {
    super();

    this.handleChangeId = this.handleChangeId.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeImageUrl = this.handleChangeImageUrl.bind(this);
    this.handleSubmitSave = this.handleSubmitSave.bind(this);
    this.handleCancelEditVisible = this.handleCancelEditVisible.bind(this);
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

  handleCancelEditVisible(){
    this.props.cancelEditVisible();
  }


  render() {
    console.log('as')
    console.log(this.props)
    if(this.props.createEditVisible){

      return (

          <div>


            <Modal visible={this.props.createEditVisible} onClickBackdrop={this.handleCancelEditVisible}>
  <div className="modal-header">
    <h5 className="modal-title">Crear/Editar Pelicula</h5>
  </div>
  <div className="modal-body">
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
  </div>
  <div className="modal-footer">
    <button type="button" className="btn btn-secondary" onClick={this.handleCancelEditVisible}>
      Cancelar
    </button>
    <button type="button" className="btn btn-primary" onClick={this.handleSubmitSave}>
      Guardar
    </button>
  </div>
</Modal>

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
        changeImageUrl: (movieImageUrl) => dispatch(changeImageUrl(movieImageUrl)),
        cancelEditVisible: () => dispatch(cancelEditVisible())

    };
};

const Form = connect(mapStateToProps, mapDispatchToProps)(ConnectedForm);
export default Form;
