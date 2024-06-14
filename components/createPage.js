import Heading from "./heading"
import colors from "../assets/colors"
import commonStyles from "./styles";
import Topic from "./topic";

import React, { useState, TextComponent } from "react";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useBottomTabBarHeight  } from '@react-navigation/bottom-tabs';
import { 
    TextInput,
    TouchableRipple,
    Button,
    Divider,
    Switch,
  } from "react-native-paper";


const CreatePage = ({ navigation }) => {

  const [content, setContent] = useState("");
  const [isPrivate, setIsPrivate] = useState(true);

  const tabBarHeight = useBottomTabBarHeight();

  return (
    <SafeAreaView style={[commonStyles.container, { paddingBottom: tabBarHeight - 10}]}>
      
      <View style={styles.row}>
        <Heading content="Новая запись"/>
        <Button
            mode="elevated"
            compact
            onPress={() => {}}
            style={styles.button}
            textColor={colors.textWhite}
          >
              Создать
          </Button>
      </View>

      <Divider horizontalInset="5%" bold="true"/>

      <TouchableRipple onPress={() => setIsPrivate(!isPrivate)}>
        <View style={[styles.row, { paddingBottom: 0, }]}>
         <Text style={[commonStyles.simpleText, {paddingTop: "3%"}]}>Приватная запись</Text>
          <View pointerEvents="none">
            <Switch value={isPrivate} />
          </View>
        </View>
      </TouchableRipple>

      <TextInput
        style={styles.largeInput}
        multiline
        selectionColor={colors.textWhite}
        underlineColor={colors.textWhite}
        mode="flat"
        value={content}
        onChangeText={ text => setContent(text) }
        placeholder="Введите текст"
      />
      
      <Text style={commonStyles.simpleText}>Выберете темы записи</Text>
      <View style={styles.chipRow}>
        <Topic/>
        <Topic/>
        <Topic/>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  largeInput: {
    backgroundColor: colors.ligthPrimary,
    paddingTop: "3%",
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingBottom: "0%",
    margin: "5%",
    height: "45%",
  },
  button: { 
    backgroundColor: colors.primary,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingRight: "5%",
    paddingBottom: "3%",
    //paddingTop:"3%",
  },
  item: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
  }
});

export default CreatePage;