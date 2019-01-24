import GasAPI from "../api";
import TurnConsistency from "./TurnConsistency";
import {
  NOTIFY_TURN_ACTIVE,
  COMPLETE_TURN,
  EXPIRE_TURN,
  RECEIVE_TURNS,
  TURNS_RECEIVED
} from "./actionTypes";

export const notifyTurnActive = id => ({
  type: NOTIFY_TURN_ACTIVE,
  id
});

export const completeTurn = id => ({
  type: COMPLETE_TURN,
  id
});

export const expireTurn = id => ({
  type: EXPIRE_TURN,
  id
});

export const receiveTurns = () => ({
  type: RECEIVE_TURNS
});

export const turnsReceived = turns => ({
  type: TURNS_RECEIVED,
  turns
});

//ACTIION REDUCERS
const retryIfNeeded = turns => {
  return turns;
};

const notifyTurns = (current, incoming) => {
  current = [];

  const newTurns = incoming.filter(turn => !current[turn._id]);

  const notifiedTurns = newTurns.map(turn =>
    GasAPI.notifyTurnReceived(turn._id)
  );

  return Promise.all(notifiedTurns).then(result => {
    //TODO update filter criteria
    const failed = result.filter(turn => turn);
    if (failed.length) {
      //TODO Retry fetch
    }
    const toReturn = newTurns.filter(turn => !failed[turn._id]);
    return current.concat(toReturn);
  });
};

export const getTurns = () => {
  return function(dispatch, getState) {
    dispatch(receiveTurns());

    GasAPI.getTurns()
      // .then(TurnConsistency.normalize)
      .then(turns => notifyTurns(getState(), turns))
      .then(retryIfNeeded)
      .then(turns => dispatch(turnsReceived(turns)));
  };
};
