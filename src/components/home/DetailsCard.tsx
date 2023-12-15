import React, { FC } from 'react';

import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';

import { COLORS, SCREEN } from '../../constants/theme';

import { Entypo, MaterialCommunityIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

type cardType = {
    icon: any,
    title: string,
    details? : string,
    onPress? : any
}
const DetailsCard: FC<cardType> = ({icon,title,details,onPress}) => {
    return (

        <TouchableOpacity style={[styles.container, styles.shadowProp]} activeOpacity={0.8} onPress={onPress}>
            <View>
                <View style={styles.category}>
                    {/* ICON */}
                    <FontAwesome5 name={icon} size={25} color={COLORS.secondary} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.category}>
                    <View style={{ width: "95%" }}>
                        <Text style={styles.details}>{details}</Text>
                    </View>
                </View>
            </View>
            <FontAwesome name="chevron-right" size={25} color={COLORS.secondary}  />
        </TouchableOpacity>

    );
}

export default DetailsCard

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: SCREEN.height * 0.13,
        width: SCREEN.width * 0.93,
        backgroundColor: "white",
        borderRadius: 5,
        marginVertical: 2,
        elevation: 1,
        padding: 15,
        alignItems: "center"
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
    },
    category: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5
    },
    title: {
        fontFamily: "Poppins-Medium",
        marginLeft: 5,
        fontSize: 18,
        color: COLORS.secondary,
    
    },
    details: {
        fontFamily: "Poppins-Regular",
        fontSize: 13
    }
});
