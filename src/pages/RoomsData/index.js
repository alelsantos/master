import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';


export default function RoomsData() {

    const navigation = useNavigation();
    const [genero, setGenero] = useState("");
    const [selected, setSelected] = React.useState("");
    return (



        <View style={styles.container}>


            <Image style={{ marginLeft: 52, marginRight: 54, flex: -3, Witdh: 30 }}
                source={require('../../assets/menuNumber2.png')} />

            <View id="default">
                <Text sytle={styles.titleMenu}>
                    Rooms registration
                    </Text>



            <TouchableOpacity
                style={styles.Nextbutton}
                onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonNext}>NEXT</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.Backbutton}
                onPress={() => navigation.navigate('PropertyData')}>
                <Text style={styles.buttonBack}>Back</Text>
            </TouchableOpacity>


            </View>
        </View>
    );
}


const styles = StyleSheet.create({


    container: {

        maxheight: 50,
        marginTop: 1.5,
        borderColor: '  #D9D9D9',
        backgroundColor: '#EEEEEE'


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
        height: 760,
        backgroundColor: '#EEEEEE',
        borderColor: '#EEEEEE',
        borderRadius: 18,
        marginBottom: 10,
        height: 50,
        alignItems: 'center'


    },


    buttonDefault: {
        borderWidth: 1,
        width: '85%',
        marginLeft: 5,
        height: 50,
        backgroundColor: '#FFFFFF',
        padding: 7,
        fontSize: 18,
        borderColor: 'rgba(0, 0, 0, 1)',
        borderRadius: 70,


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
        paddingBottom: 14,
        marginLeft: 20



    },


    buttonNext: {

        backgroundColor: '#0074FC',
        borderColor: 'rgba(0, 0, 0, 1)',
        borderRadius: 20,
        color: '#20232a',
        textAlign: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 15,
        marginTop: 15,
        marginLeft: 250,
        marginBottom: 60,
        alignItems: 'center',
        bottom: -50
    },


    Backbutton: {

        backgroundColor: '#ffffff',
        borderColor: '#ffffff',
        borderRadius: 18,
        color: '#20232a',
        textAlign: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 20,
        top: 120,
        marginRight: 250,
        marginRight: 250,
        marginBottom: 4,
        alignItems: 'center',
        left: 50,
       
    


    },


    buttonBack: {

        color: 'black',
        borderColor: '#BFDCFF',
        borderRadius: 20,


    },



    containerForm: {
        color: '#000000'
    },

    buttonOr: {

        textAlign: 'center',
        lineHeight: 40,
        lineSize: 23,
        color: '#000000'
    },
    buttonAccount: {
        textAlign: 'center',
        color: '#0074FC',
        marginTop: 10,


    },
    sex: {

        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        top: -1

    },

    inner: {

        width: 15,
        height: 15,
        backgroundColor: 'black',
        borderRadius: 10,


    },
    wrapper: {
        flexDirection: 'column',
        marginTop: 10,




    },


    buttonAddProfile: {

        borderWidth: 1,
        width: 213,
        height: 130,
        Top: 70,
        left: 130,
        backgroundColor: 'white',
        borderColor: 'black',
        borderRadius: 18,
        marginBottom: -45,
        alignItems: 'center'




    },

    AddProfilebutton: {

        marginLeft: 5,
        height: 50,
        backgroundColor: '#FFFFFF',
        padding: 2,
        fontSize: 18,
        borderColor: 'rgba(0, 0, 0, 1)',
        borderRadius: 70,
        top: 50


    },


    IconMenu: {

        marginLeft: 30
    },

    titleMenu:{

fontWeight:'bold',



    },

})
