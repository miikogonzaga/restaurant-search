import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])

    const searchApi = async () => {
        const response = await yelp.get('/search', {
            params: {
                term,
                limit: 50,
                location: 'irvine'
            }
        })
        setResults(response.data.businesses)
    }

    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={newTerm => setTerm(newTerm)} 
                onTermSubmit={() => searchApi()}
            />
            <Text>We have found {results.length}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen