
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Platform } from 'react-native';
import { COLORS } from '../../constants/theme';

import { Entypo, MaterialCommunityIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { FC } from 'react';

type headerType = {
    onPress: any
}

const Header: FC<headerType> = ({ onPress }) => {
    return (

        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <FontAwesome name="chevron-left" size={25} color={COLORS.secondary} />
            </TouchableOpacity>
            <View>

            </View>
        </View>
    );
}


export default Header

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === "ios" ? 0 : 35,
        paddingHorizontal:15,
    },
});
