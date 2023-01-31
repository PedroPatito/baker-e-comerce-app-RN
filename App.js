import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ShopNavigator from './src/navigation/ShopNavigator';

export default function App() {
  const [fontsLoaded] = useFonts({
    RubikRegular: require("./src/assets/fonts/Rubik-Regular.ttf")
  })
  if(!fontsLoaded){
    return null
  }

  return (
   <ShopNavigator/>
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
