import { Pressable, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./Card";
import Avatar from "./Avatar";
import { Text, View } from "@/components/Themed";

const placeholderData = [
  {
    name: "Hank",
    imageUri: require("../assets/images/person1.png"),
  },
  {
    name: "John",
    imageUri: require("../assets/images/person2.png"),
  },
  {
    name: "Rose",
    imageUri: null,
  },
  {
    name: "Alice",
    imageUri: require("../assets/images/person3.png"),
  },
];

const Favorites = () => {
  function pressHandler() {
    console.log("Favorites View All pressed");
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Favorites</CardTitle>
        <Pressable onPress={pressHandler}>
          <Text style={{ fontSize: 12, color: "#9EA3A7" }}>View All</Text>
        </Pressable>
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
