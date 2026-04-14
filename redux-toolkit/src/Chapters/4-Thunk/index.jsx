import axios from "axios";
import { useRef } from "react";
import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const FETCH_USER_REQUESTED = "FETCH_USER_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

const fetchUsersRequest = () => {
  return {
    type: FETCH_USER_REQUESTED,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  };
};

const fetchUsersFailed = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCEEDED:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILED:
      return {
        users: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const fetchUsers = (signalRef) => {
  return (dispatch) => {
    if (signalRef.current) {
      signalRef.current.abort();
    }

    signalRef.current = new AbortController();
    // Set loading: true
    dispatch(fetchUsersRequest());

    axios
      .get("https://jsonplaceholder.typicode.com/users", {
        signal: signalRef.current.signal,
      })
      .then((response) => {
        const users = response.data.map((user) => user.id);
        // loading:false, users: users
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        // loading: false, error: error.message
        dispatch(fetchUsersFailed(error.message));
      });
  };
};

const Thunk = () => {
  const signalRef = useRef(null);
  const store = createStore(reducer, applyMiddleware(thunk));
  store.subscribe(() => console.log(store.getState()));

  const fetchAsync = async () => {
    await store.dispatch(fetchUsers(signalRef));
  };

  return (
    <div>
      <button onClick={fetchAsync}>Thunk with cancel API</button>
    </div>
  );
};

export default Thunk;
