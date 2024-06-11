import Heading from "./heading"
import colors from "../assets/colors"

import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Profile = ({ navigation }) => {
  return (
    <SafeAreaView className="bg-white container h-full px-7" style={{flex: 1, backgroundColor: colors.bgGray}}>
        <Heading content="Ваш профиль" />

        <Text className="text-left text-base pt-5"
            style={{ color: colors.textDark }}>
        Profile
        </Text>
    </SafeAreaView>
  );
};

export default Profile;