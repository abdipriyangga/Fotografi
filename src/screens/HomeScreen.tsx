import { View, Image, StyleSheet, Text } from 'react-native'
import React from 'react'
import { ImageAssets } from '../assets/images/ImageAssets'
const Homescreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.bannerImage}>
                <Image source={ImageAssets.batikImage} />
            </View>
            <View>
                <Text style={styles.firstTitle}>Photophy</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bannerImage: {
        alignItems: "flex-end",
    },
    firstTitle: {
        fontSize: 24
    }
});
export default Homescreen