import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';

import AutoComplete from '../modules/GoogleAPIAutoComplete/AutoComplete';
import SearchList from '../modules/GoogleAPIAutoComplete/SearchList';

const AutoCompleteStack = createStackNavigator(
  {
    AutoComplete: {screen: AutoComplete, navigationOptions: {header: null}},
    SearchList: {screen: SearchList},
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'AutoComplete',
  },
);

// Manifest of possible screens
const PrimaryNav = createSwitchNavigator(
  {
    AutoCompleteStack,
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'AutoCompleteStack',
    navigationOptions: {},
  },
);

export default createAppContainer(PrimaryNav);
