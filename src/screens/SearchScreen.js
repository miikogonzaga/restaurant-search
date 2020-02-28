import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultsList'
import useResults from '../hooks/useResults'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()

    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <View style={styles.style}>
                <Text>{results.length} restaurants found:</Text>
                <ResultsList title="Cost Effective" />
                <ResultsList title="Bit Pricier" />
                <ResultsList title="Big Spender" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    style: {
        marginTop: 15,
        marginHorizontal: 15
    }
})

export default SearchScreen