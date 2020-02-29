import React, { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ResultSingle = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.image_url }} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10
    },  
    image: {
        height: 120,
        width: 250,
        borderRadius: 4
    },
    name: {
        fontWeight: 'bold'
    }
})

export default ResultSingle