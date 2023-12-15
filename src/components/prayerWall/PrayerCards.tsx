
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { COLORS, SCREEN } from '../../constants/theme';

import { Entypo, MaterialCommunityIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { FC } from 'react';

type cardType = {
    onPress?: any
}

const PrayerCard: FC<cardType> = ({ onPress }) => {
    return (
        <View style={styles.container}>
            <View style={{ padding: 15 }}>
                <View style={styles.headerContainer}>
                    <View style={{flexDirection: "row",alignItems: "center"}}>
                        <View style={styles.avatar}>
                            <Text style={styles.avatarText}>N</Text>
                        </View>
                        <View style={{marginLeft: 10}}>
                            <Text style={styles.name}>
                                No Name
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.time}>30 minutes ago</Text>
                    </View>
                </View>
                <View style={{ padding: 5 }}>
                    <Text>
                        i pray for breakthroug and blessings all around my life.
                        good news is coming to me, i am blessed.
                        i pray for breakthroug and blessings all around my life.
                        good news is coming to me, i am blessed
                    </Text>
                </View>
                <View style={styles.bottomContainer}>
                    <View>
                        <Text style={styles.bottomText}>200 people prayed for you</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity style={styles.icon}>
                            <FontAwesome5 name="pray" size={24} color="black" />
                            <Text style={styles.iconName}>Pray</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.icon}>
                            <MaterialCommunityIcons name="connection" size={24} color="black" />
                            <Text style={styles.iconName}>Connect</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}


export default PrayerCard

const styles = StyleSheet.create({
    container: {
        width: SCREEN.width * 0.9,
        height: SCREEN.height * 0.25,
        backgroundColor: "white",
        borderRadius: 10,
        marginVertical: 5,
        justifyContent: "center"
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    avatar: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: COLORS.secondary,
        alignItems: "center",
        justifyContent: "center"
    },
    avatarText: {
        fontSize: 20,
        fontFamily: "Poppins-Medium",
        fontWeight: "bold",
        color: "white"
    },
    name: {
        fontSize: 20,
        fontFamily: "Poppins-Medium",
        color: "black"
    },
    time: {
        fontSize: 12,
        fontFamily: "Poppins-Medium",
        color: "black",
        padding: 5
    },
    bottomContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5
    },
    bottomText: {
        fontFamily: "Poppins-Regular",
        fontWeight: "bold"
    },
    icon: {
        marginHorizontal: 10,
        alignItems: "center"
    },
    iconName: {
        fontSize: 10,
        fontFamily: "Poppins-Regular"
    }

});
