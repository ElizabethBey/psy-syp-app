import Heading from "./heading"
import colors from "../assets/colors"
import commonStyles from "./styles";
import Topic from "./topic";
import RadioGroup from "./radioGroup";

import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useBottomTabBarHeight  } from '@react-navigation/bottom-tabs';
import { TextInput, RadioButton, Button } from "react-native-paper";


const CreatePage = ({ navigation }) => {

  const [content, setContent] = useState("");
  const [isPrivate, setIsPrivate] = useState(true);

  const tabBarHeight = useBottomTabBarHeight();

  return (
    <SafeAreaView style={[commonStyles.container, { paddingBottom: tabBarHeight - 10}]}>

      <Heading content="Новая запись"/>
      <TextInput
        style={styles.largeInput}
        selectionColor={colors.primary}
        underlineColor="transparent"
        mode="outlined"
        value={content}
        onChangeText={ text => setContent(text) }
        placeholder="Введите текст"
      />
      
      <Topic/>
      <Topic/>
      <Topic/>

      <RadioGroup/>

      
      <Button mode="contained" onPress={() => {}}>
        Создать
      </Button> 

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  largeInput: {
    //height: "100%",
    backgroundColor: colors.textDark,
    paddingTop: "3%",
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingBottom: "5%",
    margin: "5%",
  },
  button: { 
    backgroundColor: colors.primary,
    margin: 20, 
  },
});

export default CreatePage;