import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";

import Home from './screens/Home'
import Follow from './screens/Follow'

const MainNavigator=createStackNavigator({
  Home:{screen:Home},
  Follow:{screen:Follow}
},{
  defaultNavigationOptions:{
    headerTintColor:"#FFF",
    headerStyle:{
      backgroundColor:"#BA2F16"
    }
  }
})


const App =createAppContainer(MainNavigator);
export default App;