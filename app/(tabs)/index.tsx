import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import BreakingNews from '@/components/BreakingNews';



const Page = () => {
  const { top: safeTop } = useSafeAreaInsets();  // Güvenli alanın üst boşluğunu alıyoruz

  return (
    <View style={[styles.container, { paddingTop: safeTop }]}>
    <Header />
    <SearchBar />
    <BreakingNews />
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
  },
})
