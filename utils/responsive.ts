import { Dimensions } from "react-native";

export const heightPercentage = (percentage: number) => {
  const screenHeight = Dimensions.get("window").height;
  return screenHeight * (percentage / 100);
};
