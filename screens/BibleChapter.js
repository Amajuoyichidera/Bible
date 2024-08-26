import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import FontAwesome from '@expo/vector-icons/FontAwesome'; 
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';

const BibleChapter = ({ navigation }) => {
    const selectedBible = useSelector(state => state.bible.selectedBible);
    const chapters = selectedBible ? selectedBible.chapters : [];

    const handleVerse = (chapter) => {
        navigation.navigate('Verses', { chapter });
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
            {selectedBible && (
                <View style={styles.head}>
                    <TouchableOpacity onPress={() => navigation.goBack('Home')}>
                     <Feather name="arrow-left" size={40} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.headText}>{selectedBible.name}</Text>
                </View>
            )}

            <FlatList
                data={chapters}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
        </View>
    );
};


const styles = StyleSheet.create({
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
    item: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    text: {
        color: '#FBFBFF',
        fontSize: 25
    },
})

export default BibleChapter;

