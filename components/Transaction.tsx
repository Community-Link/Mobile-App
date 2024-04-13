import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./Card";
import PrimaryButton from "./PrimaryButton";
import CurvedProgressBar from "./CurvedProgressBar";
import Avatar from "./Avatar";
import { Icon } from "./Icon";
import { View, Text, useThemeColor } from "./Themed";
import Colors from "@/constants/Colors";

const Transaction = () => {
  return (
    <View style={styles.transactionContainer}>
      <Avatar name="Hank" />
      <View style={styles.textContainer}>
        <Text style={styles.name}>Jie</Text>
        <Text style={styles.date}>September 29th</Text>
      </View>
      <View style={styles.currencyContainer}>
        <Text style={styles.value}>2.21</Text>
        <Text style={styles.currency}>USDC</Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon name="ArrowUpRight" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  transactionContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "transparent",
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "transparent",
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
  },
  date: {
    fontSize: 12,
    fontWeight: "300",
    color: Colors.dark.label,
  },
  currencyContainer: {
    flexDirection: "column",
    backgroundColor: "transparent",
  },
  value: {
    fontSize: 20,
    fontWeight: "700",
  },
  currency: {
    fontSize: 12,
    fontWeight: "300",
    color: Colors.dark.label,
  },
  iconContainer: {
    backgroundColor: "transparent",
  },
});

export { Transaction };
