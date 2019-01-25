import {
  TURNS_RECEIVED,
  RESTORE_STATE,
  REMOVE_TURN
} from "../actions/actionTypes";

const initialState = {
  active: [],
  records: {
    avgWaitTime: 0,
    completed: 0,
    expired: 0
  }
};

const turns = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_TURN: {
      const { active, records } = state;
      const { id, motive } = action;
      const index = active.findIndex(turn => turn._id === id);
      return {
        active: [
          ...state.active.slice(0, index),
          ...state.active.slice(index + 1)
        ],
        records: {
          ...records,
          [motive]: records[motive] + 1
        }
      };
    }

    case TURNS_RECEIVED: {
      return {
        active: [...state.active, ...action.newTurns],
        records: state.records
      };
    }

    case RESTORE_STATE: {
      return {
        active: action.active,
        records: action.records
      };
    }

    default:
      return state;
  }
};

export default turns;
