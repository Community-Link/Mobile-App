import { View, Text } from "react-native";
import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./Card";
import PrimaryButton from "./PrimaryButton";
import CurvedProgressBar from "./CurvedProgressBar";

const WalletBalance = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Wallet Balance</CardTitle>
      </CardHeader>
      <CardContent>
        <View style={styles.progressContainer}>
          {/* <CurvedProgressBar progress={70} /> */}
        </View>
      </CardContent>
      <CardFooter>
        {/* TODO: Scrollable */}
        {/* <ScrollView horizontal> */}
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton icon="ArrowUpRight">Send</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton icon="ArrowDownLeft">Receive</PrimaryButton>
          </View>
          {/* <View style={styles.buttonContainer}>
                <PrimaryButton icon="Twitter">Share</PrimaryButton>
              </View> */}
        </View>
        {/* </ScrollView> */}
      </CardFooter>
    </Card>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    backgroundColor: "transparent",
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
  },
});

export { WalletBalance };
