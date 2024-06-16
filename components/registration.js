import Heading from "./heading"
import CustomButton from "./customButton"
import colors from "../assets/colors"

import React from "react";
import { useState, useEffect } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";


const Registration = ({ navigation }) => {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({}); 
  const [isFormValid, setIsFormValid] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => { 
    validateForm();
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
      setMessage("");
      if (isFormValid) {
          console.log('Ошибок нет');
          navigation.navigate("Login");
          
      } else {
        setMessage("Некорректный ввод");
      }
  };

  return (
    <View className="bg-white container h-full px-7 py-15">

      <View className="mt-20">
        <Heading content="Регистрация" />
      </View>

     <View style={{paddingTop: "5%"}}>
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
      
      <View className="mt-5">
          <TouchableOpacity
            className="mt-3 rounded-xl py-3"
            style={{ elevation: 1, backgroundColor: colors.primary }}
            onPress={handleSubmit}>
          <Text
            className="text-center text-base"
            style={{ color: colors.textWhite }}>
             Зарегистрироваться
          </Text>
        </TouchableOpacity>
        {message && (
          <Text className="mt-2 text-center text-sm text-gray-600 mt-5">
              {message}
          </Text>
        )}
      </View>

    </View>
  );
};

export default Registration;