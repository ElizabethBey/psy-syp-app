import commonStyles from "./styles";
import colors from "../assets/colors";


import { Text, View } from "react-native";
import React from "react";
import { Divider, IconButton } from "react-native-paper";


export default function Heading({ navigation, content, icon, goTo }) {
  return (
    <View>
      <View style={[commonStyles.row, { paddingRight: "5%"}]}>
          <Text style={[commonStyles.titleText]}> {content} </Text>
          <IconButton
            icon={icon}
            iconColor={colors.primary}
            size={35}
            onPress={ () =>  navigation.navigate({ name: goTo })}
            style={{ borderColor: "transparent", margin: 0 }}
          />
        </View>
        <Divider horizontalInset="5%" bold="true" />
    </View>
  );
}