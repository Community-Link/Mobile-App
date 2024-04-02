import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, TextInput, View } from "@/components/Themed";
import PrimaryButton from "@/components/PrimaryButton";
import Card from "@/components/Card";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.title}>Wallet Balance</Text>
        <TextInput placeholder="Enter amount" />
        <PrimaryButton>Click</PrimaryButton>
      </Card>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
