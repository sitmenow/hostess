import { connect } from "react-redux";

import Dashboard from "./Dashboard";
import { completeTurn, expireTurn } from "../../actions";

const mapStateToProps = state => ({
  activeTurns: state.turns.active,
  records: state.turns.records
});

const mapDispatchToProps = dispatch => ({
  completeTurn: id => dispatch(completeTurn(id)),
  expireTurn: id => dispatch(expireTurn(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
