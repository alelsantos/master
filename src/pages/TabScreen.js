import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";

import Welcome from "./Welcome";
import SignIn from "./SignIn";
import InsureDate from "./InsureDate";
import FAQ from "./FAQ";
import Solicitation from "./Solicitation";
import Home from '../pages/Home';
import PropertyData from "./PropertyData";


const Tab = createBottomTabNavigator();

export default function TabScreen() {
    return (
        <Tab.Navigator style={{backgroundColor: '#BFDCFF'}}>

            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />

            <Tab.Screen name="Solicitation" component={Solicitation} />

            <Tab.Screen name="FAQ" component={FAQ} />

            <Tab.Screen name="PropertyData" component={PropertyData} />

        </Tab.Navigator>

    );
}