import React, { useState } from 'react'
import { FlatList, Image, ImageBackground, Pressable, ScrollView, StatusBar, Text, View } from 'react-native'
import Drawer from '../../components/Drawer/Drawer'
import CustomHeader from '../../components/Header/Header'
import Sessions from '../../components/Sessions/Sessions'
import styles from './styles'

function HomePage() {
    const data = [1, 2, 3, 4, 5,];

    const [drawerVisibile, setDrawerVisibile] = useState(false)

    return (
        <View 
        onTouchStart={(e) =>{
            console.log(e.nativeEvent.locationX);
            if(e.nativeEvent.locationX > 300){
                setDrawerVisibile(false)
            }
        }} 
        style={styles.Container}>
            {drawerVisibile && (<Drawer />)}
            <View style={styles.Content}>
            <ScrollView 
            contentInsetAdjustmentBehavior='always'
            contentInset={{bottom:50}}
            showsVerticalScrollIndicator={false}
            >
                <ImageBackground imageStyle={{ borderRadius: 10 }} source={require('../../assets/images/online-class.jpg')} style={styles.banner} >
                    <Text style={styles.bannerText}>Start Your Journey of</Text>
                    <Text style={styles.bannerText}>Happiness and Health Today!</Text>
                </ImageBackground>
                <View style={styles.heading}>
                    <Text style={styles.headingText}> Recorded Sessions</Text>
                </View>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    renderItem={() => (
                        <Sessions onPress={() => setDrawerVisibile(false)}/>
                    )}
                />
                <View style={[styles.heading, { width: 130 }]}>
                    <Text style={styles.headingText}> Live Sessions</Text>
                </View>
                <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    renderItem={() => (
                        <Sessions onPress={() => setDrawerVisibile(false)}/>
                    )}
                />
                <View style={[styles.heading, { width: 130 }]}>
                    <Text style={styles.headingText}> Live Sessions</Text>
                </View>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    renderItem={() => (
                        <Sessions onPress={() => setDrawerVisibile(false)}/>
                    )}
                />
            </ScrollView>
            </View>
        </View>
    )
}

export default HomePage
