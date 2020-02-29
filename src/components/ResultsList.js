import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import ResultSingle from './ResultSingle'

const ResultsList = ({ title, results }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({ item }) => {
                    return <ResultSingle result={item} />
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

export default ResultsList