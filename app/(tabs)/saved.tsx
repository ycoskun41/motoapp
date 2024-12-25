import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking } from 'react-native'

type Props = {}

const Page = (props: Props) => {
  // Örnek kategoriler ve video bağlantıları
  const kategoriler = [
    { baslik: 'Motosiklet Temelleri', videoUrl: 'https://www.youtube.com/watch?v=xxxxxx', teori: 'Motosiklet kontrollerinin, türlerinin ve güvenlik ipuçlarının temel tanıtımı.' },
    { baslik: 'İleri Seviye Sürüş Teknikleri', videoUrl: 'https://www.youtube.com/watch?v=yyyyyy', teori: 'İleri seviyede viraj alma, fren teknikleri ve zorlu yol koşullarında sürüş.' },
    { baslik: 'Trafik Kuralları ve Güvenlik', videoUrl: 'https://www.youtube.com/watch?v=zzzzzz', teori: 'Trafik kuralları, işaretler ve güvenlik protokollerine dair teorik bilgiler.' },
    { baslik: 'Motosiklet Temelleri', videoUrl: 'https://www.youtube.com/watch?v=xxxxxx', teori: 'Motosiklet kontrollerinin, türlerinin ve güvenlik ipuçlarının temel tanıtımı.' },
    { baslik: 'İleri Seviye Sürüş Teknikleri', videoUrl: 'https://www.youtube.com/watch?v=yyyyyy', teori: 'İleri seviyede viraj alma, fren teknikleri ve zorlu yol koşullarında sürüş.' },
    { baslik: 'Trafik Kuralları ve Güvenlik', videoUrl: 'https://www.youtube.com/watch?v=zzzzzz', teori: 'Trafik kuralları, işaretler ve güvenlik protokollerine dair teorik bilgiler.' },
  
  ]

  const videoAc = (url: string) => {
    Linking.openURL(url)
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Motosiklet Eğitimi</Text>
      {kategoriler.map((kategori, index) => (
        <View key={index} style={styles.kategoriCard}>
          <Text style={styles.kategoriBaslik}>{kategori.baslik}</Text>
          <Text style={styles.teoriMetni}>{kategori.teori}</Text>
          <TouchableOpacity
            style={styles.videoButton}
            onPress={() => videoAc(kategori.videoUrl)}
          >
            <Text style={styles.buttonText}>Videoyu İzle</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  kategoriCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  kategoriBaslik: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  teoriMetni: {
    fontSize: 14,
    color: '#666',
    marginVertical: 10,
  },
  videoButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
})
