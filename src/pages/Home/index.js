import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, TextInput } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CurrentRenderContext, NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

    const [input, setInput] = useState('');
    const [hidePass, setHidePass] = useState(true);
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View style={{ backgroundColor: '#ffffff', top: 1 }}>
                <Text style={styles.buttontitle} >Welcome, Mr. Miller!</Text>
                <TouchableOpacity>
                    <Image style={styles.buttonIcon} source={require('../../assets/iconNotification.png')} />
                </TouchableOpacity>
                <Text style={{ opacity: 0.15, bottom: -5 }}>___________________________________________________________</Text>
            </View>



            <View>

                <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
                    <Text style={styles.buttonEdit}>Edit</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
                    <View  style={styles.buttontExit}> 
                    <Image source={require('../../assets/iconExit.png')} style={{ marginLeft: 16 }} />
                    </View>
                </TouchableOpacity>
                <Text style={styles.buttontitlename} >John Miller</Text>
                <Text style={styles.buttontitleEmail} >Email: johnmiller@gmail.com</Text>
                <Text style={styles.buttontitlephone} >Phone: +1 (000) 000 0000</Text>
                <Image style={styles.buttonIconPhoto} source={require('../../assets/iconPhoto.png')} />
                <Text style={{ opacity: 0.15, top: -28 }}>_____________________________________________________________</Text>
            </View>

            <View>
                <Text style={styles.Policies}>Policies</Text>

            </View>


            <View id="default" style={styles.inputArea}>
                <Image source={require('../../assets/iconList.png')} style={{ marginLeft: 16 }} />
                <Text style={styles.TextPolicy}>Policy CHO 0058659496</Text>
                <Text style={styles.TextProperty}>Property: House Miami</Text>

            </View>

            <View>
                <TouchableOpacity onPress={() => navigation.navigate('PropertyData')} >

                    <Image style={styles.buttonEdit2} source={require('../../assets/iconEdit.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('FAQ')} >
                    <Image source={require('../../assets/icondump.png')}
                        style={styles.buttonIconDump}

                        />
                </TouchableOpacity>

            </View>

            <View>
                <TouchableOpacity
                    style={styles.buttonAddPolicy}
                    onPress={() => navigation.navigate('PropertyData')}>

                    <Text style={styles.AddPolicy}>Add policy</Text>
                </TouchableOpacity>
            </View>

            
        </View>





    );
}

const styles = StyleSheet.create({


    container: {
        top: 12,
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
        width: 320,
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        marginBottom: 10,
        height: 70,
        alignItems: 'center',
        left: 35

    },

    Defaultbutton: {

        width: '85%',
        marginLeft: 85,
        marginTop: -500,
        height: 50,

        fontSize: 20,
        borderColor: '#EEEEEE'
    },


    buttonIcon: {

        marginTop: -10,
        marginLeft: 345,
        color: '#000000'

    },


    buttonIcon1: {

        marginTop: -1,
        marginLeft: 40,
        color: '#000000'

    },

    buttonIconeye: {

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
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF0000',
        top: 50

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

    buttonEdit: {

        fontSize: 18,
        justifyContent: 'center',
        color: '#0074FC',
        marginTop: 19,
        marginLeft: 25
    },


    buttonbar: {

        opacity: 0.15,
        color: ' #D9D9D9 ',
        height: 550,
        width: 390,
        left: 0,
        top: 0

    },



    buttonbar2: {

        opacity: 0.15,
        color: ' #D9D9D9 ',
        height: 0,
        width: 390,
        left: 38,
        top: 437,
        right: 30,

    },

    titlebutton1: {

        bottom: -15,
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 85

    },

    buttontitle: {
        width: '85%',
        flexDirection: 'row',
        bottom: -21,
        fontSize: 24,
        alignItems: 'center',
        left: 30,
        fontWeight: 'bold'



    },

    titlebutton: {

        bottom: -15,
        fontSize: 24,
        marginLeft: 85


    },

    buttontitlename: {
        fontWeight: 'bold',
        fontSize: 16,
        left: 143,
        top: 10
    },

    buttontitleEmail: {

        fontSize: 16,
        left: 143,
        top: 10
    },


    buttontitlephone: {
        left: 143,
        top: 10

    },


    buttonIconPhoto: {

        left: 22,
        top: -50
    },

    Policies: {

        fontWeight: 'bold',
        fontSize: 23,
        left: 143,
        top: -31

    },


    buttonIconDump: {

        fontWeight: 'bold',
        top: -50,
        left: 31,
        right: 1,
        marginLeft: 297


    },

    buttonEdit2: {
        fontWeight: 'bold',
        top: -68,
        left: 260,
        marginLeft: 68
    },


    TextPolicy: {

        fontSize: 16,
        left: 16,
        top: -10,
        fontWeight: 'bold',
    },

    TextProperty: {

        fontSize: 16,
        top: 15,
        left: -160


    },


    AddPolicybutton: {

        color: 'black',
        borderColor: '#BFDCFF',
        backgroundColor: '#BFDCFF',
        fontWeight: "bold",



    },

    AddPolicy: {


        fontWeight: "bold",
        backgroundColor: '#BFDCFF',
        borderColor: '#BFDCFF',
        borderRadius: 18,
        color: '#20232a',
        textAlign: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 16,
        left: 132,
        button: 100,
        marginRight: 250,
        marginBottom: 4,
        alignItems: 'center',
        justifyContent: 'center',
        top: 215

    },

    buttontExit:{


        left:335,
        margiRight:33,margiRight:33,
        top:-19
    }


})
