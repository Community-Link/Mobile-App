import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./Card";
import PrimaryButton from "./PrimaryButton";
import { View, Text } from "./Themed";
import Colors from "@/constants/Colors";

const WalletBalance = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Wallet Balance</CardTitle>
      </CardHeader>
      <CardContent style={styles.content}>
        <View style={styles.rows}>
          <Text style={styles.primaryValue}>127</Text>
          <Text style={styles.primaryLabel}>USDC</Text>
        </View>
        <View style={styles.rows}>
          <Text style={styles.secondaryValue}>497357.40</Text>
          <Text style={styles.secondaryLabel}>UGX</Text>
        </View>
      </CardContent>
      <CardFooter>
        {/* TODO: Scrollable */}
        {/* <ScrollView horizontal> */}

        <View style={styles.buttonContainer}>
          <PrimaryButton icon="ArrowUpRight">Send</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton icon="ArrowDownLeft">Receive</PrimaryButton>
        </View>
        {/* <View style={styles.buttonContainer}>
                <PrimaryButton icon="Twitter">Share</PrimaryButton>
              </View> */}

        {/* </ScrollView> */}
      </CardFooter>
    </Card>
  );
};

const styles = StyleSheet.create({
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  rows: {
    backgroundColor: "transparent",
    flexDirection: "row",
    gap: 2,
    justifyContent: "center",
    alignItems: "baseline",
  },
  primaryValue: {
    fontSize: 48,
    fontWeight: "bold",
  },
  primaryLabel: {
    color: Colors.dark.label,
    fontSize: 16,
  },
  secondaryValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
  secondaryLabel: {
    fontSize: 10,
    color: Colors.dark.label,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
  },
});

export { WalletBalance };
