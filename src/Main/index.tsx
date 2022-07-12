import React from 'react';
import {StatusBar} from 'react-native';
import {RContainer} from './styles';
//import Parallax from './Parallex';
import ReduxExample from './reduxExample';

const MainScreen = () => {
  return (
    <RContainer>
      <StatusBar barStyle="light-content" />
      {/* <Parallax /> */}
      <ReduxExample />
    </RContainer>
  );
};

export default MainScreen;
