import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/index';
import { loadMovieById,deleteMovieRemote,loadNewMovie,showBooking } from '../actions/index';

class ItemListMovies extends Component {
  constructor() {
    super();
    this.loadMovieById = this.loadMovieById.bind(this);
    this.deleteMovieRemote = this.deleteMovieRemote.bind(this);
    this.loadNewMovie = this.loadNewMovie.bind(this);
    this.handleShowBooking = this.handleShowBooking.bind(this);
  }
  loadNewMovie() {
    this.props.loadNewMovie();
  }

  loadMovieById(id) {
    this.props.loadMovieById(id);
  }

  deleteMovieRemote(id) {
    this.props.deleteMovieRemote(id);
  }


  handleShowBooking(id) {
    console.log('---- handleSubmitBooking ----')
    this.props.showBooking(id);
  }

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
          <div>
          
          <button className="btn btn-success btn-sm" onClick={() => this.loadNewMovie()} >
            Nuevo
          </button>
          <div className="row">
          {this.props.items.map((item) => (
             <div key={item.id} className="col-md-4">

                <img src={item.image_url} alt={item.name} height={200} width={200} />
                   Descripcion : {item.description}
                  <button values={item.id} className="btn btn-success btn-sm" onClick={() => this.loadMovieById(item.id)} >
                    Editar
                  </button>
                  <button values={item.id} className="btn btn-success btn-sm" onClick={() => this.deleteMovieRemote(item.id)} >
                    Eliminar
                  </button>
                  <button values={item.id} className="btn btn-success btn-sm" onClick={() => this.handleShowBooking(item.id)} >
                    Reservar
                  </button>
              </div>
          ))}
          </div>


            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(itemsFetchData()),
        loadMovieById: (movieId) => dispatch(loadMovieById(movieId)),
        deleteMovieRemote: (movieId) => dispatch(deleteMovieRemote(movieId)),
        loadNewMovie: () => dispatch(loadNewMovie()),
        showBooking: (movieId) => dispatch(showBooking(movieId)),

    };
};

const ItemListMovie = connect(mapStateToProps, mapDispatchToProps)(ItemListMovies);
export default ItemListMovie;
