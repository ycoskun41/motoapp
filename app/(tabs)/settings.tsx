import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image, // Profil resmi için kullanılacak bileşen
} from 'react-native';

const Page = () => {
  const [activeSection, setActiveSection] = useState('personal'); // Başlangıçta 'personal' sekmesi açık

  // Bilgi kategorilerinin gösterim durumunu kontrol eden fonksiyon
  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <View style={styles.container}>
      {/* Profil Resmi */}
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://xsgames.co/randomusers/assets/avatars/male/24.jpg' }} // Örnek profil resmi
        />
        <Text style={styles.profileName}>Haydar Haydar</Text>
      </View>

      {/* Kategoriler */}
      <ScrollView>
        {/* Kişisel Bilgiler */}
        <TouchableOpacity
          style={styles.categoryHeader}
          onPress={() => toggleSection('personal')}
        >
          <Text style={styles.categoryTitle}>Kişisel Bilgiler</Text>
        </TouchableOpacity>
        {activeSection === 'personal' && (
          <View style={styles.sectionContainer}>
            <TextInput style={styles.input} placeholder="Ad" />
            <TextInput style={styles.input} placeholder="Soyad" />
            <TextInput style={styles.input} placeholder="Doğum Tarihi" />
            <TextInput style={styles.input} placeholder="Kan Grubu" />
            <TextInput style={styles.input} placeholder="Telefon Numarası" />
          </View>
        )}

        {/* Diğer Kategoriler */}
        <TouchableOpacity
          style={styles.categoryHeader}
          onPress={() => toggleSection('license')}
        >
          <Text style={styles.categoryTitle}>Ehliyet Bilgisi</Text>
        </TouchableOpacity>
        {activeSection === 'license' && (
          <View style={styles.sectionContainer}>
            <TextInput style={styles.input} placeholder="Ehliyet Sınıfı" />
            <TextInput style={styles.input} placeholder="Ehliyet Tarihi" />
          </View>
        )}

        <TouchableOpacity
          style={styles.categoryHeader}
          onPress={() => toggleSection('location')}
        >
          <Text style={styles.categoryTitle}>Konum Bilgisi</Text>
        </TouchableOpacity>
        {activeSection === 'location' && (
          <View style={styles.sectionContainer}>
            <TextInput style={styles.input} placeholder="İl" />
            <TextInput style={styles.input} placeholder="İlçe" />
          </View>
        )}

        <TouchableOpacity
          style={styles.categoryHeader}
          onPress={() => toggleSection('bike')}
        >
          <Text style={styles.categoryTitle}>Motosiklet Bilgileri</Text>
        </TouchableOpacity>
        {activeSection === 'bike' && (
          <View style={styles.sectionContainer}>
            <TextInput style={styles.input} placeholder="Motosiklet Markası" />
            <TextInput style={styles.input} placeholder="Modeli" />
            <TextInput style={styles.input} placeholder="Plaka" />
          </View>
        )}

        <TouchableOpacity
          style={styles.categoryHeader}
          onPress={() => toggleSection('experience')}
        >
          <Text style={styles.categoryTitle}>Eğitim ve Tecrübe</Text>
        </TouchableOpacity>
        {activeSection === 'experience' && (
          <View style={styles.sectionContainer}>
            <TextInput style={styles.input} placeholder="Eğitim Durumu" />
            <TextInput style={styles.input} placeholder="Toplam Kilometre" />
            <TextInput style={styles.input} placeholder="Yıl Tecrübesi" />
          </View>
        )}

        <TouchableOpacity
          style={styles.categoryHeader}
          onPress={() => toggleSection('club')}
        >
          <Text style={styles.categoryTitle}>Kulüp ve Topluluk</Text>
        </TouchableOpacity>
        {activeSection === 'club' && (
          <View style={styles.sectionContainer}>
            <TextInput style={styles.input} placeholder="Kulüp Adı" />
            <TextInput style={styles.input} placeholder="Üyelik Başlangıç Tarihi" />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ana konteyner tüm ekranı kaplasın
    paddingHorizontal: 10, // Yatay kenar boşluğu
    marginTop: 80, // Üst kenar boşluğu
  },
  profileContainer: {
    alignItems: 'center', // Profil bileşenlerini ortala
    marginBottom: 20, // Profil ile kategoriler arasında boşluk
  },
  profileImage: {
    width: 150, // Profil resminin genişliği
    height: 150, // Profil resminin yüksekliği
    borderRadius: 100, // Resmi yuvarlak yapmak için yarıçap
    backgroundColor: '#ccc', // Arka plan rengi (örnek için)
    marginBottom: 10, // Resim ile isim arasında boşluk
  },
  profileName: {
    fontSize: 18, // Profil ismi yazı boyutu
    fontWeight: 'bold', // Profil ismi yazı kalınlığı
  },
  categoryHeader: {
    backgroundColor: '#f0f0f0', // Kategori başlıklarının arka plan rengi
    padding: 15, // Başlıkların çevresindeki boşluk
    marginBottom: 5, // Kategoriler arasında dikey boşluk
    borderRadius: 5, // Köşeleri yuvarla
    flexDirection: 'row', // Başlık ve ilerleme göstergesi yatayda sıralansın
    alignItems: 'center', // İçerikler dikeyde ortalansın
    justifyContent: 'space-between', // Başlık ve çubuk arasına boşluk
  },
  categoryTitle: {
    fontSize: 16, // Kategori başlık yazı boyutu
    fontWeight: 'bold', // Kategori başlık yazı kalınlığı
  },
  sectionContainer: {
    padding: 10, // İçerik bölümü kenar boşluğu
    backgroundColor: '#fff', // İçerik arka plan rengi
    marginBottom: 10, // Kategoriler arasında dikey boşluk
    borderRadius: 5, // İçerik köşelerini yuvarla
    borderWidth: 1, // İçerik çerçeve kalınlığı
    borderColor: '#ccc', // İçerik çerçeve rengi
  },
  input: {
    borderWidth: 1, // Giriş alanı çerçeve kalınlığı
    borderColor: '#ccc', // Giriş alanı çerçeve rengi
    borderRadius: 5, // Giriş alanı köşeleri yuvarlatılmış
    padding: 10, // Giriş alanı iç boşluğu
    marginBottom: 10, // Giriş alanları arasında dikey boşluk
  },
});

export default Page;
