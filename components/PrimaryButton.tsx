import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }: { children: React.ReactNode }) {
  function pressHandler() {
    console.log("Button pressed");
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.buttonInnerContainer}
        onPress={pressHandler}
        android_ripple={{ color: "#41454a" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  // TODO: Add support for light and dark themes
  // ! Dedicated pressed style for iOS not applied
  buttonOuterContainer: {
    borderRadius: 40,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#373A3E",
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

export default PrimaryButton;
