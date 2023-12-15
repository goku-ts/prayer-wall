import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import {useFonts} from "expo-font"
import RootNavigation from './src/navigation/rootNavigation';




export default function App() {

  const [fontsLoaded] = useFonts({
    'Poppins-Black': require('./src/assets/fonts/Poppins-Black.ttf'),
    'Poppins-Bold-Italics': require('./src/assets/fonts/Poppins-BoldItalic.ttf'),
    'Poppins-Medium': require('./src/assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('./src/assets/fonts/Poppins-Regular.ttf')
  });
  return (

    <>
      <StatusBar style="auto" />
      {fontsLoaded && 
        <RootNavigation />}
    </>

  );
}
