import Heading from "./heading"
import Entry from "./entry";
import commonStyles from "./styles";
import Topic from "./topic";

import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import { useBottomTabBarHeight  } from '@react-navigation/bottom-tabs';


const MyEntries = ({ navigation, onOpenModal }) => {

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
      "visibility": "private",
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
      <Entry entry={item} fun={onOpenModal}/>
    </View>
  );

  const filterEntries = (val) => {
    if (entriesList.length === 0)
      setEntriesList(allEntries);
    else
      setEntriesList(allEntries.filter(it => it.visibility === val));
  };

  return (
    <SafeAreaView style={[commonStyles.container, { paddingBottom: tabBarHeight + 3}]}>

          <Heading navigation={navigation} content="Мои записи" icon="plus-box" goTo="New" />
          
          <View style={{ paddingHorizontal: "5%" }}>
            <View style={{ flexDirection: 'row', paddingVertical: "2%", }}>
                <Topic item={{name: "Приватные", icon: "lock-outline"}} fun={ (topic) => filterEntries("private") } />
                <Topic item={{name: "Публичные", icon: "earth"}} fun={ (topic) => filterEntries("public") } />
            </View>
          </View>
          
        
        <FlatList
            data={entriesList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
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


export default MyEntries;