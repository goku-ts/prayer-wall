import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function Greeting() {
    function getTime() {
        const t = new Date().getHours()
        if (t < 12) {
            return "morning"
        } else if (t > 12 && t < 17) {
            return "afternoon"
        }
        return "evening"
    }

    const [time] = React.useState(getTime())

    return (

        <View style={styles.container}>
            <View style={styles.img}>
                <Image
                    source={
                        time === "morning" ?
                            require("../../assets/images/morning.png")
                            : time === "afternoon" ?
                                require("../../assets/images/afternoon.png")
                                : require("../../assets/images/evening.png")
                    } style={{ height: 40, width: 40 }} />
            </View>
            <View style={{ marginHorizontal: 10 }}>
                <Text style={styles.text}>
                    Good {time}, Beloved
                </Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom : 5,
        alignItems: "center",
    },
    img:{ 
        justifyContent: "center", 
        alignItems: "center" 
    },
    text : {
        fontFamily: "Poppins-Medium",
        fontSize: 23,
    }
});
