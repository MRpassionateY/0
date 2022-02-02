import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Homescreen from "../screens/Homescreen";
import DiscussionRoom from "../screens/DiscussionRoom";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Homescreen') {
                        iconName = focused
                            ? 'book'
                            : 'book-outline';
                    } else if (route.name === 'DiscussionRoom') {
                        iconName = 'chatbubbles';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Homescreen" component={Homescreen} />
            <Tab.Screen name="DiscussionRoom" component={DiscussionRoom} />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator