import React from "react";
import Profile from "./profile";
import EditProfilePage from "./editProfilePage";

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function ProfileActivity(){

    return(
        <Stack.Navigator initialRouteName="Profile">
            <Stack.Screen name="Profile"
                component={Profile}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="EditProfilePage"
                component={EditProfilePage}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};
