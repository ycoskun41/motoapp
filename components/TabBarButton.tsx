import { Pressable, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { icon } from "@/constants/Icons";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Colors } from "@/constants/Colors";

// Prop'lar için doğru tipler kullanılıyor
interface TabBarButtonProps {
  onPress: () => void; // onPress bir fonksiyon olmalı
  onLongPress: () => void; // onLongPress bir fonksiyon olmalı
  isFocused: boolean; // isFocused boolean türünde
  routeName: string; // routeName bir string olmalı
  label: string; // label bir string olmalı
}

const TabBarButton = ({
  onPress,
  onLongPress,
  isFocused,
  routeName,
  label,
}: TabBarButtonProps) => {
  const opacity = useSharedValue(0);

  useEffect(() => {
    // Animasyonun başlangıcı
    opacity.value = withSpring(isFocused ? 1 : 0, {
      damping: 15, // Yumuşaklık
      stiffness: 100, // Sertlik
    });
  }, [isFocused]); // isFocused değiştiğinde animasyonu tetikle

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacityValue = interpolate(opacity.value, [0, 1], [1, 0]);

    return {
      opacity: opacityValue,
    };
  });

  // `icon[routeName]` öğesinin doğru şekilde render edilmesini sağla
  const IconComponent = icon[routeName];

  if (!IconComponent) {
    console.warn(`Icon for route ${routeName} not found.`);
    return null;
  }

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabbarBtn}
    >
      {/* `IconComponent` doğru bir şekilde kullanıldı */}
      <IconComponent
        color={isFocused ? Colors.tabIconSelected : Colors.tabIconDefault}
        focused={isFocused}
      />
      <Animated.Text
        style={[
          {
            color: isFocused ? Colors.tabIconSelected : Colors.tabIconDefault,
            fontSize: 12,
          },
          animatedTextStyle,
        ]}
      >
        {label}
      </Animated.Text>
    </Pressable>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  tabbarBtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
