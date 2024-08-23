import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Feather from '@expo/vector-icons/Feather';


const Verses = ({ route, navigation }) => {
    const { chapter } = route.params;
    const verses = chapter ? chapter.verses : [];

    const renderItem = ({ item }) => (
        <View style={styles.itemCon}>
            <Text style={[styles.text, {paddingBottom: 10, fontSize: 17, fontWeight: 'bold'}]}>{item.name}</Text>
            <Text style={styles.text}>{item.text}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.head}>
            <TouchableOpacity onPress={() => navigation.goBack('Chapter')}>
                     <Feather name="arrow-left" size={40} color="white" />
                    </TouchableOpacity>
            <Text style={styles.headText}>{chapter.name}</Text>
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
        height: '13%',
        paddingTop: 60,
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
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
