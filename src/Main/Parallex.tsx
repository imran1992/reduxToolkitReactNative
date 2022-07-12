import React, {Fragment} from 'react';
//import {Ionicons, SimpleLineIcons, Octicons} from '@expo/vector-icons';
import {Bottom, Header} from './styles';
import Content from './components/Content';

const MainScreen = () => {
  return (
    <Fragment>
      <Header>
        {/* <SimpleLineIcons name="menu" size={24} color="white" />
        <Ionicons name="person-outline" size={28} color="white" /> */}
      </Header>
      <Content />
      <Bottom>
        {/* <Octicons name="home" size={26} color="white" />
        <Octicons name="heart" size={26} color="#b4b4b4" />
        <Octicons name="search" size={26} color="#b4b4b4" /> */}
      </Bottom>
    </Fragment>
  );
};

export default MainScreen;
