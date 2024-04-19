import { Pressable, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./Card";
import Avatar from "./Avatar";
import { Text } from "@/components/Themed";
import { Transaction } from "@/components/Transaction";

const LatestTransactions = () => {
  const placeholderTransactionData = [
    {
      name: "Rose",
      date: "September 29",
      value: 2.21,
      currency: "USDC",
      icon: "ArrowUpRight",
      imageUri: require("../assets/images/person1.png"),
    },
    {
      name: "Mugisa",
      date: "September 14",
      value: 5.49,
      currency: "USDC",
      icon: "ArrowDownLeft",
      imageUri: require("../assets/images/person2.png"),
    },
    {
      name: "Baguma",
      date: "September 5",
      value: 7.1,
      currency: "USDC",
      icon: "ArrowUpRight",
      imageUri: require("../assets/images/person4.png"),
    },
  ];

  function pressHandler() {
    console.log("View All pressed");
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Latest Transactions</CardTitle>
        <Pressable onPress={pressHandler}>
          <Text style={{ fontSize: 12, color: "#9EA3A7" }}>View All</Text>
        </Pressable>
      </CardHeader>
      <CardContent style={styles.transactionContainer}>
        {placeholderTransactionData.map((item, index) => (
          <Transaction
            key={index}
            name={item.name}
            date={item.date}
            value={item.value}
            currency={item.currency}
            icon={item.icon as "ArrowUpRight" | "ArrowDownLeft"}
            imageUri={item.imageUri}
          />
        ))}
      </CardContent>
    </Card>
  );
};

const styles = StyleSheet.create({
  transactionContainer: {
    gap: 12,
  },
});

export { LatestTransactions };
