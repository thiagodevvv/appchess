import 'react-native-gesture-handler';
import React from 'react'
import Home from './Home'



import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
          title: "Ranking",
          headerTintColor: "orange",
          headerStyle: {
            backgroundColor: "black"
          }

        }}/>
      </Stack.Navigator>
    </NavigationContainer>
   
  )
}

