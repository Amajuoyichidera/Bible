import { View, Text, FlatList, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectBible } from '../bibleSlice';
import FontAwesome from '@expo/vector-icons/FontAwesome'; 
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Home = ({ navigation }) => {
    const bible = useSelector(state => state.bible.myBible);
    const dispatch = useDispatch();
    const [sideBarVisible, setSideBarVisible] = useState(false);
    const sidebarAnimation = useRef(new Animated.Value(0)).current;  // Initial value for opacity

    const handleChapter = (item) => {
        dispatch(selectBible(item));
        navigation.navigate('Chapter');
    }

    const toggleSideBar = () => {
        if (sideBarVisible) {
            Animated.timing(sidebarAnimation, {
                toValue: 0, // Fade out and slide left
                duration: 300,
                useNativeDriver: true,
            }).start(() => setSideBarVisible(false));
        } else {
            setSideBarVisible(true);
            Animated.timing(sidebarAnimation, {
                toValue: 1, // Fade in and slide right
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleChapter(item)} style={styles.itemCon}>
            <View style={styles.item}>
                <FontAwesome6 name="cross" size={40} color="#163764" />
                <Text style={styles.text}>{item.name}</Text>
            </View>
            <FontAwesome name="angle-right" size={30} color="white" />
        </TouchableOpacity>
    );

    const favorite = () => {
       navigation.navigate('Bookmark');
       setSideBarVisible(false);
    }

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <TouchableOpacity onPress={toggleSideBar}>
                    <Feather name="menu" size={30} color="#FBFBFF" />
                </TouchableOpacity>
                <Text style={styles.headText}>Bible KJV</Text>
            </View>
            <FlatList
                data={bible}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem} 
            />

            {sideBarVisible && (
                <Animated.View style={[
                    styles.sideBar, 
                    { 
                        opacity: sidebarAnimation,
                        transform: [{
                            translateX: sidebarAnimation.interpolate({
                                inputRange: [0, 1],
                                outputRange: [-300, 0]  // Adjust -300 to match the sidebar width
                            })
                        }]
                    }
                ]}>
                    <View style={styles.bar1}>
                        <FontAwesome6 name="cross" size={80} color="white" />
                        <Text style={styles.bar1Text}>We Love because {'\n'} God first loved us.</Text>
                    </View>

                    <View style={styles.bar2}>
                        <TouchableOpacity style={styles.dir} onPress={toggleSideBar}>
                            <FontAwesome5 name="bible" size={30} color="white" />
                            <Text style={styles.dirText}>Home</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={favorite} style={styles.dir}>
                            <FontAwesome name="bookmark" size={30} color="white" />
                            <Text style={styles.dirText}>Favorites</Text>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: '100%',
    },
    text: {
        color: '#FBFBFF',
        fontSize: 25,
    },
    head: {
        backgroundColor: '#163764',
        height: '12%',
        paddingTop: 60,
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
        paddingLeft: 20,
    },
    headText: {
        color: '#FBFBFF',
        fontSize: 30,
        fontWeight: 'bold',
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    itemCon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1C1C1E',
        height: 90,
        margin: 5,
        padding: 20,
        borderRadius: 10,
    },
    sideBar: {
        position: 'absolute',
        height: '100%',
        backgroundColor: 'black',
        width: '80%',
        left: 0,
    },
    bar1: {
        backgroundColor: '#163764',
        height: '30%',
        paddingTop: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        justifyContent: 'center',
    },
    bar1Text: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '500',
    },
    bar2: {
        padding: 30,
    },
    dir: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        paddingBottom: 50,
    },
    dirText: {
        color: 'white',
        fontSize: 25,
    },
});

export default Home;
