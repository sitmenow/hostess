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

export const getTurns = () => {
  return function(dispatch) {
    dispatch(receiveTurns());

    GasAPI.getTurns()
      .then(TurnConsistency.updateTurns)
      .then(turnsReceived);
  };
};
