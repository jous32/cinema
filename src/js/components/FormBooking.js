import React, { Component } from "react";
import Modal from 'react-bootstrap4-modal';
import Calendar from 'react-calendar'
import { connect } from "react-redux";
import { changeCustomerName,changeCustomerEmail,changeCustomerNationalId,submitBooking,customerCancelModal,changeDate } from '../actions/index';

class FormBookingComponent extends Component {
  constructor() {
    super();

    this.handleChangeCustomerName = this.handleChangeCustomerName.bind(this);
    this.handleChangeCustomerEmail = this.handleChangeCustomerEmail.bind(this);
    this.handleChangeCustomerNationalId = this.handleChangeCustomerNationalId.bind(this);
    this.handleSubmitBooking = this.handleSubmitBooking.bind(this);
    this.handleCustomerCancelModal = this.handleCustomerCancelModal.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
  }


  handleChangeCustomerName(event) {
    this.props.changeCustomerName(event.target.value);
  }
  handleChangeCustomerEmail(event) {
    this.props.changeCustomerEmail(event.target.value)
  }
  handleChangeCustomerNationalId(event) {
    this.props.changeCustomerNationalId(event.target.value)
  }
  handleSubmitBooking(event) {
    this.props.submitBooking(event.target.value)
  }
  handleCustomerCancelModal() {
    this.props.customerCancelModal()
  }
  handleChangeDate(event) {
    console.log('Dateeee');
    console.log(event);
    this.props.changeDate(event.getTime())
  }

  render() {
    console.log('customerCreateEditVisible ')
    console.log(this.props)
    if(this.props.customerCreateEditVisible){

      return (

          <div>
  <Modal visible={this.props.customerCreateEditVisible} onClickBackdrop={this.handleCustomerCancelModal}>
  <div className="modal-header">
    <h5 className="modal-title">Reservar</h5>
  </div>
  <div className="modal-body">
    <div className="form-group">
      <label htmlFor="name">Nombre</label>
      <input
        type="text"
        className="form-control"
        id="name"
        value={this.props.customerName}
        onChange={this.handleChangeCustomerName}
      />
    </div>
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input
        type="text"
        className="form-control"
        id="description"
        value={this.props.customerEmail}
        onChange={this.handleChangeCustomerEmail}
      />
    </div>
    <div className="form-group">
      <label htmlFor="national_id">Cedula</label>
      <input
        type="text"
        className="form-control"
        id="image_url"
        value={this.props.customerNationalId}
        onChange={this.handleChangeCustomerNationalId}
      />
    </div>

    <div className="form-group">
      <label htmlFor="date">Fecha</label>
        <Calendar
     onChange={this.handleChangeDate}
     />

    </div>
  </div>
  <div className="modal-footer">
    <button type="button" className="btn btn-secondary" onClick={this.handleCustomerCancelModal}>
      Cancelar
    </button>
    <button type="button" className="btn btn-primary" onClick={this.handleSubmitBooking}>
      Reservar
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
        customerNationalId: state.customerNationalId,
        customerEmail: state.customerEmail,
        customerName: state.customerName,
        customerCreateEditVisible : state.customerCreateEditVisible,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeCustomerName : (customerName) => dispatch(changeCustomerName(customerName)),
        changeCustomerEmail: (customerEmail) => dispatch(changeCustomerEmail(customerEmail)),
        changeCustomerNationalId: (nationalId) => dispatch(changeCustomerNationalId(nationalId)),
        submitBooking: () => dispatch(submitBooking()),
        customerCancelModal: () => dispatch(customerCancelModal()),
        changeDate: (date) => dispatch(changeDate(date)),

    };
};

const FormBooking = connect(mapStateToProps, mapDispatchToProps)(FormBookingComponent);
export default FormBooking;
