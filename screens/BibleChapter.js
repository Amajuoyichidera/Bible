import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

const BibleChapter = ({ navigation }) => {
    const selectedBible = useSelector(state => state.bible.selectedBible);
    const chapters = selectedBible ? selectedBible.chapters : [];

    const handleVerse = (chapter) => {
        navigation.navigate('Verses', { chapter });
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleVerse(item)}>
            <Text>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View>
            {selectedBible && (
                <View>
                    <Text>{selectedBible.name}</Text>
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

export default BibleChapter;

