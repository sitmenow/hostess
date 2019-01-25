const initialState = {
  list: [],
};

const gasStations = (state = initialState, action) => {
  switch (action.type) {
    case 'get_gas_stations': {
      const { payload } = action;
      return { ...state, list: payload };
    }
    case 'request_turn': {
      const { payload } = action;
      return { ...state, message: payload };
    }
    default:
      return state;
  }
};

export default gasStations;
