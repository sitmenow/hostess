import { GET_GAS_STATIONS, REQUEST_TURN } from "./types";

const API_URL = 'https://sitmenow.herokuapp.com';

export const getGasStationDetail = async (gasStation) => {
  const item = await fetch(`${API_URL}/gasStations/${gasStation._id}`);
  return item.json();
}

export const getGasStations = () => (dispatch) => {
  fetch(`${API_URL}/gasStations/`)
    .then(response => response.json())
    .then((json) => {
      dispatch({
        type: GET_GAS_STATIONS,
        // json: json.map(getGasStationDetail),
        json,
      });
    });
};

export const requestTurn = (data) => (dispatch) => {
  const { gasStation, ...body } = data;
  fetch(`${API_URL}/gasStations/${gasStation._id}/turns`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then((json) => {
      dispatch({
        type: REQUEST_TURN,
        json,
      });
    });
};

