import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const TabProfileDesc = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.textDays}>1 Hari</Text>
                <Text style={styles.textPrice}>Rp. 500000</Text>
            </View>
            <View style={styles.secondSection}>
                <TouchableOpacity style={styles.button}>
                    <FontAwesomeIcon icon={faPhone} style={styles.icon} size={25} />
                    <Text style={styles.textCall}>Hubungi</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4E6E81',
        height: 80,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: "absolute",
        width: "100%",
        alignItems: "center",
        top: 573,
        left: 5.5
    },
    textDays: {
        color: "#fff",
        fontWeight: '600'
    },
    textPrice: {
        fontSize: 22,
        color: "#F9DBBB",
        fontWeight: "900"
    },
    secondSection: {
        display: 'flex',
        flexDirection: 'row'
    },
    button: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: "#F9DBBB",
        height: 60,
        width: 160,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 10,
        gap: 8
    },
    icon: {
        color: "#000"
    },
    textCall: {
        fontSize: 19,
        fontWeight: 'bold',

    }
});
export default TabProfileDesc