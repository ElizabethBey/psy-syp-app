import Heading from "./heading"
import colors from "../assets/colors"
import commonStyles from "./styles";

import React, { useState } from "react";
import { View, StyleSheet, Text,  Image } from "react-native";
import { useBottomTabBarHeight  } from '@react-navigation/bottom-tabs';
import {
    TextInput,
    IconButton,
    Button,
    Provider as PaperProvider
  } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";


const EditProfilePage = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthday, setBirthday] = useState('');

  const tabBarHeight = useBottomTabBarHeight();

  const user = {
    "username": "John",
    "email": "john@email.com",
    "phone": "89873660679",
    "password": "123",
    "birthday": "2024-05-04",
    "gender": true,
    "pfp": 0,
    "topics": []
  };

  return (
    <PaperProvider>

    <SafeAreaView style={[commonStyles.container, { paddingTop:"2%", backgroundColor: colors.textWhite, paddingBottom: tabBarHeight + 3}]}>
      
      <View style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          backgroundColor: colors.textWhite, 
          height: "8%",
          paddingLeft: "5%",
          minHeight: 50,
         }}>
          <IconButton
            icon="keyboard-backspace"
            iconColor={colors.primary}
            size={35}
            onPress={ () => navigation.goBack() }
            style={{ borderColor: "transparent", margin: 0 }}
          />
        <Text style={[commonStyles.boldText, {paddingLeft:"3%", paddingTop: "3%"}]}>Отмена</Text>
      </View>

      <View style={{backgroundColor: colors.bgGray, paddingTop: 10, height: "100%"}}>
        
        <View style={{paddingTop: 30, justifyContent: 'center', alignItems: 'center',}}>
            <TextInput
                label="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                style={styles.input}
                keyboardType="email-address"
                cursorColor={colors.textDark}
            />
            <TextInput
                label="Phone"
                value={phone}
                onChangeText={text => setPhone(text)}
                style={styles.input}
                keyboardType="phone-pad"
                cursorColor={colors.textDark}
            />
            <TextInput
                label="Birthday"
                value={birthday}
                onChangeText={text => setBirthday(text)}
                style={styles.input}
                placeholder="YYYY-MM-DD"
                cursorColor={colors.textDark}
            />
            <Button mode="elevated" 
                elevation={30} 
                style={styles.button} 
                onPress={() => console.log({ email, phone, birthday })}
                textColor={colors.textWhite}
                >
                Изменить
            </Button>
        </View>
      </View>
        
        </SafeAreaView></PaperProvider>
  );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        margin: 8,
    },
    button: {
        fontSize: 14,
        margin: 5,
        backgroundColor: colors.primary,
    },
    input: {
        width: "80%",
        marginBottom: 25,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginRight: 10,
    }
});

export default EditProfilePage;