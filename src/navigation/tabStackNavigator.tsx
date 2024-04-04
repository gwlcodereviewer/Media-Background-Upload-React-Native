import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/home';
import { NAV_DRAWER_PROFILE, NAV_TAB_HOME } from './constants';
import DrawerNavigationStack from './drawerStackNavigator';

const Tab = createBottomTabNavigator();

/**
 * TabStackNavigator
 * desc: used for managing the app's screens bottom tab stack/routes
 */
const TabStackNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={NAV_TAB_HOME}
        component={Home}
        options={{
          tabBarLabel: 'Home'
        }}
      />
      <Tab.Screen
        name={NAV_DRAWER_PROFILE}
        component={DrawerNavigationStack}
        options={{
          tabBarLabel: 'Profile with Drawer',
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStackNavigator;
