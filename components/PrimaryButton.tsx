import React from "react";
import { View, Text, StyleSheet } from "react-native";

function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PrimaryButton;
