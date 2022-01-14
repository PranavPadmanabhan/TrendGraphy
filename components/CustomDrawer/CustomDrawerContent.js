import React from 'react'
import { DrawerContentScrollView,DrawerItemList,DrawerItem } from '@react-navigation/drawer';
import { Pressable, StatusBar, Text, View } from 'react-native';
import styles from './styles';

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
         <View style={styles.Profile}>
             <View style={styles.ProfilePic}></View>
             <View style={styles.DetailsContainer}>
                 <Text style={styles.Name}>UserXX2</Text>
                 <Text style={styles.Details}>UserXX2</Text>
             </View>
         </View>
        <DrawerItemList {...props}  />
        
        <DrawerItem 
        label={"LogOut"}
        inactiveBackgroundColor='white'
        style={styles.LogoutButton}
        labelStyle={styles.LogoutButtonText}
        />
      </DrawerContentScrollView>
    );
  }

  export default CustomDrawerContent