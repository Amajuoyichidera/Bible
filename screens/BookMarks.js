import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';

const BookMarks = ({ navigation }) => {
    const bookmarkedBible = useSelector((state) => state.bible.bookMarked);

    const handleVerse = (item) => {
        navigation.navigate('Verses', { chapter: item });
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleVerse(item)} style={styles.itemCon}>
            <View style={styles.item}>
                <FontAwesome6 name="cross" size={40} color="#163764" />
                <Text style={styles.text}>{item.name}</Text>
            </View>
            <FontAwesome name="angle-right" size={30} color="white" />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Feather name="arrow-left" size={35} color="white" />
                </TouchableOpacity>
                <Text style={styles.headText}>Favorites</Text>
            </View>
            {bookmarkedBible.length > 0 ? (
                <FlatList
                    data={bookmarkedBible}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            ) : (
                <Text style={{ color: 'white', fontSize: 25, fontWeight: '500', textAlign: 'center', paddingTop: 50 }}>
                    No Favorites
                </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
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
    item: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    text: {
        color: '#FBFBFF',
        fontSize: 25,
    },
});

export default BookMarks;
