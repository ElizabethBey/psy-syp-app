import Heading from "./heading"
import colors from "../assets/colors"
import Entry from "./entry";

import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import { useBottomTabBarHeight  } from '@react-navigation/bottom-tabs';


const Feed = ({ navigation }) => {

  const tabBarHeight = useBottomTabBarHeight();

  const entriesList = [
    {
      "id": 1,
      "iduser": 1,
      "posted": "2024-05-11T08:30:26",
      "content": "New public entry",
      "moderated": false,
      "visibility": "public",
      "topics": []
    },
    {
      "id": 2,
      "iduser": 1,
      "posted": "2024-05-11T08:30:26",
      "content": "New public entry 2",
      "moderated": false,
      "visibility": "public",
      "topics": []
    },
    {
      "id": 3,
      "iduser": 1,
      "posted": "2024-05-11T08:30:26",
      "content": "New public entry 2",
      "moderated": false,
      "visibility": "public",
      "topics": []
    },
  ]

  const renderItem = ({ item }) => (
    <View style={styles.feed}>
      <Entry entry={item} />
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, { paddingBottom: tabBarHeight + 20}]}>
        <Heading content="Записи" />
        <FlatList
            data={entriesList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignContent: "center",
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: colors.bgGray,
    paddingTop: 30,
  },
  feed: {
    paddingTop: "3%",
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingBottom: "5%",
  },
});


export default Feed;