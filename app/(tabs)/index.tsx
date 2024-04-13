import { ScrollView, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card";
import { WalletBalance } from "@/components/WalletBalance";
import Avatar from "@/components/Avatar";
import { Favorites } from "@/components/Favorites";
import { Transaction } from "@/components/Transaction";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <WalletBalance />
      <Card>
        <CardHeader>
          <CardTitle>Data Left</CardTitle>
        </CardHeader>
        <CardContent>
          <Text>Users Placeholder</Text>
        </CardContent>
      </Card>
      <Favorites />
      <Card>
        <CardHeader>
          <CardTitle>Latest Transactions</CardTitle>
          <Text>View All</Text>
        </CardHeader>
        <CardContent>
          <Transaction />
        </CardContent>
      </Card>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
