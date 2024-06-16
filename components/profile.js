import Heading from "./heading"
import colors from "../assets/colors"
import commonStyles from "./styles";

import React, { useState } from "react";
import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useBottomTabBarHeight  } from '@react-navigation/bottom-tabs';
import { 
    Divider,
    Caption,
    Avatar,
  } from "react-native-paper";
import { Ionicons } from '@expo/vector-icons';


const Profile = ({ navigation }) => {

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

  const infoList = [
    {
      key: "Почта",
      icon: "mail",
      value: user.email,
    },
    {
      key: "Телефон",
      icon: "call",
      value: user.phone,
    },
    {
      key: "День рождения",
      icon: "gift",
      value: user.birthday,
    },
  ];

  const infoItem = ({ item }) => (
    <View style={[commonStyles.row, { paddingHorizontal: "5%", paddingVertical: "2%", }]}>
      <View style={{ flexDirection: 'row', }}>
        <Ionicons name={item.icon} size={25} color={colors.primary} />
        <Caption style={commonStyles.simpleText}>{item.key}</Caption>
      </View>
      <Caption style={commonStyles.simpleText}>{item.value}</Caption>
    </View>
  );

  return (
    <SafeAreaView style={[commonStyles.container, { paddingBottom: tabBarHeight - 10}]}>

      <Heading navigation={navigation} content="Ваш профиль" icon="file-edit" goTo="EditProfilePage" />
      
      <View style={styles.container}>
        <Avatar.Image
                size={120}
                style={styles.avatar}
                source={require('./../assets/greeting.png')}
            />
        <Text style={commonStyles.boldText}>{user.username}</Text>
      </View>

      <View>
        <FlatList
          data={infoList}
          renderItem={infoItem}
          ItemSeparatorComponent={ () =>
            <Divider horizontalInset="5%" 
              bold="true" 
              style={ {marginBottom: "2%"} } /> }  
        />
      </View>
        
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3/5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
      margin: 8,
  },
});

export default Profile;