import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type Props = {};

const Header = (props: Props) => {
  return (
    <View style={styles.container}>
      {/* Image component */}
      <View style={styles.userInfo}>
        <Image 
          source={{ uri: 'https://xsgames.co/randomusers/assets/avatars/male/40.jpg' }} 
          style={styles.userImg}  
          resizeMode="cover" 
        />
        <View style={styles.userText}>
          <Text style={styles.welcomeText}>Hoşgeldin</Text>
          <Text style={styles.userName}>John Doe</Text>
        </View>
      </View>
      
      {/* Notification Icon */}
      <TouchableOpacity onPress={() => {}}>
        <Ionicons name="notifications-outline" size={24} color={Colors.black} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  userInfo: {
    flexDirection: 'row',  // Resmin ve metinlerin yatayda sıralanması için
    alignItems: 'center',  // Ortalamak için
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 25, // Resmin yuvarlak olmasını sağlar
    resizeMode: 'cover', // Resmin kesilmeden, kutuya uygun şekilde görünmesini sağlar
  },
  userText: {
    marginLeft: 10,  // Resmin sağında bir boşluk bırakır
  },
  welcomeText: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
