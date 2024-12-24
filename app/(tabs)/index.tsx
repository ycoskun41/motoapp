import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import BreakingNews from '@/components/BreakingNews';
import News from '@/components/News';



const Page = () => {
  const { top: safeTop } = useSafeAreaInsets();  // Güvenli alanın üst boşluğunu alıyoruz

  return (
    <View style={[styles.container, { paddingTop: safeTop }]}>
    <Header />
    <SearchBar />
    <BreakingNews />
    <News />
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
})
