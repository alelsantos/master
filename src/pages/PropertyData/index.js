import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';


export default function PropertyData() {

    const navigation = useNavigation();
    const [genero, setGenero] = useState("");
    return (



        <View style={styles.container}>

      
                <Image  style={{ marginLeft:52,  marginRight:54, flex:-3, Witdh:30}}
                 source={require('../../assets/menuNumber1.png')} />
        

            {/*-Authentication Default*/}
            <Text sytle={{fontWeight:'blod'}}>  Sinister number *</Text>
            <View id="default" style={styles.inputArea}>

                <TouchableOpacity style={styles.buttonDefault}>
                    <TextInput
                        placeholder="Ex: John Miller" />
                </TouchableOpacity>
            </View>


            <Text sytle={{ marginLeft: 21, FontWight: "bold" }}>  Cause of damage *</Text>
            <View id="default" style={styles.inputArea}>

                <TouchableOpacity style={styles.buttonDefault}>
                    <TextInput 
                        placeholder="Describe what happened" />
                </TouchableOpacity>
            </View>


            <View style={styles.container} id="default" >
                <Text sytle={{ fontWeight: 'bold' }}>     Damage type *</Text>

                <View style={styles.wrapper}>
                    {['Total loss- with access', 'Total loss- no access', 'Partial loss- with partial access', 'Partial loss- with full access'].map(grindr => (
                        <View key={grindr} style={styles.Genero}>
                            <Text style={styles.grindr}>{grindr}</Text>
                            <TouchableOpacity
                                style={styles.sex}
                                onPress={() => setGenero(grindr)}>
                                {genero === grindr && <View style={styles.inner} />}
                            </TouchableOpacity>
                        </View>
                    ))}

                </View>
            </View>


            <View style={styles.container} id="default" >
                <Text sytle={{ fontWeight: 'bold' }}>   Property type *</Text>

                <View style={styles.wrapper}>
                    {['House', 'Apartment', 'Penthouse', 'Farm', 'Industry'].map(grindr => (
                        <View key={grindr} style={styles.Genero}>
                            <Text style={styles.grindr}>{grindr}</Text>
                            <TouchableOpacity
                                style={styles.sex}
                                onPress={() => setGenero(grindr)}>
                                {genero === grindr && <View style={styles.inner} />}
                            </TouchableOpacity>
                        </View>
                    ))}







                </View>
            </View>


            <View style={styles.container} id="default" >
                <Text sytle={{ fontWeight: 'bold' }}>   Lot type * *</Text>

                <View style={styles.wrapper}>
                    {['Independent', 'Condominium'].map(grindr => (
                        <View key={grindr} style={styles.Genero}>
                            <Text style={styles.grindr}>{grindr}</Text>
                            <TouchableOpacity
                                style={styles.sex}
                                onPress={() => setGenero(grindr)}>
                                {genero === grindr && <View style={styles.inner} />}
                            </TouchableOpacity>
                        </View>
                    ))}







                </View>
            </View>


            <TouchableOpacity
                style={styles.Nextbutton}
                onPress={() => navigation.navigate('RoomsData')}>
                <Text style={styles.buttonNext}>NEXT</Text>
            </TouchableOpacity>


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


    Cancelbutton: {

        backgroundColor: '#ffffff',
        borderColor: '#ffffff',
        borderRadius: 18,
        color: '#20232a',
        textAlign: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 20,
        marginTop: -50,
        marginRight: 250,
        marginBottom: 4,
        alignItems: 'center',



    },


    buttonCancel: {

        color: 'black',
        borderColor: '#BFDCFF'


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

    Genero: {
        marginHorizontal: 15,
        flexDirection: 'row',

    },

    SexGenero: {
        fontSize: 22,
        textTransform: 'capitalize'
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
    }





})
