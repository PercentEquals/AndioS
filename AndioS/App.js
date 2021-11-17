import React from 'react';

import LandingPage from './components/auth/LandingPage'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function App() {
return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing" component={LandingPage} options={{headerShown: false}} />
        </Stack.Navigator>
    </NavigationContainer>
);
}