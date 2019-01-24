
const BASE_URL = 'http://10.200.198.3:8080/';

class GasAPI {
  init(gasStationId) {
    this.gasStationId = gasStationId;
    this.turnsPath = `gasStations/${gasStationId}/turns`;
  }

  _makeRequest(path, options = { mode: 'no-cors' }) {
    const url = BASE_URL + path;
    return fetch(url, options)
             .then(response => response.json());
  }

  _getTurnActionPath(turnId, action) {
    return `${this.turnsPath}/${turnId}/${action}`;
  }

  getTurns(gasStationId) {
    return this._makeRequest(this.turnsPath);
  }

  notifyTurnReceived(turnId) {
    const path = this._getTurnActionPath(turnId, 'await')
    return this._makeRequest(notifyPath, options);
  }

  notifyTurnDispached(turnId) {
    const path = this._getTurnActionPath(turnId, 'serve')
    return this._makeRequest(path);
  }

  notifyTurnExpired(turnId) {
    const path = this._getTurnActionPath(turnId, 'expire')
    return this._makeRequest(path);
  }
}



export default GasAPI;
