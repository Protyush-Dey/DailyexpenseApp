import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
const AuthPageRoute = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
             <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Signup"
          component={SignupPage}
        />

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthPageRoute