import React from 'react'
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'

function NavigationPage({navigation}) {
    return (
        <View style={styles.Container}>
        <StatusBar translucent backgroundColor={"transparent"}/>
        <View style={styles.MiniContainer}>
        <Image style={styles.Image}/>
        <Text style={styles.Text}>Live a Healthy Life.Learn From Experts.</Text>
        <Image style={{height:275,width:275,alignSelf:"center"}} source={require('../../assets/images/online-learning.png')}/>
        <View style={styles.ButtonContainer}>
        <TouchableOpacity style={styles.SignInButton} onPress={() => navigation.navigate("LoginPage")}>
         <Text style={styles.SignInButtonText}>SignIn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.SignUpButton} onPress={() => navigation.navigate("LoginPage")}>
         <Text style={styles.SignUpButtonText}>SignUp</Text>
        </TouchableOpacity>
        </View>
        </View>
        </View>
    )
}

export default NavigationPage
