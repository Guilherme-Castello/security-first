import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FormCreate from './Screens/FormCreate';
import FormList from './Screens/FormList';
import Test from './Screens/Test';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { PortalProvider } from '@gorhom/portal';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerScreens() {
  return (
    <Stack.Navigator initialRouteName="FormCreate">
      <Stack.Screen
        name="FormCreate"
        component={FormCreate}
        options={{ title: 'From Create' }}
      />
      <Stack.Screen
        name="FormList"
        component={FormList}
        options={{ title: 'From List' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <PortalProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="DrawerScreens" component={DrawerScreens} />
          <Drawer.Screen name="Test" component={Test} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PortalProvider>
  );
}
