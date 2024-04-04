import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Profile from '../screens/profile';
import { SideMenu } from '../components/generic';

const Drawer = createDrawerNavigator();

const DrawerNavigationStack = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <SideMenu {...props} />}>
      <Drawer.Screen
        name="FirstPage"
        component={Profile}
        options={{
          drawerLabel: 'First page Option',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigationStack;
