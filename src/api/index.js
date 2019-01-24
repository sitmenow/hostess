//TODO Add config file
const BASE_URL = "http://localhost:8080/";

class GasAPI {
  constructor() {
    const gasStationId = 1234;
    // this.gasStationId = gasStationId;
    this.turnsPath = `gasStations/${gasStationId}/turns`;
  }

  _makeRequest(path, options = {}) {
    const url = BASE_URL + path;
    return fetch(url, options).then(response => response.json());
  }

  _getTurnActionPath(turnId, action) {
    return `${this.turnsPath}/${turnId}/${action}`;
  }

  getTurns(gasStationId) {
    return this._makeRequest(this.turnsPath);
  }

  notifyTurnReceived(turnId) {
    const path = this._getTurnActionPath(turnId, "await");
    return this._makeRequest(path);
  }

  notifyTurnDispached(turnId) {
    const path = this._getTurnActionPath(turnId, "serve");
    return this._makeRequest(path);
  }

  notifyTurnExpired(turnId) {
    const path = this._getTurnActionPath(turnId, "expire");
    return this._makeRequest(path);
  }
}

export default new GasAPI();
