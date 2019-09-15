import {all, takeLatest} from 'redux-saga/effects';
import {autoCompleteApi} from './AutoCompleteSaga';
import {AUTO_COMPLETE_REQUEST} from '../redux/types';

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.

export default function* rootSaga() {
  yield all([takeLatest(AUTO_COMPLETE_REQUEST, autoCompleteApi)]);
}
