import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from "react-native";

const BreakingNews = () => {
  const articles = [
    {
      id: "1",
      title: "Triumph Motorcycles: 2025 Speed Twin 900",
      category: "Rota",
      image: "https://mcn-images.bauersecure.com/wp-images/306182/1440x960/2025-on_triumph_speed_twin_900_001.jpg",
    },
    {
      id: "2",
      title: "BMW R 1300 GS Adventure",
      category: "Haber",
      image: "https://cdn.motor1.com/images/mgl/Oo0Wnl/s1/bmw-r-1300-gs-adventure.webp",
    },
    {
      id: "3",
      title: "DAINESE: 2024 D-AIR Yarış Kıyafetleri",
      category: "Topluluk",
      image: "https://cdn.motorhaber.com.tr/img/8/795-b-kiyafet-795.jpg",
    },
    {
      id: "4",
      title: "İklim Zirvesi: Küresel Kriz Ele Alındı",
      category: "Haber",
      image: "https://cdn.motor1.com/images/mgl/Oo0Wnl/s1/bmw-r-1300-gs-adventure.webp",
    },
    {
      id: "5",
      title: "Yapay Zeka ve Gelişmeler",
      category: "Yemek",
      image: "https://mcn-images.bauersecure.com/wp-images/306182/1440x960/2025-on_triumph_speed_twin_900_001.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDotPress = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <Image
          source={{ uri: articles[currentIndex].image }}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.title}>{articles[currentIndex].title}</Text>
      </View>
      <View style={styles.dotsWrapper}>
        {articles.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dot,
              currentIndex === index && styles.activeDot,
            ]}
            onPress={() => handleDotPress(index)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-start", // Dikeyde üstte hizalar, üst alanda yer bırakır
      alignItems: "center", // Yatayda ortalar
    },
    slider: {
      width: "90%", // Slider genişliğini ekran genişliğine ayarlar
      height: 250, // Slider yüksekliğini 250px yapar
      justifyContent: "center", // Slider içeriğini dikeyde ortalar
      alignItems: "center", // Slider içeriğini yatayda ortalar
      position: "relative", // Slider'ın konumunu relative yapar, bu şekilde üzerine yerleştirilen öğeler için pozisyon belirlenebilir
      marginTop: -5, // Slider'ın üst kısmından 50px boşluk bırakır
    },
    image: {
      width: "100%", // Resmin genişliği slider genişliği kadar olur
      height: 200, // Resmin yüksekliği 200px olur
      borderRadius: 10, // Resmin köşelerini yuvarlar
    },
    title: {
      marginTop: 10, // Başlığın üstünden 10px boşluk bırakır
      fontSize: 16, // Başlık yazısının font boyutunu 16px yapar
      fontWeight: "bold", // Başlık yazısını kalın yapar
      textAlign: "center", // Başlık yazısını ortalar
      color: "#333", // Başlık yazısının rengini koyu gri yapar
    },
    dotsWrapper: {
      flexDirection: "row", // Dairelerin yatayda sıralanmasını sağlar
      marginTop: 0, // Dairelerin üstünden boşluk bırakır
    },
    dot: {
      width: 10, // Dairelerin genişliğini 10px yapar
      height: 10, // Dairelerin yüksekliğini 10px yapar
      borderRadius: 5, // Daireleri yuvarlak yapar
      backgroundColor: "#ccc", // Dairelerin rengini gri yapar
      marginHorizontal: 5, // Daireler arasında 5px yatay boşluk bırakır
    },
    activeDot: {
      backgroundColor: "#000", // Aktif dairenin rengini siyah yapar
    },
});
  

export default BreakingNews;
