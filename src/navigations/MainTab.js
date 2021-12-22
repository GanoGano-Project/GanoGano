import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreen from '../screens/MainScreen';
import BoardScreen from '../screens/BoardScreen';
import SettingScreen from '../screens/SettingScreen';
import BoardStack from './BoardStack';
const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={MainScreen} />
      <Tab.Screen name="Board" component={BoardStack} options={{headerShown:false}}/>
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default MainTab;
