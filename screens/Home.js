import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectBible } from '../bibleSlice';
import FontAwesome from '@expo/vector-icons/FontAwesome'; 
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';

const Home = ({ navigation }) => {
    const bible = useSelector(state => state.bible.myBible);
    const dispatch = useDispatch();

    const handleChapter = (item) => {
        dispatch(selectBible(item));
        navigation.navigate('Chapter');
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleChapter(item)} style={styles.itemCon}>
            <View style={styles.item}>
            <FontAwesome6 name="cross" size={40} color="#163764" />
            <Text style={styles.text}>{item.name}</Text>
           </View>
           <FontAwesome name="angle-right" size={30} color="white" />
        </TouchableOpacity>
    )
  return (
    <View style={styles.container}>
        <View style={styles.head}>
            <TouchableOpacity>
             <Feather name="menu" size={30} color="#FBFBFF" />
            </TouchableOpacity>
            <Text style={styles.headText}>Bible KJV</Text>
        </View>
      <FlatList
      data={bible}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: '100%',
    },
    text: {
        color: '#FBFBFF',
        fontSize: 25
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
        gap: 20
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
    }
})

export default Home