import { View, Text, FlatList } from 'react-native';
import React from 'react';

const Verses = ({ route }) => {
    const { chapter } = route.params;
    const verses = chapter ? chapter.verses : [];

    const renderItem = ({ item }) => (
        <View>
            <Text>{item.name}</Text>
            <Text>{item.text}</Text>
        </View>
    );

    return (
        <View>
            <Text>{chapter.name}</Text>
            <FlatList
                data={verses}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
        </View>
    );
};

export default Verses;
