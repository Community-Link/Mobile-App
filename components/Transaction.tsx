import { ImageSourcePropType, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./Card";
import PrimaryButton from "./PrimaryButton";
import CurvedProgressBar from "./CurvedProgressBar";
import Avatar from "./Avatar";
import { Icon } from "./Icon";
import { View, Text, useThemeColor } from "./Themed";
import Colors from "@/constants/Colors";

type TransactionProps = {
  name: string;
  date: string;
  value: number;
  currency: string;
  imageUri?: ImageSourcePropType;
  icon: "ArrowUpRight" | "ArrowDownLeft";
};

const Transaction = ({
  name,
  date,
  value,
  currency,
  imageUri,
  icon,
}: TransactionProps) => {
  return (
    <View style={styles.transactionContainer}>
      <Avatar name="Hank" imageUri={imageUri} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View style={styles.currencyContainer}>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.currency}>{currency}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon name={icon} size={28} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  transactionContainer: {
    alignItems: "center",
    backgroundColor: "transparent",
    flexDirection: "row",
    gap: 8,
    paddingVertical: 8,
  },
  textContainer: {
    backgroundColor: "transparent",
    flex: 1,
    flexDirection: "column",
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
  },
  date: {
    color: Colors.dark.label,
    fontSize: 12,
    fontWeight: "300",
  },
  currencyContainer: {
    backgroundColor: "transparent",
    flexDirection: "column",
  },
  value: {
    fontSize: 20,
    fontWeight: "700",
  },
  currency: {
    color: Colors.dark.label,
    fontSize: 12,
    fontWeight: "300",
  },
  iconContainer: {
    backgroundColor: "transparent",
    flexDirection: "row",
  },
});

export { Transaction };
