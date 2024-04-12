import { StyleSheet } from "react-native";

import { Text, TextInput, View } from "@/components/Themed";
import PrimaryButton from "@/components/PrimaryButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Card>
        <CardHeader>
          <CardTitle>Wallet Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <PrimaryButton>Send</PrimaryButton>
          <PrimaryButton>Receive</PrimaryButton>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Data Left</CardTitle>
        </CardHeader>
        <CardContent>
          <PrimaryButton>Send</PrimaryButton>
          <PrimaryButton>Receive</PrimaryButton>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Favorites</CardTitle>
          <Text>View All</Text>
        </CardHeader>
        <CardContent>
          <PrimaryButton>Send</PrimaryButton>
          <PrimaryButton>Receive</PrimaryButton>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Latest Transactions</CardTitle>
          <Text>View All</Text>
        </CardHeader>
        <CardContent>
          <PrimaryButton>Send</PrimaryButton>
          <PrimaryButton>Receive</PrimaryButton>
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
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "transparent",
  },
});
