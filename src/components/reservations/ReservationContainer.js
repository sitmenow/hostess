import { connect } from "react-redux";

import ListContainer from "./ListContainer";
import { addReservation, cancelReservation } from "../../actions";

const mapStateToProps = state => ({
  reservations: state.reservations.active,
  records: state.reservations.records
});

const mapDispatchToProps = dispatch => ({
  addReservation: (name, people, phone) =>
    dispatch(addReservation(name, people, phone)),
  cancelReservation: id => dispatch(cancelReservation(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);
