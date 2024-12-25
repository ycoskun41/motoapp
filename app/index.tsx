import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as Animatable from 'react-native-animatable'; // Animasyon için kütüphane

const Page = () => {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('@/assets/images/getting-started.jpg')} // Arka plan resmi
      style={styles.background}
      resizeMode="cover" // Resmin tüm ekranı kaplamasını sağlar
    >
      {/* Saydam Siyah Arka Plan */}
      <View style={styles.overlay} />

      <View style={styles.container}>
        {/* Animasyonlu yazı */}
        <Animatable.View 
          animation="fadeInRight" 
          duration={1500}
          style={styles.textContainer} // Yazı için arka plan
        >
          <Text style={styles.text}>MotoApp Hoşgeldiniz</Text>
        </Animatable.View>

        {/* Türkiye'deki motosiklet kullanıcıları için açıklama */}
        <Animatable.View 
          animation="fadeInRight" 
          duration={1500} 
          delay={700}
          style={styles.textContainer} // Açıklama için arka plan
        >
          <Text style={styles.description}>
            Türkiye'deki motosiklet kullanıcıları için haberler, eğitimler, sürüş rotaları, yardımlaşma ve daha fazlası! Sende yerini al.
          </Text>
        </Animatable.View>
      </View>
      {/* Kırmızı buton */}
      { <Animatable.View
        animation="fadeInRight"
        duration={1500}
        delay={1000}
      >
        <TouchableOpacity onPress={() => router.replace("/(tabs)")} style={styles.redButton}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
      </Animatable.View>}

      <StatusBar style="light" />
    </ImageBackground>
  );
};

export default Page;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    //backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 0,
  },
  textContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Metinler için siyah arka plan
    borderRadius: 10, // Yuvarlak köşeler
    padding: 10, // İç boşluk
    marginBottom: 10, // Alt boşluk
    width: "90%", // Ekranın %90'ı genişlik
    alignItems: "center", // Metni ortalar
  },
  text: {
    fontSize: 26,
    color: "white",
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  redButton: {
    backgroundColor: "red",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 15,
    marginVertical: 10,
    marginBottom: 60,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
