import GasAPI from "../api";

//Create Turn class
class TurnConsistency {
  static normalize(turns) {
    return turns.reduce((normalized, turn) => {
      normalized[turn._id] = turn;
      return normalized;
    }, {});
  }
}

export default TurnConsistency;
