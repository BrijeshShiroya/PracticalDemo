import {put} from 'redux-saga/effects';
import {
  autoCompleteFailure,
  autoCompleteSuccess,
} from '../redux/actions/autoCompleteAction';

export function* autoCompleteApi(action) {
  yield put(autoCompleteSuccess(action.payload));
}
