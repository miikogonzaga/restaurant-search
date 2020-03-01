import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import ResultSingle from './ResultSingle'

const ResultsList = ({ title, results, navigation }) => {
    if (!result.length) {
        return null
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
                            <ResultSingle result={item} />
                        </TouchableOpacity>
                    ) 
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15
    },
    title: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default withNavigation(ResultsList)