//TODO Add config file
const BASE_URL = "https://sitmenow.herokuapp.com/";
const TOKEN =
  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlJEaEVPVUZGTnpVMk5USkJPRGd4TkRVMU5qUTBPREkyTkVaRU9EY3dNVVk0TjBaR1JqWkRRUSJ9.eyJpc3MiOiJodHRwczovL3NpdG1lbm93LmF1dGgwLmNvbS8iLCJzdWIiOiJ2ZTVDMlllaDk5NVpjM05PZkd1MzZjdkxiM2c0UkRXTEBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9taXR1cm5vLmNvbS5teC9hcGkvdjEvIiwiaWF0IjoxNTQ4MzEwMDIwLCJleHAiOjE1NDgzOTY0MjAsImF6cCI6InZlNUMyWWVoOTk1WmMzTk9mR3UzNmN2TGIzZzRSRFdMIiwic2NvcGUiOiJhd2FpdDp0dXJuIHJlamVjdDp0dXJuIHNlcnZlOnR1cm4gbGlzdDp0dXJucyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.mrRty65KnJcPLRuEHxpIBfnaXeZ7u_O8PdveeAe89m5oGxeMWtQyCQL4ZxSr-K0wlZ1VtR_TG-R_qU7Y3c0kwBDxMmdVT5w55HLMYGmULbBWRR-O_8GzqBbV6NIWjQYzf4gnsrZ7kDTE9hUz_pLH4iE5ZOTqnbKOYSawOnEdBXPvxqabfk-lz4ir5GvOzRvnKuO_QxAZ6fU-x-9bXIdN1FIqsIDKYdukVH-wt_GUZH4DQTvwRksBqaLnX85YiwNdF0uAWTdHtNiRhO-6aF-uzQipMk-bBxIKh7KvoCkK5vxqoMyuurfRpitOdjHI6fa_HPjqO7vwn6iFXvhnts47pw";

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

  getTurns(gasStationId) {
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
