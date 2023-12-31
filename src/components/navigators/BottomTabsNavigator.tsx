import React from 'react'
import Homescreen from '../../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import ProfileScreen from '../../screens/ProfileScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCompass } from '@fortawesome/free-regular-svg-icons';
import {
    StyleSheet,
} from 'react-native';
import { faL, faUser } from '@fortawesome/free-solid-svg-icons';
import ListPhotographerScreen from '../../screens/ListPhotographerScreen';
export type BottomStackParamList = {
    Explore: undefined,
    Profile: undefined
}
const BottomTabs = createBottomTabNavigator<BottomStackParamList>()

const BottomTabNavigator = () => {
    return (
        <BottomTabs.Navigator screenOptions={{
            tabBarStyle: style.bottomTabs,

        }}>
            <BottomTabs.Screen options={{
                headerShown: false, tabBarIcon(props) {
                    return <FontAwesomeIcon icon={faCompass} style={style.icon} size={32} />
                },
                title: ""
            }} name='Explore' component={Homescreen} />
            <BottomTabs.Screen name='Profile' component={ListPhotographerScreen} options={{
                tabBarIcon(props) {
                    return <FontAwesomeIcon icon={faUser} style={style.icon} size={32} />
                },
                title: "",
                headerShown: false
            }} />
        </BottomTabs.Navigator>
    )
}

const style = StyleSheet.create({
    bottomTabs: {
        backgroundColor: "#4E6E81",
        paddingTop: 10,
        paddingHorizontal: 5,
        alignItems: "center",
        justifyContent: "center",
        height: 60,
        width: 250,
        borderRadius: 30,
        top: -20,
        left: 80,
        shadowColor: "#000"
    },
    icon: {
        color: '#F9DBBB',
    }
})
export default BottomTabNavigator