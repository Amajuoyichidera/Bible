import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState} from 'react';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import { Share } from 'react-native';
import * as Speech from 'expo-speech';
import Foundation from '@expo/vector-icons/Foundation';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const Verses = ({ route, navigation }) => {
    const { chapter } = route.params;
    const verses = chapter ? chapter.verses : [];

    const shareVerse = async () => {
        try {
            const myVerse = verses.map(verse => `${verse.name} - ${verse.text}`).join('\n \n');
            await Share.share({
                message: `check out this bible verses: \n\n${myVerse} `
            });
        } catch (error) {
            console.error('Error sharing verse:', error.message);
        }
    };

    const [isSpeaking, setIsSpeaking] = useState(false);

    const goBack = () => {
        Speech.stop();
        navigation.goBack('Chapter');
    }

    const speak = () => {
        if (isSpeaking) {
            Speech.stop();
            setIsSpeaking(false);
        } else {
            const myVerse = verses.map(verse => `${verse.name} - ${verse.text}`).join('\n\n');
            Speech.speak(myVerse, {
                onDone: () => setIsSpeaking(false),  // Reset state when speech is done
                onStopped: () => setIsSpeaking(false),  // Reset state when speech is stopped
            });
            setIsSpeaking(true);
        }
    };
    

    const renderItem = ({ item }) => (
        <View style={styles.itemCon}>
            <Text style={[styles.text, {paddingBottom: 10, fontSize: 17, fontWeight: 'bold'}]}>{item.name}</Text>
            <Text style={styles.text}>{item.text}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.head}>
            <View style={{display: 'flex', gap: 20, alignItems: 'center', flexDirection: 'row'}}>
            <TouchableOpacity onPress={goBack}>
              <Feather name="arrow-left" size={40} color="white" />
            </TouchableOpacity>
            <Text style={styles.headText}>{chapter.name}</Text>
            </View>

            <View style={{display: 'flex', gap: 20, alignItems: 'center', flexDirection: 'row'}}>
            <TouchableOpacity onPress={shareVerse}>
            <Entypo name="share" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={speak}>
                { isSpeaking ? <MaterialIcons name="volume-off" size={35} color="white" /> : <Foundation name="volume" size={35} color="white" /> }
            </TouchableOpacity>
            </View>
            </View>
            <FlatList
                data={verses}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    itemCon: {
        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        backgroundColor: '#1C1C1E',
        // height: 90,
        marginLeft: 10,
        marginRight: 10,
        padding: 20,
        // borderRadius: 10,
    },
    text: {
        color: '#FBFBFF',
    },
    container: {
        backgroundColor: 'black',
        height: '100%',
    },
    head: {
        backgroundColor: '#163764',
        height: '12%',
        paddingTop: 40,
        display: 'flex',
        flexDirection: 'row',
        gap: 110,
        paddingLeft: 20,
        alignItems: 'center',
        paddingBottom: 10,
    },
    headText: {
        color: '#FBFBFF',
        fontSize: 30,
        fontWeight: 'bold',
    },
})

export default Verses;
