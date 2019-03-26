import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchBookingData } from '../actions/index';

class BookingLists extends Component {
  constructor() {
    super();

  }

    componentDidMount() {
        this.props.fetchBookingData();
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

          <div className="row">
            <ul>

              {this.props.bookings.map((booking) => (
                 <li key={booking.id} >
                       Persona : {booking.person_id}
                  </li>
              ))}

            </ul>

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
        fetchBookingData: () => dispatch(fetchBookingData()),
    };
};

const BookingList = connect(mapStateToProps, mapDispatchToProps)(BookingLists);
export default BookingList;
