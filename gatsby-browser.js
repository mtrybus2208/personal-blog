import React from "react"
import { StateProvider } from "./src/context/globalContext";
export const wrapRootElement = ({ element }) => (
  <StateProvider>{element}</StateProvider>
)