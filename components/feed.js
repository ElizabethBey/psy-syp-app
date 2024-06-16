import Entry from "./entry";
import commonStyles from "./styles";
import Topic from "./topic";
import TopicsStuff from "../assets/allTopics";
import colors from "../assets/colors";

import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import { useBottomTabBarHeight  } from '@react-navigation/bottom-tabs';
import { Divider, IconButton, } from "react-native-paper";

const Feed = ({ navigation, onOpenModal }) => {

  const [topics, setTopics] = useState([]);
  const tabBarHeight = useBottomTabBarHeight();
  const allEntries = [
    {
      "id": 1,
      "iduser": 1,
      "posted": "2024-05-11T08:30:26",
      "content": "New public entry",
      "moderated": false,
      "visibility": "public",
      "topics": ["Работа", "Выгорание"]
    },
    {
      "id": 2,
      "iduser": 1,
      "posted": "2024-05-11T08:30:26",
      "content": "New public entry 2",
      "moderated": false,
      "visibility": "public",
      "topics": ["Стресс"]
    },
    {
      "id": 3,
      "iduser": 1,
      "posted": "2024-05-11T08:30:26",
      "content": "New public entry 2",
      "moderated": false,
      "visibility": "public",
      "topics": ["Стресс", "Одиночество"]
    },
  ];

  const [entriesList, setEntriesList] = useState(allEntries);

  const renderItem = ({ item }) => (
    <View style={styles.feed}>
      <Entry entry={item} fun={onOpenModal} />
    </View>
  );

  const topicInteract = (t) => ( 
    topics.includes(t) ? setTopics(topics.filter(it => it !== t))
    : setTopics([...topics, t])
  );

  const filterEntries = () => {
    if (topics.length === 0)
      setEntriesList(allEntries);
    else
      setEntriesList(allEntries.filter(it => 
        topics.some(topic => it.topics.includes(topic))));
  };

  return (
    <SafeAreaView style={[commonStyles.container, { paddingBottom: tabBarHeight + 3}]}>
        <View style={[commonStyles.row, { paddingRight: "5%"}]}>
          <Text style={[commonStyles.titleText]}> Записи </Text>
          <IconButton
            icon="filter-plus"
            iconColor={colors.primary}
            size={35}
            onPress={ filterEntries }
            style={{ borderColor: "transparent", margin: 0 }}
          />
        </View>
        <Divider horizontalInset="5%" bold="true" />

        <View style={{ paddingHorizontal: "5%" }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={TopicsStuff.allTopics}
            keyExtractor={(item) => item.key.toString()}
            renderItem={({ item }) => (
              <Topic
                key={item.key}
                item={item}
                fun={(topic) => topicInteract(topic)}
              />
            )}
            contentContainerStyle={{ paddingVertical: "2%" }}
          />
        </View>

        <FlatList
          data={entriesList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  feed: {
    paddingTop: "2%",
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingBottom: "4%",
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
});


export default Feed;