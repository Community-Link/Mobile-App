import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./Card";
import PrimaryButton from "./PrimaryButton";
import { View, Text } from "./Themed";
import Colors from "@/constants/Colors";

const DataRemainingCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Data Left</CardTitle>
      </CardHeader>
      <CardContent style={styles.content}>
        <Text style={styles.value}>134</Text>
        <Text style={styles.label}>/500mb</Text>
      </CardContent>
    </Card>
  );
};

const styles = StyleSheet.create({
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  value: {
    fontSize: 36,
  },
  label: {
    fontSize: 12,
    color: Colors.dark.label,
  },
});

export { DataRemainingCard };
