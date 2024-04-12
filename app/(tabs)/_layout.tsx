import React from "react";
import { icons, HelpCircle } from "lucide-react-native";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

type IconProps = {
  name: keyof typeof icons; // Ensures that name is a valid key of the icons object
  color: string;
  size?: number; // Made size optional with a default value, similar to how size is fixed in TabBarIcon
};

const Icon: React.FC<IconProps> = ({ name, color, size = 24 }) => {
  const LucideIcon = icons[name];
  if (!LucideIcon) {
    // Optionally handle the case where the icon name does not exist in the icons object
    console.error(`Icon "${name}" not found in lucide-icons`);
    return null;
  }

  return <LucideIcon color={color} size={size} style={{ marginBottom: -3 }} />;
};

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Icon name="Home" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <HelpCircle
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="data"
        options={{
          title: "Data",
          tabBarIcon: ({ color }) => <Icon name="Antenna" color={color} />,
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: "Wallet",
          tabBarIcon: ({ color }) => <Icon name="Wallet" color={color} />,
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          title: "Community",
          tabBarIcon: ({ color }) => <Icon name="Command" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Community",
          tabBarIcon: ({ color }) => <Icon name="Settings2" color={color} />,
        }}
      />
    </Tabs>
  );
}
