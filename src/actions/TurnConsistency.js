import GasAPI from "../api";

class TurnConsistency {
  constructor() {
    this.activeTurns = {};
  }

  updateTurns(turns) {
    const newTurns = this._diffTurns(turns);

    const confirmedTurns = newTurns.map(turn =>
      GasAPI.notifyTurnReceived(turn.id)
    );

    return Promise.all(confirmedTurns).then(this._mergeTurns);
  }

  _diffTurns(turns) {
    return turns.filter(turn => this.activeTurns[turn._id]);
  }

  _mergeTurns(turns) {
    turns.forEach(turn => {
      this.activeTurns[turn._id] = turn;
    });
    return Promise.resolve(this.activeTurns);
  }
}

export default new TurnConsistency();
