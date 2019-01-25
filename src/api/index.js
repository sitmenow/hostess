//TODO Add config file
const BASE_URL = "http://localhost:8080/";
const TOKEN = "";

class GasAPI {
  constructor() {
    const gasStationId = "5c49f825854a5a0ea4b150f9";
    this.turnsPath = `gasStations/${gasStationId}/turns`;
    this.headers = { Authorization: TOKEN };
  }

  _makeRequest(path, options = {}) {
    Object.assign(options, { headers: this.headers });
    const url = BASE_URL + path;
    return fetch(url, options).then(response => response.json());
  }

  _getTurnActionPath(turnId, action) {
    return `${this.turnsPath}/${turnId}/${action}`;
  }

  getTurns() {
    return this._makeRequest(this.turnsPath);
  }

  notifyTurnReceived(turnId) {
    const path = this._getTurnActionPath(turnId, "await");
    return this._makeRequest(path, { method: "PUT" });
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
