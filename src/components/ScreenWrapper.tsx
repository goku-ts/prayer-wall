

import React, { FC, useEffect, useState } from "react"
import { SafeAreaView, ScrollView, Platform, StyleSheet, ImageBackground, StatusBar } from "react-native"

import { COLORS } from "../constants/theme"

type WrapperType = {
    children: any,
    component? : any
}


export const Wrapper: FC<WrapperType> = ({ children, component }) => {
    
    return (

        <SafeAreaView style={styles.safeArea1} >
                {children}
        </SafeAreaView>

    )

}

export const MainWrapper: FC<WrapperType> = ({ children }) => {


    return (
        <ImageBackground source={require("../assets/images/1.jpg")} style={{ flex: 1 }}>
            <SafeAreaView style={styles.safeArea} >
                {children}
            </SafeAreaView>
        </ImageBackground>
    )

}

const styles = StyleSheet.create({
  
    safeArea: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.30)" 
    },
    safeArea1: {
        flex: 1,
        backgroundColor: COLORS.background
    }
})