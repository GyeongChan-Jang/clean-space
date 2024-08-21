import { Entypo } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";

interface FloatingButtonProps {
  scrollY: Animated.Value;
  text: string;
  icon: React.ComponentProps<typeof Entypo>["name"];
  onPress?: () => void;
}

const FloatingButton = ({
  scrollY,
  text,
  icon,
  onPress,
}: FloatingButtonProps) => {
  const [showText, setShowText] = useState(true);
  const buttonWidth = useRef(new Animated.Value(120)).current;

  useEffect(() => {
    const listener = scrollY.addListener(({ value }: { value: number }) => {
      if (value > 20) {
        Animated.spring(buttonWidth, {
          toValue: 60,
          useNativeDriver: false,
          tension: 50,
          friction: 7,
        }).start(() => setShowText(false));
      } else {
        setShowText(true);
        Animated.spring(buttonWidth, {
          toValue: 120,
          useNativeDriver: false,
          tension: 50,
          friction: 7,
        }).start();
      }
    });

    return () => {
      scrollY.removeListener(listener);
    };
  }, [scrollY]);

  return (
    <Animated.View
      className="absolute bottom-5 right-5 bg-primary-500 rounded-full h-[60px] justify-center items-center shadow-lg"
      style={{ width: buttonWidth }}
    >
      <TouchableOpacity
        onPress={onPress}
        className="flex-row items-center justify-center px-2.5"
      >
        <Entypo name={icon} size={showText ? 36 : 40} color="white" />
        {showText && (
          <View className="w-[60px] ml-0.5">
            <Text className="text-white text-base font-PretendardBold">
              {text}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};

export default FloatingButton;
