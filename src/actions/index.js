import axios from "axios";

export const LOADING_DATA = "LOADING_DATA";
export const DATA_LOADED = "DATA_LOADED";
export const DATA_ERROR = "DATA_ERROR";
export const ADD_DATA = "ADD_DATA";

const apiURL = "http://localhost:3333/smurfs";

export const fetchSmurfs = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  setTimeout(() => {
    axios
      .get(apiURL)
      .then((res) => {
        // console.log("res from axios get request", res);
        dispatch({ type: DATA_LOADED, payload: res.data });
      })
      .catch((err) => {
        // console.log("error from axios get request", err);
        dispatch({ type: DATA_ERROR, payload: err.message });
      });
  }, 1000);
};

export const addSmurf = (newSmurf) => (dispatch) => {
  console.log("action fired for the addSmurf action creator");
  axios
    .post(apiURL, newSmurf)
    .then((res) => {
      console.log("axios POST request response: ", res);
      dispatch({ type: ADD_DATA, payload: res.data });
    })
    .catch((err) => {
      console.log("error from api POST request: ", err);
      dispatch({ type: DATA_ERROR, payload: err.message });
    });
};

//Task List:
//1. Add fetch smurfs action:
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name,nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem necessary to complete application.
