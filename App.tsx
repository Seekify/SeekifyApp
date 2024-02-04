import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { Amplify } from 'aws-amplify';
import amplifyconfig from './src/amplifyconfiguration.json';
import { UserContextProvider } from './src/Context/UserContext';
import BottomTabNavigation from './src/Navigation/BottomTabNavigation';

Amplify.configure(amplifyconfig);

export default function App() {
  return (
    <UserContextProvider>
      <SafeAreaView style={styles.container}>
        <BottomTabNavigation />
      </SafeAreaView>
    </UserContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
