import React from 'react'
import { View,Image, Pressable } from 'react-native'
import styles from './styles'

function CustomHeader({ OnMenuButtonPress}) {
    return (
        <View style={styles.Header}>
            <Pressable onPress={() => OnMenuButtonPress()}>
            <Image source={require("../../assets/images/menu.png")} style={styles.menu} />
            </Pressable>
            <Image source={require("../../assets/images/notification.png")} style={styles.notification} />
        </View>
    )
}

export default CustomHeader
