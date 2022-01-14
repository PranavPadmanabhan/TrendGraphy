import React from 'react'
import { Pressable, Text, View } from 'react-native'
import styles from './styles'

function Drawer() {
    return (
        <View style={styles.Drawer}>
        <View style={styles.profile}>
        <View style={styles.profileImage}></View>
        <View style={styles.profileDetails}>
        <Text style={styles.Name}>UserXX22</Text>
        <Text style={styles.details}>UserXX22</Text>
        </View>
        </View>
        <View style={styles.Option}>
        <Text style={styles.optionText}>Home</Text>
        </View>
        <View style={styles.Option}>
        <Text style={styles.optionText}>My Courses</Text>
        </View>
        <View style={styles.Option}>
        <Text style={styles.optionText}>About</Text>
        </View>
        <View style={styles.Option}>
        <Text style={styles.optionText}>Support</Text>
        </View>
        <View style={[styles.Option,{position:"absolute",bottom:40}]}>
        <Text style={styles.optionText}>LogOut</Text>
        </View>
        </View>
    )
}

export default Drawer
