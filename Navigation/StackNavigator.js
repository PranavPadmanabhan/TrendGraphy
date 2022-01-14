import React from 'react'
import LandingPage from '../screens/LandingPage/LandingPage'
import LoginPage from '../screens/LoginPage/LoginPage'
import NavigationPage from '../screens/NavigationPage/NavigationPage'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();


function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='LandingPage'>
                <Stack.Screen name="LandingPage" component={LandingPage} options={{ headerShown: false }} />
                <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
                <Stack.Screen name="NavigationPage" component={NavigationPage} options={{ headerShown: false }} />
                <Stack.Screen name="HOME" component={DrawerNavigator} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator
