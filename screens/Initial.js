import { View, Text, StyleSheet } from 'react-native'
import React, {useEffect} from 'react' 
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Initial = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home')
        }, 2000)
    }, [])
  return (
    <View style={styles.container}>
      <FontAwesome6 name="cross" size={200} color="white" />
      <Text style={styles.text}>BIBLE  KJV</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 60,
        fontWeight: 'bold',
        paddingTop: 80,
    }
})
export default Initial