import React from 'react';
import RootContainer from './RootContainer';
import {PersistGate} from 'redux-persist/integration/react';
import reduxStore from '../redux/Store';
import {Provider} from 'react-redux';
const App = () => {
  console.disableYellowBox = true;
  return (
    <Provider store={reduxStore.store}>
      <PersistGate loading={null} persistor={reduxStore.persistor}>
        <RootContainer />
      </PersistGate>
    </Provider>
  );
};

// allow reactotron overlay for fast design in dev mode
export default App;
