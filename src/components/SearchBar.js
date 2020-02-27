import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = () => {
    return (
        <View style={styles.background}>
            <Feather name="search" size={25} style={styles.iconStyle} />
            <TextInput placeholder="Search" style={styles.inputStyle} />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        marginTop: 15,
        backgroundColor: '#FFF',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 25,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

export default SearchBar