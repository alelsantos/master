import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, TextInput } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CurrentRenderContext, NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function FAQ() {

    const [input, setInput] = useState('');
    const [hidePass, setHidePass] = useState(true);
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            
            <Text style={styles.buttontitle} >Contact us</Text>
            <Text style={styles.buttonbar}
            >_____________________________________________________</Text>

            <Text style={styles.Defaultbutton}>Talk to an assistant</Text>
            <Text >+1 (000) 000-0000</Text>

            <Text style={{ opacity:0.10}}  >_____________________________________________________</Text>

            <Text>Send message</Text>
            <Text >ian@outlook.com</Text>

 
            <Text style={{ opacity:0.10}} >_____________________________________________________</Text>
        </View >

    );
}

const styles = StyleSheet.create({


    container: {
        flex: 1,
        borderColor: '  #D9D9D9'


    },

    buttonSocial: {
        Margin: 50,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 1)',
        borderRadius: 70,
        color: '#20232a',
        textAlign: 'center',
        flexDirection: 'row',
        paddingBottom: 14

    },

    inputArea: {
        flexDirection: 'row',
        width: '90%',
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        marginBottom: 10,
        height: 50,
        alignItems: 'center'


    },

    Defaultbutton: {

        width: '85%',
        marginLeft:85,
        marginTop:-500,
        height: 50,
        padding: 7,
        fontSize: 20,
        backgroundColor:"#EEEEEE",
        borderColor:'#EEEEEE'
    },


    buttonIcon: {


        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 17

    },

    buttonIconeye: {
        width: '15%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 17,
        marginLeft: -11

    },

    buttonSocial: {

        backgroundColor: '#D9D9D9',
        borderColor: 'rgba(0, 0, 0, 1)',
        borderRadius: 70,
        color: '#Gray85',
        textAlign: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 10,
        flexDirection: 'row',
        marginBottom: 4,
        paddingBottom: 14,
        marginLeft: 20,
        justifyContent: 'center'

    },

    buttonLogin: {


        backgroundColor: '#0074FC',
        borderColor: 'rgba(0, 0, 0, 1)',
        color: '#20232a',
        borderRadius: 70,
        textAlign: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 20,
        marginTop: 10,
        marginLeft: 20,

        fontWeight: "bold"
    },

    Ionicons: {

        width: '15%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF0000'

    },

    Redefinebutton: {
        textAlign: 'center',
        fontWeight: "bold",
        color: '#0074FC'
    },

    containerForm: {
        color: '#000000'
    },




    buttonLoginWith: {
        fontWeight: "bold",
        fontSize: 28,
        flexDirection: 'row',
        marginTop: 10,
        textAlign: 'center',
        lineHeight: 40,
        lineSize: 23,
        color: '#000000'
    },

    buttonAccount: {
        fontWeight: "bold",
        textAlign: 'center',
        justifyContent: 'center',
        color: '#0074FC',
        marginTop: 10,
        marginLeft: 45
    },


    buttonbar:{

        opacity: 0.15,
        color: ' #D9D9D9 ',
        height: 550,
        width: 390,
        left: 0,
        top: 0,
        right:30,

    },


    
    buttonbar2:{

        opacity: 0.15,
        color: ' #D9D9D9 ',
        height: 0,
        width: 390,
        left: 38,
        top: 437,
        right:30,

    },


    buttontitle:{

       bottom: -15,
       fontSize: 24,
       fontWeight:'bold',
       marginLeft: 38

    }
    

})
