import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { Loginpage } from './Loginpage';
import { RagisterPage } from './RagisterPage';
const Stack = createNativeStackNavigator();
const AuthPageRoute = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
             <Stack.Screen
          name="Login"
          component={Loginpage}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Signup"
          component={RagisterPage}
        />

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthPageRoute