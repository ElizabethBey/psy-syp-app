import { View, Image, TextInput } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Heading from "./heading"
import CustomButton from "./customButton"
import colors from "../assets/colors"


const Registration = ({ navigation }) => {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({}); 
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => { 
    validateForm();
    handleSubmit();
  }, [nickname, email, phone, password]);

  const validateForm = () => {
    let errors = {}; 
    let blank = 'Это поле является обязательным';

    if (!nickname) { 
        errors.name = blank;
    } 

    if (!email) { 
        errors.email = blank; 
    } else if (!/\S+@\S+\.\S+/.test(email)) { 
        errors.email = 'Некорректное значение'; 
    }

    if (!phone) { 
      errors.phone = blank; 
    } else if (!/[0-9]+/.test(phone) || phone.length != 11) { 
        errors.phone = 'Некорректное значение'; 
    }

    if (!password) { 
        errors.password = blank;
    } else if (password.length < 4) { 
        errors.password = 'Длина пароля не менее 6 символов';
    }

    setErrors(errors); 
    setIsFormValid(Object.keys(errors).length === 0); 
  };

  const handleSubmit = () => {
      if (isFormValid) {
          console.log('Ошибок нет'); 
      } else {
          console.log('В форме есть ошибки'); 
      }
  };

  return (
    <SafeAreaView className="bg-white container h-full px-7">

      <View className="flex justify-center items-center">
        <Image
          source={require('./../assets/signup.png')}
          style={{width: 200, height: 100}}
        />
      </View>

      <View className="mt-20">
        <Heading content="Регистрация" />
      </View>

      <View className="mt-6">
      <TextInput
        onChangeText={setNickname}
        placeholder={"Никнейм"}
        placeholderTextColor={colors.textDark}
        value={nickname}
        className="bg-zinc-200 text-textgray rounded-xl py-3 px-5"
      />
      <TextInput
        onChangeText={setEmail}
        placeholder={"Почта"}
        placeholderTextColor={colors.textDark}
        value={email}
        className="bg-zinc-200 text-textgray rounded-xl mt-3 py-3 px-5"
      />

      <TextInput
        onChangeText={setPhone}
        placeholder={"Номер телефона"}
        placeholderTextColor={colors.textDark}
        value={phone}
        className="bg-zinc-200 text-textgray rounded-xl mt-3 py-3 px-5"
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
            content={"Зарегестрироваться"}
        />
      </View>

    </SafeAreaView>
  );
};

export default Registration;