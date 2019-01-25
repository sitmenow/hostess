import GasAPI from "../api";
import { loadState } from "../localStorage";
import {
  NOTIFY_TURN_ACTIVE,
  RECEIVE_TURNS,
  TURNS_RECEIVED,
  RESTORE_STATE,
  REMOVE_TURN
} from "./actionTypes";

export const notifyTurnActive = id => ({
  type: NOTIFY_TURN_ACTIVE,
  id
});

export const removeTurn = (id, motive) => ({
  type: REMOVE_TURN,
  id,
  motive
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

export const completeTurn = id => {
  return (dispatch, getState) => {
    dispatch(removeTurn(id, "completed"));
    getTurns(dispatch, getState);
  };
};

export const expireTurn = id => {
  return (dispatch, getState) => {
    dispatch(removeTurn(id, "expired"));
    getTurns(dispatch, getState);
  };
};

export const getTurnsIfNeeded = () => {
  return (dispatch, getState) => {
    const savedState = loadState();
    if (savedState && savedState.turns.active.length) {
      dispatch(restoreState(savedState));
    } else {
      getTurns(dispatch, getState);
    }
  };
};

// const retryIfNeeded = turns => {
//   return turns;
// };

const turnsDiff = ({ turns }) => {
  const activeIds = turns.active.map(({ _id }) => _id);
  // eslint-disable-next-line no-undef
  const set = new Set(activeIds);
  return incoming => {
    return incoming.filter(turn => !set.has(turn._id));
  };
};

const notifyTurns = newTurns => {
  const notifiedTurns = newTurns.map(turn =>
    GasAPI.notifyTurnReceived(turn._id)
  );
  // eslint-disable-next-line no-undef
  return Promise.all(notifiedTurns).then(result => {
    //TODO update filter criteria
    const failedTurns = result.filter(turn => turn);
    // const failedTurns = result.filter(isTurnFailed);
    //retryNotify(failedTurns);
    return newTurns.filter(turn => !failedTurns.includes(turn._id));
  });
};

const getTurns = (dispatch, getState) => {
  // dispatch(receiveTurns());
  const newTurns = turnsDiff(getState());

  GasAPI.getTurns()
    .then(newTurns)
    .then(notifyTurns)
    .then(turns => dispatch(turnsReceived(turns)));
};
