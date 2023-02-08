import { useFonts } from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import ShopNavigator from './src/navigation/ShopNavigator';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [fontsLoaded] = useFonts({
    RubikRegular: require("./src/assets/fonts/Rubik-Regular.ttf")
  })
  if(!fontsLoaded){
    return null
  }

  return (
    <NavigationContainer>
      <BottomTabNavigator/>
    </NavigationContainer>
   
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
