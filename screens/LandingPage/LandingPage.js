import React from 'react'
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'

function LandingPage({navigation}) {
    return (
        <View style={styles.Container}>
        <StatusBar translucent backgroundColor={"transparent"}/>
        <View style={styles.MiniContainer}>
        <Image style={styles.Image}/>
        <Text style={styles.Text}>Live a Healthy Life.Learn From Experts.</Text>
        <Image style={{height:250,width:250}} source={require('../../assets/images/online-learning.png')}/>
        <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("NavigationPage")}>
        <Text style={styles.ButtonText}>Start Learning</Text>
        <Image />
        </TouchableOpacity>
        </View>
        </View>
    )
}

export default LandingPage
