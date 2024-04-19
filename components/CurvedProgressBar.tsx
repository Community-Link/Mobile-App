import React from "react";
import { View, Dimensions } from "react-native";
import { Svg, Path, Defs, LinearGradient, Stop } from "react-native-svg";

const { width } = Dimensions.get("window");

const CurvedProgressBar = ({ progress }: { progress: number }) => {
  const strokeWidth = 20;
  const radius = width / 2 - strokeWidth * 2;
  const circumference = radius * Math.PI;
  const fill = (circumference * progress) / 100;

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Svg width={width} height={width / 2}>
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0" stopColor="blue" />
            <Stop offset="1" stopColor="darkblue" />
          </LinearGradient>
        </Defs>
        {/* Background Path */}
        <Path
          d={`
            M ${strokeWidth}, ${width / 2}
            A ${radius} ${radius} 0 0 1 ${width - strokeWidth} ${width / 2}
          `}
          fill="none"
          stroke="#ddd"
          strokeWidth={strokeWidth}
        />
        {/* Foreground Path */}
        <Path
          d={`
            M ${strokeWidth}, ${width / 2}
            A ${radius} ${radius} 0 ${progress > 50 ? 1 : 0} 1 ${
              strokeWidth + Math.cos((Math.PI * progress) / 50) * radius
            } ${width / 2 - Math.sin((Math.PI * progress) / 50) * radius}
          `}
          fill="none"
          stroke="url(#grad)"
          strokeWidth={strokeWidth}
        />
      </Svg>
    </View>
  );
};

export default CurvedProgressBar;
