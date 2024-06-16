import colors from "../assets/colors"
import Heading from "./heading"
import AuthService from "../services/authService";

import { View, TextInput, SafeAreaView, Image, TouchableOpacity, Text } from "react-native";
import { useState } from "react";


const Login = ({ navigation, onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const log = () => {
    setMessage("");
    if (username === "" || password === ""){
      setMessage("Вы не ввели никнейм или пароль");
      return;
    }

    AuthService.login(username).then(
      (res) => {
        colsole.log(res.data);
        if (res.data.password === password) {
          localStorage.setItem("user", JSON.stringify(res.data));
        }
        else setMessage("Неправильный никнейм или пароль");
        onLogin();
      },
      (error) => {
        setMessage("Неправильный никнейм или пароль");
        onLogin();
      }
    );
  };

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
        onChangeText={setUsername}
        placeholder={"Ваш никнейм"}
        placeholderTextColor={colors.textDark}
        value={username}
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
      <TouchableOpacity
          className="mt-3 rounded-xl py-3"
          style={{ elevation: 1, backgroundColor: colors.primary }}
          onPress={log}>
          <Text
            className="text-center text-base"
            style={{ color: colors.textWhite }}>
             Войти
          </Text>
        </TouchableOpacity>
      </View>

      {message && (
          <Text className="mt-2 text-center text-sm text-gray-600 mt-5">
              {message}
          </Text>
        )}

    </SafeAreaView>
  );
};

export default Login;