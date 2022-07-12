import React from 'react';
import {Provider} from 'react-redux';
import {View, Text} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import MainContainer from './Main';
import ReduxProvider from './redux';
const MainApp = () => {
  return (
    <React.StrictMode>
      <Provider store={ReduxProvider.Store}>
        <PersistGate
          loading={
            <View>
              <Text>Loading</Text>
            </View>
          }
          persistor={ReduxProvider.Persistor}>
          <MainContainer />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
};
export default MainApp;
