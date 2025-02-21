import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigation from './App/Navigation/TabNavigation';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location'; 
import { UserLocationContext } from './App/Context/UserLocationContext';
import { useFonts } from 'expo-font';

export default function App() {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [fontsLoaded] = useFonts({
    'raleway': require('./assets/Fonts/Raleway-Regular.ttf'),
    'raleway-bold': require('./assets/Fonts/Raleway-SemiBold.ttf'),

  });
   


  useEffect (() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      // console.log(location)
     
    })();

    
  }, []);
  return (
    <View style={styles.container}>
      {/* <Text>Welcome to MBet-Adera-Places-1x App!</Text> */}
      
      <UserLocationContext.Provider value={{location, setLocation}}>

        <NavigationContainer>
          <TabNavigation/>
        </NavigationContainer>

      </UserLocationContext.Provider>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
