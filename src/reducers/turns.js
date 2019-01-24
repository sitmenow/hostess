// import Data from "../mocks/ReservationsMock";

import {
  NOTIFY_TURN_ACTIVE,
  COMPLETE_TURN,
  EXPIRE_TURN,
  RECEIVE_TURNS,
  TURNS_RECEIVED,
  RESTORE_STATE,
  REMOVE_TURN
} from "../actions/actionTypes";

//Add testdata only when runnning locally
const initialState = {
  active: [],
  records: {
    avgWaitTime: 0,
    completed: 0,
    expired: 0
  }
};

const turns = (state = initialState, action) => {
  console.log(action);
  const { id } = action;
  const { active, records } = state;
  let index;

  //TODO split this reducer into multiple
  switch (action.type) {
    case REMOVE_TURN:
      index = active.findIndex(turn => turn._id === id);
      //May need to post and fetch next turns
      return {
        records: {
          ...records,
          completed: records.completed + 1
        },
        active: [
          ...state.active.slice(0, index),
          ...state.active.slice(index + 1)
        ]
      };

    case EXPIRE_TURN:
      index = active.findIndex(turn => turn._id === id);
      return {
        records: {
          ...records,
          expired: records.expired + 1
        },
        active: [
          ...state.active.slice(0, index),
          ...state.active.slice(index + 1)
        ]
      };

    case TURNS_RECEIVED:
      console.log(state.active.length);
      console.log(action.newTurns);
      return {
        records,
        active: [...state.active, ...action.newTurns]
      };

    case RESTORE_STATE:
      return {
        records: action.records,
        active: action.active
      };

    default:
      return state;
  }
};

export default turns;
