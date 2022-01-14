import React from 'react'
import { Image, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles'

function LoginPage({navigation}) {
    return (
        <View style={styles.Container}>
        <StatusBar translucent backgroundColor={"transparent"}/>
        <View style={styles.MiniContainer}>
        <Image style={styles.Image}/>
        <View style={styles.firstInput}>
        <Text style={styles.Label}>Username</Text>
        <TextInput style={styles.Input}/>
        </View>
        <View style={styles.secondInput}>
        <Text style={styles.Label}>Password</Text>
        <TextInput  style={styles.Input}/>
        </View>
        <Text style={styles.forgotBtn}>Forgot Password?</Text>
        <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('HomePage')}>
            <Text style={styles.ButtonText}>Login</Text>
        </TouchableOpacity>
        </View>
        </View>
    )
}

export default LoginPage
