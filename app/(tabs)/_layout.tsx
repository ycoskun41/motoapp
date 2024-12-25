import React from 'react';
import { Tabs } from 'expo-router';
import { TabBar } from '@/components/TabBar';

const TabLayout = () => {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />} screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Haberler",
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: "Rotalar",
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Eğitim",
        }}
      />
      <Tabs.Screen
        name="learn"
        options={{
          title: "Sosyal",
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Profil",
        }}
      />
      
    </Tabs>
  );
};

export default TabLayout;
