import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { ImageAssets } from '../assets/images/ImageAssets'

const ListPhotographerScreen = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.sectionHeader}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <FontAwesomeIcon icon={faArrowLeft} style={styles.arrowLeft} size={28} />
                    </TouchableOpacity>
                    <Text style={styles.textHeader}>Fotographer</Text>
                </View>
                <View style={styles.sectionContent}>
                    <View style={styles.containerProfilePic}>
                        <Image source={ImageAssets.profile2} />
                    </View>
                    <View style={styles.secondContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.textName}>Aqil</Text>
                            <View style={styles.secTextContainer}>
                                <Text style={styles.textDays}>1 Hari</Text>
                                <Text style={styles.textPrice}>Rp. 500000</Text>
                            </View>
                        </View>
                        <View style={styles.sectionButton}>
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PhotographerDesc')}>
                                <Text style={styles.textButton}>Lihat Hasil</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonCalling}>
                                <Text style={styles.textButton}>Hubungi</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.sectionContent}>
                    <View style={styles.containerProfilePic}>
                        <Image source={ImageAssets.profile2} />
                    </View>
                    <View style={styles.secondContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.textName}>Aqil</Text>
                            <View style={styles.secTextContainer}>
                                <Text style={styles.textDays}>1 Hari</Text>
                                <Text style={styles.textPrice}>Rp. 500000</Text>
                            </View>
                        </View>
                        <View style={styles.sectionButton}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.textButton}>Lihat Hasil</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonCalling}>
                                <Text style={styles.textButton}>Hubungi</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.sectionContent}>
                    <View style={styles.containerProfilePic}>
                        <Image source={ImageAssets.profile2} />
                    </View>
                    <View style={styles.secondContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.textName}>Aqil</Text>
                            <View style={styles.secTextContainer}>
                                <Text style={styles.textDays}>1 Hari</Text>
                                <Text style={styles.textPrice}>Rp. 500000</Text>
                            </View>
                        </View>
                        <View style={styles.sectionButton}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.textButton}>Lihat Hasil</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonCalling}>
                                <Text style={styles.textButton}>Hubungi</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.sectionContent}>
                    <View style={styles.containerProfilePic}>
                        <Image source={ImageAssets.profile2} />
                    </View>
                    <View style={styles.secondContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.textName}>Aqil</Text>
                            <View style={styles.secTextContainer}>
                                <Text style={styles.textDays}>1 Hari</Text>
                                <Text style={styles.textPrice}>Rp. 500000</Text>
                            </View>
                        </View>
                        <View style={styles.sectionButton}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.textButton}>Lihat Hasil</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonCalling}>
                                <Text style={styles.textButton}>Hubungi</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    sectionHeader: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        gap: 100,
        top: 20,
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
        backgroundColor: "#fff",
        top: 50,
        flexDirection: 'row',
        gap: 20,
        marginBottom: 12,
        height: 150,
        borderRadius: 8,
        alignItems: "center",
        padding: 10
    },
    textName: {
        fontWeight: "bold",
        color: "#4E6E81",
        fontSize: 22,
        top: 12
    },
    textDays: {
        fontWeight: "bold",
        color: "#D9D9D9",
        fontSize: 15,
    },
    textPrice: {
        fontWeight: "bold",
        color: "#000",
        fontSize: 20,
    },
    secondContainer: {
        gap: 10,
        flexDirection: "row"
    },
    sectionButton: {
        padding: 8,
        left: 18
    },
    button: {
        borderColor: "#F9DBBB80",
        borderWidth: 1,
        padding: 5,
        height: 40,
        width: 110,
        borderRadius: 8,
        marginBottom: 18
    },
    buttonCalling: {
        borderColor: "#F9DBBB80",
        borderWidth: 1,
        padding: 5,
        height: 40,
        width: 110,
        borderRadius: 8,
        marginBottom: 18,
        backgroundColor: "#F9DBBB80"
    },
    textButton: {
        fontSize: 15,
        fontWeight: "900",
        color: "#4E6E81",
        textAlign: "center"
    },
    textCalling: {
        fontSize: 15,
        fontWeight: "900",
        color: "#4E6E81",
        textAlign: "center",
    },
    containerProfilePic: {

    },
    textContainer: {
        gap: 17
    },
    secTextContainer: {
        top: 13
    }
});
export default ListPhotographerScreen