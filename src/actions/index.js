import GasAPI from "../api";
import { loadState } from "../localStorage";
import {
  NOTIFY_TURN_ACTIVE,
  COMPLETE_TURN,
  EXPIRE_TURN,
  RECEIVE_TURNS,
  TURNS_RECEIVED,
  RESTORE_STATE,
  REMOVE_TURN
} from "./actionTypes";

export const notifyTurnActive = id => ({
  type: NOTIFY_TURN_ACTIVE,
  id
});

export const removeTurn = id => ({
  type: REMOVE_TURN,
  id
});

export const expireTurn = id => ({
  type: EXPIRE_TURN,
  id
});

export const receiveTurns = () => ({
  type: RECEIVE_TURNS
});

export const turnsReceived = newTurns => ({
  type: TURNS_RECEIVED,
  newTurns
});

export const restoreState = ({ turns }) => ({
  type: RESTORE_STATE,
  records: turns.records,
  active: turns.active
});

//TURN COMPLETED
export const completeTurn = id => {
  return (dispatch, getState) => {
    dispatch(removeTurn(id));
    getTurns(dispatch, getState);
  };
};

//ACTIION REDUCERS
const retryIfNeeded = turns => {
  return turns;
};

const turnsDiff = ({ turns }) => {
  console.log("turns.active", turns.active);
  const activeIds = turns.active.map(({ _id }) => _id);
  const set = new Set(activeIds);
  return incoming => {
    console.log("turns.incoming", incoming);
    return incoming.filter(turn => !set.has(turn._id));
  };
};

const notifyTurns = newTurns => {
  const notifiedTurns = newTurns.map(turn =>
    GasAPI.notifyTurnReceived(turn._id)
  );

  return Promise.all(notifiedTurns).then(result => {
    //TODO update filter criteria
    const failed = result.filter(turn => turn);
    if (failed.length) {
      //TODO Retry fetch
    }

    return newTurns.filter(turn => !failed[turn._id]);
  });
};

export const getTurnsIfNeeded = () => {
  return function(dispatch, getState) {
    //TODO Split this function

    const savedState = loadState();

    //TODO add validation storage is not corrupted
    if (savedState) {
      dispatch(restoreState(savedState));
    } else {
      getTurns(dispatch, getState);
    }
  };
};

const getTurns = (dispatch, getState) => {
  dispatch(receiveTurns());
  const newTurns = turnsDiff(getState());

  GasAPI.getTurns()
    .then(newTurns)
    .then(notifyTurns)
    .then(turns => dispatch(turnsReceived(turns)));
};
