import React, { useState } from 'react'
import { Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultsList'
import useResults from '../hooks/useResults'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()

     const filterListByPrice = price => {
         return results.filter(result => {
             return result.price === price
         })
     }

    return (
        <>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}

            <ScrollView>
                <ResultsList 
                    title="Cost Effective" 
                    results={filterListByPrice('$')} 
                />
                <ResultsList 
                    title="Bit Pricier" 
                    results={filterListByPrice('$$')} 
                />
                <ResultsList 
                    title="Big Spender" 
                    results={filterListByPrice('$$$')}   
                />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen