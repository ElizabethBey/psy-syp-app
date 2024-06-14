import { Text } from "react-native";
import React from "react";
import colors from "../assets/colors";

export default function Heading(props) {
  return (
    <Text style={{
            color: colors.textDark, 
            fontSize: 32, 
            fontWeight: "bold", 
            paddingTop: "3%", 
            paddingLeft: "5%",
            paddingRight: "5%",
            paddingBottom: "5%" 
            }}>
      {props.content}
    </Text>
  );
}