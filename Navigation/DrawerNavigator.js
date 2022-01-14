import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from '../screens/HomePage/HomePage';
import Icons from 'react-native-vector-icons/MaterialIcons'
import { Pressable, Text, View } from 'react-native';
import MyCourses from '../screens/MyCourses/MyCourses';
import About from '../screens/About/About';
import Support from '../screens/SupportPage/Support';
import CustomDrawerContent from '../components/CustomDrawer/CustomDrawerContent';


const Drawer = createDrawerNavigator();


function DrawerNavigator({navigation}) {

    const screenOptions = {
        headerTitle: "",
        headerRight: () => (
            <Icons name='notifications' color={"black"} size={28} />
        ),
        headerLeftContainerStyle:{paddingLeft:5},
        headerRightContainerStyle:{paddingRight:15},
        headerStatusBarHeight:30,
        drawerItemStyle:{
            borderRightColor:"#188e5e",
            borderRightWidth:5,
            elevation:2,
            marginVertical:10,
            width:"95%"
        },
        drawerActiveTintColor:"#188e5e",
        drawerInactiveTintColor:"rgba(0,0,0,0.8)",
        drawerLabelStyle:{
        fontWeight:"bold",
        fontSize:21,
        },
        drawerActiveBackgroundColor:"white",
        drawerInactiveBackgroundColor:"white",
        drawerStyle:{
            backgroundColor: '#EFEFEF',
        },
        drawerStatusBarAnimation:"slide",
        headerStyle:{
            elevation:15,
            backgroundColor:"white",
            shadowColor:"grey",
            shadowOffset:{
                width:5,
                height:5
            }
        }
    }

    return (
        <Drawer.Navigator
            screenOptions={screenOptions}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            >
            <Drawer.Screen name="Home" component={HomePage} />
            <Drawer.Screen name="My Courses" component={MyCourses} />
            <Drawer.Screen name="About" component={About} />
            <Drawer.Screen name="Support" component={Support} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator
