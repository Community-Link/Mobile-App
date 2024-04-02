import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

function Card({ children }: { children: React.ReactNode }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: Colors.dark.card,
    borderRadius: 16,
    padding: 16,
  },
});
