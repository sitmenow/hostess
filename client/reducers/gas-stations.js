const initialState = {
  list: [],
};

const gasStations = (state = initialState, action) => {
  switch (action.type) {
    case 'get_gas_stations': {
      const { json } = action;
      return { ...state, list: json };
    }
    case 'request_turn': {
      const { json } = action;
      return { ...state, message: json };
    }
    default:
      return state;
  }
};

export default gasStations;
