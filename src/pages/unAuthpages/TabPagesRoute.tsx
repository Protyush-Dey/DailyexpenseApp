import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Ionicons from "@react-native-vector-icons/ionicons";
import HomePage from './HomePage';

const Tab = createBottomTabNavigator();
const TabPagesRoute = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: any;

                    if (route.name === "Home") {
                        iconName = focused ? "home" : "home-outline";
                    } else if (route.name === "Expenses") {
                        iconName = focused ? "wallet" : "wallet-outline";
                    } else if (route.name === "Profile") {
                        iconName = focused ? "person" : "person-outline";
                    }

                    return (
                        <Ionicons
                            name={iconName}
                            size={size}
                            color={color}
                        />
                    );
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomePage}
                options={{ headerShown: false }}
            />

            <Tab.Screen
                name="Signup"
                component={HomePage}
            />

        </Tab.Navigator>
    )
}

export default TabPagesRoute