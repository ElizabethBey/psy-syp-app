import Heading from "./heading"
import CustomButton from "./customButton"
import colors from "../assets/colors"

import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Greeting = ({ navigation }) => {
  return (
    <SafeAreaView className="bg-white container h-full px-7">
      <View className="flex justify-center items-center mt-20">
        <Image
          source={require('./../assets/greeting.png')}
          style={{width: 400, height: 300}}
        />
      </View>

      <Heading content="Добро пожаловать!" />

      <Text className="text-left text-base pt-5"
            style={{ color: colors.textDark }}
      >
        Пожалуйста войдите в аккаунт или зарегистрируйтесь, чтобы
        начать.
      </Text>

      <View className="mt-6">
        <TouchableOpacity
          className="mt-3 rounded-xl py-3"
          style={{ elevation: 1, backgroundColor: colors.primary }}
          onPress={() => navigation.navigate("Login")}>
          <Text
            className="text-center text-base"
            style={{ color: colors.textWhite }}>
             Войти
          </Text>
        </TouchableOpacity>

        <CustomButton
          navigation={navigation}
          bgColor={colors.bgGray}
          textColor={colors.textDark}
          goto={"Registration"}
          content={"Зарегистрироваться"}/>
      </View>

    </SafeAreaView>
  );
};

export default Greeting;