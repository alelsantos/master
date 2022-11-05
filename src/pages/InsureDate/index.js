import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, LogBox } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';


export default function InsureDate() {

    const navigation = useNavigation();
    const [genero, setGenero] = useState("");
    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={800} style={styles.container.Header}>
                {/*-Authentication Default*/}
                <Text sytle={{ marginLeft: 19 }}>    Full name *</Text>
                <View id="default" style={styles.inputArea}>

                    <TouchableOpacity style={styles.buttonDefault}>
                        <TextInput
                            placeholder="Ex: John Miller" />
                    </TouchableOpacity>
                </View>


                <View style={styles.container} id="default" >
                    <Text>Treatment Pronoun *</Text>

                    <View style={styles.wrapper}>
                        {['Mr.', 'Mrs.', 'Miss.', 'Master', 'Doctor', 'Pho'].map(grindr => (
                            <View key={grindr} style={styles.Genero}>
                                <Text style={styles.grindr}>{grindr}</Text>
                                <TouchableOpacity
                                    style={styles.sex}
                                    onPress={() => setGenero(grindr)}>
                                    {genero === grindr && <View style={styles.inner} />}
                                </TouchableOpacity>
                            </View>
                        ))}

                        <Text sytle={{ marginLeft: 19 }}>    Phone Number *</Text>
                        <View id="default" style={styles.inputArea}>

                            <TouchableOpacity style={styles.buttonDefault}>
                                <TextInput keyboardType = 'numeric'
                                    placeholder="Ex: +1 (000) 000 0000" />
                            </TouchableOpacity>
                        </View>


                        <Text sytle={{ marginLeft: 19 }}>    Profile picture : </Text>
                     
                        
                        <View id="default" style={styles.inputArea}>
                            <TouchableOpacity style={styles.buttonAddProfile}>
   
                                <Text style={styles.AddProfilebutton}> 
                                <Ionicons
                                  style={styles.AddProfilebutton}
                                   name="camera" size={28} color="black"
                                   onPress={() => navigation.navigate('Home')}>
                                    +Add photo
                                    </Ionicons>
                                
                                </Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                </View>

            </Animatable.View>



            <TouchableOpacity
                style={styles.Loginbutton}
                onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonLogin}>SEND</Text>
            </TouchableOpacity>

            
            <TouchableOpacity
                style={styles.Cancelbutton}
                onPress={() => navigation.navigate('FAQ')}>

                <Text style={styles.buttonCancel}>CANCEL</Text>
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
        width:'90%',
        height:760,
        backgroundColor: '#EEEEEE',
        borderColor:'#EEEEEE',
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


    buttonLogin: {

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

    
    Cancelbutton:{ 

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


    buttonCancel:{

        color: 'black',
        borderColor: '#BFDCFF'

    


        
        
    },

    Redefinebutton: {
        textAlign: 'center',
        color: '#0074FC',

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
        marginTop: 10
    },
    sex: {

        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        top:-1,
    },

    inner: {

        width: 15,
        height: 15,
        backgroundColor: 'black',
        borderRadius: 10,

    },
    wrapper: {
        flexDirection: 'column',
        ustifyContent: 'left',
        marginTop: 10,

    },

    Genero: {
        marginHorizontal: 15,
    },

    SexGenero: {
        fontSize: 22,
        textTransform: 'capitalize'
    },

    buttonAddProfile:{

        borderWidth:1,
        width:213,
        height: 130,
        Top:70,
        left:130,
        backgroundColor: 'white',
        borderColor:'black',
        borderRadius: 18,
        marginBottom: -45,
        alignItems: 'center'
        
        


    },

    AddProfilebutton:{

        marginLeft: 5,
        height: 50,
        backgroundColor: '#FFFFFF',
        padding: 2,
        fontSize: 18,
        borderColor: 'rgba(0, 0, 0, 1)',
        borderRadius: 70,
       top:50


    }



    

})
