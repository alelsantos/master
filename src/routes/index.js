import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Welcome from "../pages/Welcome";
import SignIn from "../pages/SignIn";
import InsureDate from '../pages/InsureDate';
import RedefinePassword from '../pages/RedefinePassword';
import CreateAccount from '../pages/CreateAccount';
import Home from '../pages/Home';
import FAQ from '../pages/FAQ'
import Solicitation from '../pages/Solicitation'
import PropertyData from '../pages/PropertyData';
import TabScreen from '../pages/TabScreen';
import RoomsData from '../pages/RoomsData';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Routes() {
    return (




        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}



            />
            <Stack.Screen style={styles.menu}
                name="SignIn"
                component={SignIn}

            />

            <Stack.Screen style={styles.menu}
                name="RedefinePassword"
                component={RedefinePassword}

            />


            <Stack.Screen style={styles.menu}
                name="FAQ"
                component={FAQ}
            />

            <Stack.Screen style={styles.menu}
                name="CreateAccount"
                component={CreateAccount}



            />


            <Stack.Screen style={styles.menu}
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />



            <Stack.Screen style={styles.menu}
                name="InsureDate"
                component={InsureDate}

            />


            <Stack.Screen style={styles.menu}
                name="RoomsData"
                component={RoomsData}

            />

            <Stack.Screen style={styles.menu}
                name="PropertyData"
                component={PropertyData}

            />


            {/*  <Stack.Screen style={styles.menu}
                name="Solicitation"
                component={Solicitation}
            />  */}


            <Tab.Screen style={styles.menu}
                name="PropeTabScreenrtyData"
                component={TabScreen}

            />




        </Stack.Navigator>



    )

};


const styles = StyleSheet.create({

    container: {

        textAlign: 'center'



    },






})