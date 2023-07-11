import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { ImageAssets } from '../assets/images/ImageAssets'
import GridView from '../components/grid/GridView'
import TabProfileDesc from '../components/tab/TabProfileDesc'

const PhotographerDescScreen = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.bannerImage}>
                    <Image source={ImageAssets.batikImage} style={styles.batikImage} />
                </View>
                <View style={styles.sectionHeader}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <FontAwesomeIcon icon={faArrowLeft} style={styles.arrowLeft} size={28} />
                    </TouchableOpacity>
                    <Text style={styles.textHeader}>Profile</Text>
                </View>
                <View style={styles.sectionContent}>
                    <Image source={ImageAssets.profile2} />
                    <View style={styles.secondContainer}>
                        <Text style={styles.textName}>Aqil</Text>
                        <View style={styles.sectionLogo}>
                            <TouchableOpacity>
                                <Image source={ImageAssets.logoTwitter} style={styles.imageLogo} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={ImageAssets.logoFacebook} style={styles.imageLogo} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={ImageAssets.logoYoutube} style={styles.imageLogo} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={ImageAssets.logoInstagram} style={styles.imageLogo} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <GridView data={[
                    { image: ImageAssets.firstPic, id: 1 },
                    { image: ImageAssets.secondPic, id: 2 },
                    { image: ImageAssets.thirdPic, id: 3 },
                    { image: ImageAssets.fourthPic, id: 4 },
                    { image: ImageAssets.fifthPic, id: 5 },
                    { image: ImageAssets.sixthPic, id: 6 },
                ]} renderItem={(item) => <TouchableOpacity style={styles.itemContainer}>
                    <Image source={item.image} style={{ width: 190, height: 250 }} />
                </TouchableOpacity>} />
            </ScrollView>
            <TabProfileDesc />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 5
    },
    bannerImage: {
        alignItems: "flex-end",
    },
    batikImage: {
        width: 120,
        height: 70
    },
    sectionHeader: {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
        gap: 100,
        top: -50,
    },
    arrowLeft: {
        color: "#F9DBBB",
    },
    textHeader: {
        fontWeight: "bold",
        color: "#4E6E81",
        fontSize: 22,
    },
    sectionContent: {
        padding: 10,
        top: 0,
        flexDirection: 'row',
        gap: 40,
        marginBottom: 30
    },
    textName: {
        fontWeight: "bold",
        color: "#000",
        fontSize: 22,
    },
    secondContainer: {
        gap: 15
    },
    sectionLogo: {
        flexDirection: 'row',
        gap: 18
    },
    imageLogo: {
        width: 40,
        height: 40
    },
    thirdSection: {

    },
    itemContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 8,
        height: "auto",
    },
});
export default PhotographerDescScreen