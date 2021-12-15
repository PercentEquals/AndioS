import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import Background from './components/Background';

import localize from './components/locale/Localization';

import LandingPage from './components/auth/LandingPage'
import ChildrenPage from './components/childApp/ChildrenPage'
import ParentLoginPage from './components/auth/ParentLoginPage'
import ParentPage from './components/parentApp/ParentPage';
import ParentAddMoveChallPage from './components/parentApp/ParentAddMoveChallPage';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Background />

            <Stack.Navigator initialRouteName="Landing" screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid }}>
                <Stack.Screen name="Landing" component={LandingPage} options={{headerShown: true, title: 'AndioS' }} />
                <Stack.Screen name="Children" component={ChildrenPage} options={{headerShown: true, title: '🧒 ' + localize('children-page') }} />
                <Stack.Screen name="ParentLogin" component={ParentLoginPage} options={{headerShown: true, title: '👪 ' + localize('parent-page') + ' - ' + localize('login') }} />
                <Stack.Screen name="Parent" component={ParentPage} options={{headerShown: true, title: '👪 ' + localize('parent-page') }} />
                <Stack.Screen name="ParentAddMoveChall" component={ParentAddMoveChallPage} options={{headerShown: true, title: '🏃 ' + localize('add-movement-challenge') }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}