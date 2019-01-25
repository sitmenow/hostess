import { connect } from "react-redux";

import GasStationsList from "./GasStationsList";
import { getGasStations, requestTurn } from "../../actions";

const mapStateToProps = state => ({
  gasStations: state.gasStations.list,
});

const mapDispatchToProps = {
  getGasStations,
  requestTurn,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GasStationsList);
