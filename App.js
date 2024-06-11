import Auth from './navigate'
import BottomNavigation from './components/bottomNavigation';

import { View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useState } from 'react';

export default function App() {
  const [auth, setAuth] = useState(false);

    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        {auth? 
          <Auth /> :
          <View style={{ flex: 1 }}>
            <StatusBar style="auto" />
            <BottomNavigation />
          </View>}
      </GestureHandlerRootView>
  );
}

