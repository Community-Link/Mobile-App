import {
  Text as DefaultText,
  View as DefaultView,
  StyleSheet,
} from "react-native";
import Colors from "@/constants/Colors";
import {
  Text,
  TextProps,
  useThemeColor,
  View,
  ViewProps,
} from "@/components/Themed";

function Card(props: ViewProps) {
  const { style, lightColor, darkColor, children, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "card"
  );
  return (
    <DefaultView
      style={[{ backgroundColor }, styles.card, style]}
      {...otherProps}
    >
      {children}
    </DefaultView>
  );
}

function CardHeader(props: ViewProps) {
  const { style, lightColor, darkColor, children, ...otherProps } = props;
  return (
    <DefaultView style={[styles.cardHeader, style]} {...otherProps}>
      {children}
    </DefaultView>
  );
}

function CardTitle(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor(
    { light: lightColor, dark: darkColor },
    "sectionHeader"
  );

  return (
    <DefaultText style={[{ color }, styles.cardTitle, style]} {...otherProps} />
  );
}

function CardContent(props: ViewProps) {
  const { style, lightColor, darkColor, children, ...otherProps } = props;
  return (
    <DefaultView style={[styles.cardContent, style]} {...otherProps}>
      {children}
    </DefaultView>
  );
}

function CardFooter(props: ViewProps) {
  const { style, lightColor, darkColor, children, ...otherProps } = props;
  return (
    <DefaultView style={[styles.cardFooter, style]} {...otherProps}>
      {children}
    </DefaultView>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: Colors.dark.card,
    borderRadius: 16,
  },
  cardContent: {
    backgroundColor: "transparent",
    padding: 16,
  },
  cardHeader: {
    alignItems: "center",
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 0,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "300",
  },
  cardFooter: {
    backgroundColor: "transparent",
    flexDirection: "row",
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingTop: 0,
  },
});

export { Card, CardHeader, CardTitle, CardContent, CardFooter };
