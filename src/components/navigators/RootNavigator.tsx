
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Homescreen from '../../screens/HomeScreen';
import { NavigatorScreenParams } from '@react-navigation/native';
import BottomTabNavigator, { BottomStackParamList } from './BottomTabsNavigator';

export type RootStackParamList = {
    Homescreen: undefined;
    BottomTabs: NavigatorScreenParams<BottomStackParamList>
}
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name='BottomTabs' component={BottomTabNavigator} />
            <Stack.Screen options={{ headerShown: false }} name='Homescreen' component={Homescreen} />
        </Stack.Navigator>
    )
}

export default RootNavigator