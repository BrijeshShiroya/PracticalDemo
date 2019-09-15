import {combineReducers} from 'redux';
import {createNavigationReducer} from 'react-navigation-redux-helpers';
import AppNavigation from '../../navigation/AppNavigation';

const navReducer = createNavigationReducer(AppNavigation);

// Imports: Reducers
import autoCompleteReducer from './AutoCompleteReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  nav: navReducer,
  autoComplete: autoCompleteReducer,
});

// Exports
export default rootReducer;
