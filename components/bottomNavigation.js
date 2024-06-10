import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import colors from '../assets/colors';
import Feed from './feed';
import CreatePage from "./createPage";
import Profile from './profile'

const Tab = createBottomTabNavigator();

export default BottomNavigation = () => {
  return (
    <NavigationContainer>
          <Tab.Navigator initialRouteName="home" 
              screenOptions={{
                tabBarActiveTintColor: colors.textWhite,
                tabBarInactiveTintColor: colors.ligthPrimary,
                headerShown: false,
                tabBarStyle: styles.bottomTabBar,
              }}
        >
            <Tab.Screen name="Лента" component={Feed} 
              options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen name="Добавить" component={CreatePage}
              options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="add" size={size} color={color} />
                ),
              }} />
            <Tab.Screen name="Профиль" component={Profile} 
              options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="person-outline" size={size} color={color} />
                ),
              }}/>
          </Tab.Navigator>
        </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  bottomTabBar: {
    display: "flex",
    position: 'absolute',
    bottom: 5,
    left: 10,
    right: 10,
    elevation: 5,
    backgroundColor: colors.primary,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    height: 60,
    margin: 5,
    paddingTop: 5,
    paddingBottom: 5,
  },
});
