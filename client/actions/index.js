import { GET_GAS_STATIONS, REQUEST_TURN } from "./types";

const API_URL = 'https://sitmenow.herokuapp.com';

export const getGasStations = () => {
  return (dispatch) => {
    fetch(`${API_URL}/gasStations/`)
      .then(response => response.json())
      .then((payload) => {
        dispatch({
          type: GET_GAS_STATIONS,
          payload,
        });
      });
  }
};

export const requestTurn = (data) => {
  // Process Request
  return (dispatch) => {
    const { gasStation, ...body } = data;
    fetch(`${API_URL}/gasStations/${gasStation._id}/turns`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(response => response.json())
      .then((payload) => {
        dispatch({
          type: REQUEST_TURN,
          payload,
        });
      })
  };
};
