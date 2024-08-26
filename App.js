import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Initial from './screens/Initial';
import store from './store';
import { Provider } from 'react-redux';
import BibleChapter from './screens/BibleChapter';
import Verses from './screens/Verses';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="initial">
        <Stack.Screen name="initial" component={Initial} options={{headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{headerShown: false }} />
        <Stack.Screen name="Chapter" component={BibleChapter} options={{headerShown: false }} />
        <Stack.Screen name="Verses" component={Verses} options={{headerShown: false }} />
      </Stack.Navigator>
      <StatusBar hidden={true} />
     </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
