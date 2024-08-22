import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectBible } from '../bibleSlice';

const Home = ({ navigation }) => {
    const bible = useSelector(state => state.bible.myBible);
    const dispatch = useDispatch();

    const handleChapter = (item) => {
        dispatch(selectBible(item));
        navigation.navigate('Chapter');
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleChapter(item)}>
            <Text>{item.name}</Text>
        </TouchableOpacity>
    )
  return (
    <View>
      <FlatList
      data={bible}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem} />
    </View>
  )
}

export default Home