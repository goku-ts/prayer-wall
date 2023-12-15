import { SCREEN } from "../assets/theme";
import { changeMode } from "../assets/checkMode";



const COLORS = changeMode("dark")

 const FONT = {
    small: {
        fontSize: 15,
        color : COLORS.text
    },
    regular: {
        fontSize: 20,
        color : COLORS.text
    },
    ExtraLarge: {
        fontSize: 25,
        color : COLORS.text
    },

}
export  {
    SCREEN,
    FONT,
    COLORS
}