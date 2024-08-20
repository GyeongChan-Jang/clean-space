import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, {
  createContext,
  PropsWithChildren,
  ReactNode,
  useContext,
} from "react";
import {
  GestureResponderEvent,
  Modal,
  ModalProps,
  Pressable,
  PressableProps,
  SafeAreaView,
  Text,
  View,
} from "react-native";

interface OptionContextValue {
  onClickOutSide?: (event: GestureResponderEvent) => void;
}

const OptionContext = createContext<OptionContextValue | undefined>(undefined);

interface OptionMainProps extends ModalProps {
  children: ReactNode;
  isVisible: boolean;
  hideOption: () => void;
  animationType?: ModalProps["animationType"];
}

const OptionMain = ({
  children,
  isVisible,
  hideOption,
  animationType = "slide",
  ...props
}: OptionMainProps) => {
  const onClickOutSide = (event: GestureResponderEvent) => {
    if (event.target === event.currentTarget) hideOption();
  };
  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType={animationType}
      onRequestClose={hideOption}
      {...props}
    >
      <OptionContext.Provider value={{ onClickOutSide }}>
        {children}
      </OptionContext.Provider>
    </Modal>
  );
};

const Background = ({ children }: PropsWithChildren) => {
  const optionContext = useContext(OptionContext);
  return (
    <SafeAreaView
      onTouchEnd={optionContext?.onClickOutSide}
      className="flex-1 justify-end bg-black/50"
    >
      {children}
    </SafeAreaView>
  );
};

const Container = ({ children }: PropsWithChildren) => {
  return (
    <View className="rounded-2xl mx-2.5 mb-2.5 bg-gray-100 overflow-hidden">
      {children}
    </View>
  );
};

interface ButtonProps extends PressableProps {
  children: ReactNode;
  isDanger?: boolean;
  isChecked?: boolean;
}

const Button = ({
  children,
  isDanger,
  isChecked = false,
  ...props
}: ButtonProps) => {
  return (
    <Pressable
      className="flex-row items-center justify-center h-[50px] gap-1.5 active:bg-gray-200"
      {...props}
    >
      <Text
        className={`text-base font-medium ${isDanger ? "text-red-500" : "text-blue-500"}`}
      >
        {children}
      </Text>
      {isChecked && <Ionicons name="checkmark" size={20} color="#3B82F6" />}
    </Pressable>
  );
};

const Title = ({ children }: PropsWithChildren) => {
  return (
    <View className="items-center p-4">
      <Text className="text-base font-medium text-black">{children}</Text>
    </View>
  );
};

const Divider = () => {
  return <View className="border-b border-gray-200" />;
};

interface CheckBoxProps extends PressableProps {
  children: ReactNode;
  icon?: ReactNode;
  isChecked?: boolean;
}

function CheckBox({
  children,
  icon,
  isChecked = false,
  ...props
}: CheckBoxProps) {
  return (
    <Pressable
      className="flex-row items-center py-2.5 px-8 gap-2.5 active:bg-gray-200"
      {...props}
    >
      <Ionicons
        name={`checkmark-circle${isChecked ? "" : "-outline"}`}
        size={22}
        color="#3B82F6"
      />
      {icon}
      <Text className="text-sm text-black">{children}</Text>
    </Pressable>
  );
}

interface FilterProps extends PressableProps {
  children: ReactNode;
  isSelected?: boolean;
}

function Filter({ children, isSelected, ...props }: FilterProps) {
  return (
    <Pressable className="flex-row items-center p-2.5 gap-1.5" {...props}>
      <Text
        className={`text-sm font-medium ${isSelected ? "text-blue-500" : "text-gray-300"}`}
      >
        {children}
      </Text>
      <MaterialIcons
        name="keyboard-arrow-down"
        size={22}
        color={isSelected ? "#3B82F6" : "#D1D5DB"}
      />
    </Pressable>
  );
}

export const CompoundOption = Object.assign(OptionMain, {
  Container,
  Background,
  Button,
  Title,
  Divider,
  CheckBox,
  Filter,
});
