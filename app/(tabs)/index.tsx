import { ScrollView, StyleSheet, View } from "react-native";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card";
import { WalletBalance } from "@/components/WalletBalance";
import { Favorites } from "@/components/Favorites";
import { LatestTransactions } from "@/components/LatestTransactions";
import { DataRemainingCard } from "@/components/DataRemainingCard";

export default function TabOneScreen() {
  return (
    <View style={styles.appContainer}>
      <ScrollView contentContainerStyle={styles.scrollableContainer}>
        <WalletBalance />
        <DataRemainingCard />
        <Favorites />
        <LatestTransactions />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  scrollableContainer: {
    alignItems: "center",
    gap: 16,
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: "300",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
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
