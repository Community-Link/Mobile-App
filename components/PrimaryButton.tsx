import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }: { children: React.ReactNode }) {
  function pressHandler() {
    console.log("Button pressed");
  }
  return (
    <Pressable onPress={pressHandler}>
      <View style={styles.container}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  // Add support for light and dark themes
  container: {
    backgroundColor: "#373A3E",
    borderRadius: 40,
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

export default PrimaryButton;
