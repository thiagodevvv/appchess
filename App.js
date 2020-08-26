import 'react-native-gesture-handler';
import React from 'react'
import {StateProvider} from './src/Context/StateContext'

import Home from './Home'
import Timer from './src/components/Timer'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function App() {

  return (
    <StateProvider>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
          title: "Chess Friends",
          headerTintColor: "orange",
          headerStyle: {
            backgroundColor: "black"
          }

        }}/>
        <Stack.Screen name="Timer" component={Timer} />
      </Stack.Navigator>
    </NavigationContainer>
    </StateProvider>
   
  )
}

