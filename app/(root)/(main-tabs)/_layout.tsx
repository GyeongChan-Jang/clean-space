import { Tabs } from "expo-router";
import { Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { icons } from "@/constants";

interface TabIconProps {
  focused: boolean;
  icon: keyof typeof icons;
}

const TabIcon = ({ focused, icon }: TabIconProps) => {
  const iconSource = focused
    ? icons[`${icon}Fill` as keyof typeof icons]
    : icons[icon as keyof typeof icons];

  return <Image source={iconSource} className="w-6 h-6" resizeMode="contain" />;
};

const Layout = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: "#333333",
        tabBarInactiveTintColor: "#AAAAAA",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          paddingBottom: insets.bottom + 5,
          height: 55 + insets.bottom,
          paddingTop: 5,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "홈",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="home" />
          ),
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          title: "스케줄",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="schedule" />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "채팅",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="chat" />
          ),
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          title: "프로필",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="profile" />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
