import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./Card";
import Avatar from "./Avatar";
import { Text, View } from "@/components/Themed";

const placeholderData = [
  {
    name: "Hank",
    imageUri: "https://randomuser.me/api/portraits",
  },
  {
    name: "John",
    imageUri: "https://randomuser.me/api/portraits",
  },
  {
    name: "Rose",
    imageUri: "https://randomuser.me/api/portraits",
  },
  {
    name: "Alice",
    imageUri: "https://randomuser.me/api/portraits",
  },
];

const Favorites = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Favorites</CardTitle>
        <Text>View All</Text>
      </CardHeader>
      <CardContent>
        <View style={styles.avatarsContainer}>
          {placeholderData.map((item, index) => (
            <View key={index} style={styles.avatarContainer}>
              <Avatar name={item.name} imageUri={item.imageUri} size={64} />
              <Text>{item.name}</Text>
            </View>
          ))}
        </View>
      </CardContent>
    </Card>
  );
};

const styles = StyleSheet.create({
  avatarsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
  avatarContainer: {
    alignItems: "center",
    gap: 8,
    backgroundColor: "transparent",
  },
});

export { Favorites };
