import Heading from "./heading"
import colors from "../assets/colors"
import commonStyles from "./styles";
import Topic from "./topic";
import TopicsStuff from "../assets/allTopics";

import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useBottomTabBarHeight  } from '@react-navigation/bottom-tabs';
import { 
    TextInput,
    TouchableRipple,
    Switch,
    Divider,
    IconButton,
  } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";


const CreatePage = ({ navigation }) => {

  const [topics, setTopics] = useState([]);
  const [content, setContent] = useState("");
  const [isPrivate, setIsPrivate] = useState(true);

  const tabBarHeight = useBottomTabBarHeight();

  const topicInteract = (t) =>
    topics.includes(t) ? setTopics(topics.filter(it => it !== t))
    : setTopics([...topics, t]);
  
  return (
    <SafeAreaView style={[commonStyles.container, { paddingTop:"2%", backgroundColor: colors.textWhite, paddingBottom: tabBarHeight + 3}]}>
      
      <View style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          backgroundColor: colors.textWhite, 
          height: "8%",
          paddingLeft: "5%",
         }}>
          <IconButton
            icon="keyboard-backspace"
            iconColor={colors.primary}
            size={35}
            onPress={ () => navigation.navigate( { name: "myEntries" }) }
            style={{ borderColor: "transparent", margin: 0 }}
          />
        <Text style={[commonStyles.boldText, {paddingLeft:"3%", paddingTop: "3%"}]}>Отмена</Text>
      </View>

      <View style={{backgroundColor: colors.bgGray, paddingTop: 10, height: "100%"}}>
        <Heading navigation={navigation} content="Новая запись" icon="check" goTo="MyEntries" />

        <View style={{paddingBottom: "5%", paddingTop: "5%"}}>
          <TextInput style={[styles.largeInput, styles.multilineText]}
            multiline
            value={content}
            onChangeText={ text => setContent(text) }
            placeholder="Введите текст"
            numberOfLines={10}
            cursorColor={colors.textDark}
          />

          <View style={{paddingRight: "5%"}}>
              <TouchableRipple onPress={() => setIsPrivate(!isPrivate)}>
                  <View style={[commonStyles.row, { paddingBottom: 0, }]}>
                  <Text style={[commonStyles.simpleText, {paddingTop: "3%"}]}>Приватная запись</Text>
                    <View pointerEvents="none">
                      <Switch value={isPrivate} />
                    </View>
                  </View>
              </TouchableRipple>
                </View>
            <Divider horizontalInset="5%" bold="true" />
          </View>

          <Text style={commonStyles.simpleText}>Темы записи</Text>

          <Divider horizontalInset="5%" bold="true" />

          <View style={[commonStyles.chipRow, {paddingHorizontal: "5%", marginTop: "3%"}]}>
              { TopicsStuff.allTopics.map((item, index) => {
                return (
                  <Topic key={index} item={item} fun={ (topic) => topicInteract(topic) } />
                );
              })}
          </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
  largeInput: {
    //borderWidth: 1,
    //borderRadius: 10,
    backgroundColor: colors.ligthPrimary,
    //paddingTop: "2%",
    // paddingLeft: "5%",
    // paddingRight: "5%",
    // paddingBottom: "0%",
    marginTop: 0,
    marginLeft: "5%",
    marginRight: "5%",
    marginBottom: "3%",
    //height: 300, 
  },
  button: {
    fontSize: 14,
  },
  multilineText:{
    minHeight: 100,
  }
});

export default CreatePage;