import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, Animated } from 'react-native';

const News = () => {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  const articles = [
    {
      id: '1',
      title: 'Triumph Motorcycles: 2025 Speed Twin 900',
      category: 'Rota',
      image: 'https://mcn-images.bauersecure.com/wp-images/306182/1440x960/2025-on_triumph_speed_twin_900_001.jpg',
      description: 'BMW\'s latest adventure bike, the R 1300 GS, p', // Boş açıklama
    },
    {
      id: '2',
      title: 'BMW R 1300 GS Adventure',
      category: 'Haber',
      image: 'https://cdn.motor1.com/images/mgl/Oo0Wnl/s1/bmw-r-1300-gs-adventure.webp',
      description: 'BMW\'s latest adventure bike, the R 1300 GS, promises enhanced off-road capabilities.',
    },
    {
      id: '3',
      title: 'Triumph Motorcycles: 2025 Speed Twin 900',
      category: 'Rota',
      image: 'https://mcn-images.bauersecure.com/wp-images/306182/1440x960/2025-on_triumph_speed_twin_900_001.jpg',
      description: 'BMW\'s latest adventure bike, the R 1300 GS, p', // Boş açıklama
    },
    {
      id: '4',
      title: 'BMW R 1300 GS Adventure',
      category: 'Haber',
      image: 'https://cdn.motor1.com/images/mgl/Oo0Wnl/s1/bmw-r-1300-gs-adventure.webp',
      description: 'BMW\'s latest adventure bike, the R 1300 GS, promises enhanced off-road capabilities.',
    }, {
      id: '5',
      title: 'Triumph Motorcycles: 2025 Speed Twin 900',
      category: 'Rota',
      image: 'https://mcn-images.bauersecure.com/wp-images/306182/1440x960/2025-on_triumph_speed_twin_900_001.jpg',
      description: 'BMW\'s latest adventure bike, the R 1300 GS, p', // Boş açıklama
    },
    {
      id: '6',
      title: 'BMW R 1300 GS Adventure',
      category: 'Haber',
      image: 'https://cdn.motor1.com/images/mgl/Oo0Wnl/s1/bmw-r-1300-gs-adventure.webp',
      description: 'BMW\'s latest adventure bike, the R 1300 GS, promises enhanced off-road capabilities.',
    },
    // Diğer makaleler...
  ];

  const renderArticleRow = ({ item }: { item: typeof articles[0] }) => (
    <View style={styles.articleRow}>
      <Image source={{ uri: item.image }} style={styles.articleImage} />
      <View style={styles.articleTextWrapper}>
        <Text style={styles.articleTitle}>{item.title}</Text>
        <Text style={styles.articleCategory}>{item.category}</Text>
        <Text style={styles.articleDescription}>
          {item.description || 'Açıklama'}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={articles}
        renderItem={renderArticleRow}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.articlesList}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      />
      <Animated.View
        style={[
          styles.overlay,
          {
            opacity: scrollY.interpolate({
              inputRange: [0, 150],
              outputRange: [1, 0],
              extrapolate: 'clamp',
            }),
          },
        ]}
      >
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  articlesList: {
    paddingHorizontal: 10,  // Yatayda 10px boşluk
    paddingTop: 5,        // Üst kısmı biraz boş bırak
    paddingBottom: 20,     // Alt kısmı biraz boş bırak
  },
  articleRow: {
    flexDirection: 'row',  // İçeriği yatayda hizalar (resim ve metin yan yana)
    alignItems: 'center',  // Yatayda ortalar (resim ve metin)
    marginBottom: 20,      // Alt kısımda 20px boşluk bırakır
  },
  articleImage: {
    width: 80,             // Resmin genişliği 80px
    height: 80,            // Resmin yüksekliği 80px
    borderRadius: 8,       // Resmin köşelerini yuvarlar
  },
  articleTextWrapper: {
    marginLeft: 15,        // Resim ile metin arasına 15px boşluk bırakır
    flexShrink: 1,         // Metnin sığmaması durumunda satırda kaymasına izin verir
  },
  articleTitle: {
    fontSize: 16,          // Başlık font boyutunu 16px yapar
    fontWeight: 'bold',    // Başlığı kalın yapar
    color: '#333',         // Başlık rengini koyu gri yapar
  },
  articleCategory: {
    fontSize: 14,          // Kategori font boyutunu 14px yapar
    color: '#777',         // Kategori rengini açık gri yapar
    marginVertical: 5,     // Kategori metni üst ve alt kısımdan 5px boşluk bırakır
  },
  articleDescription: {
    fontSize: 12,          // Açıklama font boyutunu 12px yapar
    color: '#555',         // Açıklama rengini gri yapar
  },
  overlay: {
    position: 'absolute',  // Overlay'in üstte sabit kalmasını sağlamak için
    top: 0,                // Üstten sıfır mesafe
    left: 0,
    right: 0,
  
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default News;
