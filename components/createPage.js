import Heading from "./heading"
import colors from "../assets/colors"

import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CreatePage = ({ navigation }) => {
  return (
    <SafeAreaView className="bg-white container h-full px-7" style={{flex: 1,  backgroundColor: colors.bgGray}}>
        <Heading content="Новый пост" />

        <Text className="text-left text-base pt-5"
            style={{ color: colors.textDark }}
        >
        Create Entry
        </Text>
    </SafeAreaView>
  );
};

export default CreatePage;