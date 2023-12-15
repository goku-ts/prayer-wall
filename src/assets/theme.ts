import React from "react"
import { Dimensions } from "react-native"

export const COLORS = {
    dark: {
        text: "#fafaf0",
        background: "black",
        primary: "#0f2021",
        secondary: "#ff6600",
        secondary2: "#0f3538"
    },
    light: {
        text: "#fafaf0",
        background: "#fafaf0",
        primary: "#0f2021",
        secondary: "#ff6600",
        secondary2: "#ff6600"
    }
}


export const SCREEN = {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width
}



