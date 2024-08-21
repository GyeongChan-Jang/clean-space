import FontAwesome from "@expo/vector-icons/FontAwesome";
import React, { createContext, ReactNode, useContext } from "react";
import { Text, TouchableOpacity, View, ViewProps } from "react-native";

interface ListContextValue {
  onItemPress?: (itemId: string) => void;
}

const ListContext = createContext<ListContextValue | undefined>(undefined);

interface ListMainProps extends ViewProps {
  children: ReactNode;
  onItemPress?: (itemId: string) => void;
}

const ListMain = ({ children, onItemPress, ...props }: ListMainProps) => {
  return (
    <ListContext.Provider value={{ onItemPress }}>
      <View {...props}>{children}</View>
    </ListContext.Provider>
  );
};

interface ItemProps {
  id: string;
  icon: ReactNode;
  title: string;
  onPress?: () => void;
}

const Item = ({ id, icon, title, onPress }: ItemProps) => {
  const listContext = useContext(ListContext);

  const handlePress = () => {
    onPress?.();
    listContext?.onItemPress?.(id);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className="flex-row items-center justify-between py-4"
    >
      <View className="flex-row items-center gap-3">
        {icon}
        <Text className="text-base text-gray-900">{title}</Text>
      </View>
      <FontAwesome name="angle-right" size={24} color="#9CA3AF" />
    </TouchableOpacity>
  );
};

const Divider = () => {
  return <View className="h-px bg-gray-200" />;
};

export const CompoundList = Object.assign(ListMain, {
  Item,
  Divider,
});
