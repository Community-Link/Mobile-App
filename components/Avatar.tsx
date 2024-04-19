import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";

const Avatar = ({
  imageUri,
  name,
  size = 50,
}: {
  imageUri?: ImageSourcePropType;
  name: string;
  size?: number;
}) => {
  // Extract the first two letters of the name with specific casing
  const twoLetters = name
    ? name.charAt(0).toUpperCase() + (name.charAt(1) || "").toLowerCase()
    : "NA";

  return (
    <View
      style={[
        styles.container,
        { height: size, width: size, borderRadius: size / 2 },
      ]}
    >
      {imageUri ? (
        <Image
          source={imageUri}
          style={{ height: size, width: size, borderRadius: size / 2 }}
          resizeMode="cover"
        />
      ) : (
        <Text style={[styles.initials, { fontSize: size / 2 }]}>
          {twoLetters}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3994FF",
    overflow: "hidden",
  },
  initials: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Avatar;
