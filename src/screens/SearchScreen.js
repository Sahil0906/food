import React, {useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


const SearchScreen = () => {
    const [term,setTerm] = useState('');

    const [ searchApi, results, errorMessage ] = useResults();
   
    const filterResultsByPrice = (price) => {
        // price = '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    };
    
    return(
        <>
            <SearchBar term={term} 
                onTermChange={setTerm}
                onTermSubmit = {() => searchApi(term)}
            />
            {/* <Text>Search Screen</Text> */}
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList 
                    results={filterResultsByPrice('$')} 
                    title="Cost Effective"
                    // navigation = {navigation}
                />
                <ResultsList 
                    results={filterResultsByPrice('$$')} 
                    title="Bit Pricier" 
                    // navigation = {navigation}
                />
                <ResultsList 
                    results={filterResultsByPrice('$$$')} 
                    title="Big Spender" 
                    // navigation = {navigation}
                />
            </ScrollView>
        </>
    )
};


const styles = StyleSheet.create({

});


export default SearchScreen;