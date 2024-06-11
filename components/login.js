import colors from "../assets/colors"
import Heading from "./heading"
import CustomButton from "./customButton"

import { View, TextInput, SafeAreaView, Image } from "react-native";
import { useState } from "react";


const Login = ({ navigation }) => {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView className="bg-white container h-full px-7">
      <View className="flex justify-center items-center mt-20">
        <Image
          source={require('./../assets/login.png')}
          style={{width: 300, height: 200}}
        />
      </View>

      <View className="mt-18">
        <Heading content="Войти в аккаунт" />
      </View>

      <View className="mt-6">
      <TextInput
        onChangeText={setNickname}
        placeholder={"Ваш никнейм"}
        placeholderTextColor={colors.textDark}
        value={nickname}
        className="bg-zinc-200 text-textgray rounded-xl py-3 px-5"
      />
      <TextInput
        onChangeText={setPassword}
        placeholder={"Пароль"}
        placeholderTextColor={colors.textDark}
        value={password}
        className="bg-zinc-200 text-textgray mt-3 rounded-xl py-3 px-5"
      />
      </View>
      <View className="mt-8">
        <CustomButton
            navigation={navigation}
            bgColor={colors.primary}
            textColor={colors.textWhite}
            goto={"Greeting"}
            content={"Войти"}
        />
      </View>

    </SafeAreaView>
  );
};

export default Login;