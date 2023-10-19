import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator,} from "@react-navigation/drawer";
import Home from '../screens/Home';
import Details from '../screens/Details';


const Drawer = createDrawerNavigator();


const AuthRoute = () => {
    const Stack = createStackNavigator()

    const AppDrawer = () => {
        return (
            <Drawer.Navigator
                drawerStyle={{
                    width: (70),
                }}
                screenOptions={{
                    drawerStyle: {
                        backgroundColor: 'lightgrey',
                    },
                    drawerLabelStyle: { color: "black" },
                    activeTintColor: 'blue',
                    activeBackgroundColor: 'blue',
                    inactiveTintColor: 'blue',
                    inactiveBackgroundColor: 'blue',
                }}
            >
                <Drawer.Screen name="Home" component={Home} initialRouteName={Home}/>
            </Drawer.Navigator>
        );
    };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name={'Home'} component={Home} options={{headerShown: false}}/>
        <Stack.Screen name={'Details'} component={Details} options={{headerShown: true}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthRoute;
