import React from 'react'
import { Pressable, View } from 'react-native'
import styles from './styles'

function Sessions({onPress}) {
    return (
        <Pressable onPress={() => onPress()} style={styles.Session}>
        
        </Pressable>
    )
}

export default Sessions
