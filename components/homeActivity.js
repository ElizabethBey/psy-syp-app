import React from "react";
import MyEntries from "./myEntries";
import CreatePage from "./createPage";

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function HomeActivity({ onOpenModal }) {
    return(
        <Stack.Navigator initialRouteName="myEntries">
            <Stack.Screen name="myEntries"
                options={{ headerShown: false }}
            >
                {props => <MyEntries {...props} onOpenModal={onOpenModal}/>}
            </Stack.Screen>
            <Stack.Screen name="New"
                component={CreatePage}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};
