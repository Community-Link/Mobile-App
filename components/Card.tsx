import React from "react";
import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import { Text, View } from "@/components/Themed";

function Card({ children }: { children: React.ReactNode }) {
  return <View style={styles.card}>{children}</View>;
}

function CardHeader({ children }: { children: React.ReactNode }) {
  return <View style={styles.cardHeader}>{children}</View>;
}

function CardTitle({ children }: { children: React.ReactNode | string }) {
  return <Text style={styles.cardTitle}>{children}</Text>;
}

function CardContent({ children }: { children: React.ReactNode }) {
  return <View style={styles.cardContent}>{children}</View>;
}

function CardFooter({ children }: { children: React.ReactNode }) {
  return <View style={styles.cardContent}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: Colors.dark.card,
    borderRadius: 16,
  },
  cardContent: {
    backgroundColor: "transparent",
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingTop: 0,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    padding: 16,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "300",
  },
  cardFooter: {
    backgroundColor: "transparent",
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingTop: 0,
  },
});

export { Card, CardHeader, CardTitle, CardContent, CardFooter };
