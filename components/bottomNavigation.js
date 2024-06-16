import colors from '../assets/colors';
import Feed from './feed';
import HomeActivity from './homeActivity';
import ProfileActivity from './profileActivity';

import React, { useState, useRef } from "react";
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default BottomNavigation = ({ onOpenModal }) => {
  const HomeAct = () => (<HomeActivity onOpenModal={onOpenModal} />);
  const FeedAct = () => (<Feed onOpenModal={onOpenModal} />);
  
  return (
      <NavigationContainer style={{ backgroundColor: "transparent" }}>
        <Tab.Navigator initialRouteName="Мои записи"
            screenOptions={{
              tabBarActiveTintColor: colors.textWhite,
              tabBarInactiveTintColor: colors.ligthPrimary,
              headerShown: false,
              tabBarStyle: styles.bottomTabBar,
            }}
        >
          <Tab.Screen name="Лента" component={FeedAct} 
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="newspaper" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen name="Мои записи" component={HomeAct}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} />
              ),
            }} />
          <Tab.Screen name="Профиль" component={ProfileActivity} 
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" size={size} color={color} />
              ),
            }}/>
        </Tab.Navigator>
        </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  bottomTabBar: {
    display: "flex",
    flex: 1,
    alignContent: "center",
    position: "absolute",
    elevation: 15,
    backgroundColor: colors.primary,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    height: "8%",
  },
});
