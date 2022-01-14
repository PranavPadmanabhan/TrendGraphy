
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './screens/LandingPage/LandingPage';
import LoginPage from './screens/LoginPage/LoginPage';
import NavigationPage from './screens/NavigationPage/NavigationPage';
import HomePage from './screens/HomePage/HomePage';


const Stack = createNativeStackNavigator();



const App = () => {
   return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='LandingPage'>
      <Stack.Screen name="LandingPage" component={LandingPage} options={{headerShown:false}}/>
      <Stack.Screen name="LoginPage" component={LoginPage} options={{headerShown:false}}/>
      <Stack.Screen name="NavigationPage" component={NavigationPage} options={{headerShown:false}}/>
      <Stack.Screen name="HomePage" component={HomePage} options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
};


export default App;
