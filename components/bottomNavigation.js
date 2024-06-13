import colors from '../assets/colors';
import Feed from './feed';
import CreatePage from "./createPage";
import Profile from './profile'

import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default BottomNavigation = () => {

  return (
    <NavigationContainer style={{ backgroundColor: "transparent" }}>
          <Tab.Navigator initialRouteName="add"
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
            <Tab.Screen name="Создать" component={CreatePage}
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
    bottom: "1%",
    left: "5%",
    right: "5%",
    elevation: 5,
    backgroundColor: colors.primary,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    height: "7%",
  },
});
