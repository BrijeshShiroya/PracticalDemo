import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import ReduxNavigation from '../navigation/ReduxNavigation';
import {ApplicationStyles} from '../theme';

const RootContainer = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <ReduxNavigation />
    </SafeAreaView>
  );
};
// wraps dispatch to create nicer functions to call within our component

export default RootContainer;
