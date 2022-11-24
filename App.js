import React from 'react';
import {
  SafeAreaView, Text,
} from 'react-native';
import { BotterBar, Button, Card, Header, SocialTab } from './src/components';
import { Home, SignUp } from './src/screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="signUp">
      <Stack.Screen name="signUp" component={SignUp} />
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};



export default App;
