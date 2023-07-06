import { View, Image, StyleSheet, Text, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { ImageAssets } from '../assets/images/ImageAssets'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import GridView from '../components/grid/GridView'

const Homescreen = () => {

    return (
        <View style={styles.container}>
            <View style={styles.bannerImage}>
                <Image source={ImageAssets.batikImage} />
            </View>
            <View style={styles.section}>
                <Text style={styles.firstTitle}>Photophy</Text>
                <View style={styles.sectionLocation}>
                    <FontAwesomeIcon icon={faLocationDot} size={20} style={styles.iconLocation} />
                    <Text style={styles.titleLocation}>Taraju, Tasikmalaya</Text>
                </View>
            </View>
            <ScrollView >
                <GridView data={[
                    { image: ImageAssets.firstPic, id: 1 },
                    { image: ImageAssets.secondPic, id: 2 },
                    { image: ImageAssets.thirdPic, id: 3 },
                    { image: ImageAssets.fourthPic, id: 4 },
                    { image: ImageAssets.fifthPic, id: 5 },
                    { image: ImageAssets.sixthPic, id: 6 },
                ]} renderItem={(item) => <View style={styles.itemContainer}>
                    <Image source={item.image} style={{ width: 190, height: 250 }} />
                </View>} />
            </ScrollView>
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
        fontSize: 32,
        fontWeight: "900",
        color: "#000"
    },
    section: {
        padding: 10
    },
    sectionLocation: {
        display: 'flex',
        flexDirection: "row",
        paddingTop: 10,
        alignItems: "center"
    },
    iconLocation: {
        color: "#EB455F"
    },
    titleLocation: {
        fontSize: 18,
        fontWeight: "bold",
        paddingLeft: 5,
        color: "#000"
    },
    sectionContent: {
        backgroundColor: "red",
        padding: 10,
        display: 'flex',
        flexDirection: 'column'
    },
    itemContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 8,
        height: "auto",
    }
});
export default Homescreen