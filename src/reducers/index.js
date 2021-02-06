import {LOADING_DATA, DATA_LOADED, DATA_ERROR, ADD_DATA} from '../actions'

export const initialState = {
  smurfs: [],
  isLoading: false,
  error: "",
};

 const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_DATA: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case DATA_LOADED: {
            return {
                ...state,
                isLoading: false,
                error: '',
                smurfs: action.payload,
            }
        };
        case DATA_ERROR: {
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        }
        case ADD_DATA: {
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload,
            }
        }
    default:
      return state;
  }
};

export default reducer;



//Task List:
//1. Add in the initialState needed to hold:
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary
