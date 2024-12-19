import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color="#A9A9A9" />
        <TextInput 
          placeholder="Search" 
          placeholderTextColor="#A9A9A9" 
          style={styles.searchTxt}
          autoCapitalize="none"
        />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    padding: 10,
  },
  searchBar: {
    backgroundColor: '#E4E4E4',
    paddingHorizontal: 10, // Fixed typo here
    paddingVertical: 10, // Fixed typo here
    borderRadius: 10, // Fixed typo here
    flexDirection: 'row',
    gap: 10,
  },
  searchTxt: {
    fontSize: 14,
    flex: 1,
    color: '#333333', // Adjusted for dark gray text
  },
});
7