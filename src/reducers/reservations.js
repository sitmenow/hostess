import Data from "../mocks/ReservationsMock";

//Add testdata only when runnning locally
const initialState = {
  active: [...Data],
  records: {
    cancelled: 0,
    completed: 0,
    online: 0,
    local: 0
  }
};

const reservations = (state = initialState, action) => {
  const { id } = action;
  const { active, records } = state;

  switch (action.type) {
    case "ADD_RESERVATION":
      // eslint-disable-next-line
      const { name, people, phone } = action;
      return {
        records: {
          ...records,
          local: records.local + 1
        },
        active: [
          ...active,
          {
            id,
            name,
            people,
            phone
          }
        ]
      };

    case "CANCEL_RESERVATION":
      // eslint-disable-next-line
      const index = active.findIndex(res => res.id === id);

      return {
        records: {
          ...records,
          cancelled: records.cancelled + 1
        },
        active: [
          ...state.active.slice(0, index),

          ...state.active.slice(index + 1)
        ]
      };

    default:
      return state;
  }
};

export default reservations;
