// import Data from "../mocks/ReservationsMock";

import {
  NOTIFY_TURN_ACTIVE,
  COMPLETE_TURN,
  EXPIRE_TURN,
  RECEIVE_TURNS,
  TURNS_RECEIVED
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

  switch (action.type) {
    case "COMPLETE_TURN":
      index = active.findIndex(res => res._id === id);
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

    case "EXPIRE_TURN":
      index = active.findIndex(res => res._id === id);
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
      return {
        records,
        active: action.turns
      };

    default:
      return state;
  }
};

export default turns;
