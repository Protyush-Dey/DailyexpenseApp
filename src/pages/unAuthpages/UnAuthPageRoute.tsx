import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import TabPagesRoute from './TabPagesRoute';

const Stack = createNativeStackNavigator();

const UnAuthPageRoute = () => {
  return (
    <NavigationContainer>
            <Stack.Navigator>
                 <Stack.Screen
              name="Pages"
              component={TabPagesRoute}
              options={{ headerShown: false }}
            />
    
            {/* <Stack.Screen
              name="Signup"
              component={RagisterPage}
            /> */}
    
            </Stack.Navigator>
        </NavigationContainer>
  )
}

export default UnAuthPageRoute