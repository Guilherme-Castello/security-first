import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FormCreate from './Screens/FormCreate';
import FormList from './Screens/FormList';
import FormViewer from './Screens/FormViewer';
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
          <Drawer.Screen name="Form List" component={FormList} />
          <Drawer.Screen name="Form Create" component={FormCreate} />
          <Drawer.Screen name="FormViewer" component={FormViewer}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </PortalProvider>
  );
}
