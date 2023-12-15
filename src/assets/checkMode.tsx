import React from "react"

import { COLORS } from "./theme"

export const changeMode = (mode : any)=>{
  if (mode === "dar") return COLORS.dark
  return COLORS.light
}