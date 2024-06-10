import { NavigationContainer } from '@react-navigation/native';
import { View } from "react-native";
import { StatusBar } from 'expo-status-bar';

import Auth from './navigate'
import BottomNavigation from './components/bottomNavigation';
import { useState } from 'react';

export default function App() {
  const [auth, setAuth] = useState(false);

    return (
      auth? <Auth /> :
        <View style={{ flex: 1 }}>
          <StatusBar style="auto" />
          <BottomNavigation />
        </View>
  );
}

