import {
  AUTO_COMPLETE_REQUEST,
  AUTO_COMPLETE_SUCCESS,
  AUTO_COMPLETE_FAILURE,
} from '../types';
import Immutable from 'seamless-immutable';
import Reduxer, {iMerge} from '../Reduxer';

export const INITIAL_STATE = Immutable({
  location: [],
  fetching: false,
  error: null,
});

const request = state =>
  iMerge(state, {
    fetching: true,
  });

const success = (state, action) =>
  iMerge(state, {
    fetching: false,
    error: null,
    location: [...state.location, action.payload],
  });

const failure = (state, action) =>
  iMerge(state, {
    fetching: false,
    error: action.payload,
  });

export default Reduxer(INITIAL_STATE, {
  [AUTO_COMPLETE_REQUEST]: request,
  [AUTO_COMPLETE_SUCCESS]: success,
  [AUTO_COMPLETE_FAILURE]: failure,
});
