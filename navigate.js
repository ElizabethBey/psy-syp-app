import React from "react";
import Greeting from "./components/greeting";
import Login from "./components/login";
import Registration from "./components/registration";

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Auth({ onLogin }){
  const LoginAct = () => (<Login onLogin={onLogin}/>);

    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Greeting"
                component={Greeting}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Registration"
                component={Registration}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Login"
                component={LoginAct}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    </NavigationContainer>
}
