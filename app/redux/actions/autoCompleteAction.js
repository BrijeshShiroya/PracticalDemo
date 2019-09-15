import {
  AUTO_COMPLETE_REQUEST,
  AUTO_COMPLETE_SUCCESS,
  AUTO_COMPLETE_FAILURE,
} from '../types';

export const autoCompleteRequest = payload => ({
  type: AUTO_COMPLETE_REQUEST,
  payload,
});

export const autoCompleteSuccess = payload => ({
  type: AUTO_COMPLETE_SUCCESS,
  payload,
});

export const autoCompleteFailure = payload => ({
  type: AUTO_COMPLETE_FAILURE,
  payload,
});
