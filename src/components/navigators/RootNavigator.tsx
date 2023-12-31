
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Homescreen from '../../screens/HomeScreen';
import { NavigatorScreenParams } from '@react-navigation/native';
import BottomTabNavigator, { BottomStackParamList } from './BottomTabsNavigator';
import PhotographerDescScreen from '../../screens/PhotographerDescScreen';
import ListPhotographerScreen from '../../screens/ListPhotographerScreen';

export type RootStackParamList = {
    Homescreen: undefined;
    PhotographerDesc: undefined;
    ListProfile: undefined;
    BottomTabs: NavigatorScreenParams<BottomStackParamList>
}
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name='BottomTabs' component={BottomTabNavigator} />
            <Stack.Screen options={{ headerShown: false }} name='Homescreen' component={Homescreen} />
            <Stack.Screen options={{ headerShown: false }} name='PhotographerDesc' component={PhotographerDescScreen} />
            {/* <Stack.Screen options={{ headerShown: false }} name='ListProfile' component={ListPhotographerScreen} /> */}
        </Stack.Navigator>
    )
}

export default RootNavigator