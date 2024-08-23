import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import SelectBadge from "@/components/common/SelectBadge";
import useAddPropertyStore from "@/store/useAddProperty";
import { CleaningPlaces } from "@/types/property";

const places: CleaningPlaces[] = [
  {
    id: "livingRoom",
    name: "거실",
    image: require("@/assets/icons/places/living-room.png"),
  },
  {
    id: "room",
    name: "침실",
    image: require("@/assets/icons/places/bedroom.png"),
  },
  {
    id: "bedding",
    name: "침구 교체",
    image: require("@/assets/icons/places/bedding.png"),
  },
  {
    id: "workingSpace",
    name: "업무 시설",
    image: require("@/assets/icons/places/working-space.png"),
  },
  {
    id: "kitchen",
    name: "주방",
    image: require("@/assets/icons/places/kitchen.png"),
  },
  {
    id: "dishWashing",
    name: "설거지",
    image: require("@/assets/icons/places/dish-washing.png"),
  },
  {
    id: "refrigerator",
    name: "냉장고",
    image: require("@/assets/icons/places/refrigerator.png"),
  },
  {
    id: "bathroom",
    name: "화장실",
    image: require("@/assets/icons/places/bathroom.png"),
  },
  {
    id: "terrace",
    name: "테라스",
    image: require("@/assets/icons/places/terrace.png"),
  },
  {
    id: "dressingRoom",
    name: "드레스룸(옷장)",
    image: require("@/assets/icons/places/dressing-room.png"),
  },
  {
    id: "garbage",
    name: "쓰레기 및 분리수거",
    image: require("@/assets/icons/places/garbage.png"),
  },
  {
    id: "laundry",
    name: "세탁 및 건조",
    image: require("@/assets/icons/amenities/washing-machine.png"),
  },
  {
    id: "amenities",
    name: "어메니티 관리",
    image: require("@/assets/icons/places/amenities.png"),
  },
];

const CleaningPlaces5 = () => {
  const { cleaningPlaces, setCleaningPlaces } = useAddPropertyStore();

  const onSelectPlaces = (place: CleaningPlaces) => {
    if (cleaningPlaces.some((item) => item.id === place.id)) {
      setCleaningPlaces(cleaningPlaces.filter((item) => item.id !== place.id));
      return;
    }
    setCleaningPlaces([...cleaningPlaces, place]);
  };
  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView className="px-6">
        <Text className="text-2xl font-bold mt-6 mb-4">
          청소가 필요한 공간을 선택해주세요.
        </Text>
        <Text className="text-gray-500 mb-6">
          청소 가이드라인 작성 시 이 정보가 사용됩니다.
        </Text>
        <View className="flex-row flex-wrap">
          {places.map((place) => (
            <SelectBadge
              key={place.id}
              id={place.id}
              image={place.image}
              isSelected={cleaningPlaces.some((item) => item.id === place.id)}
              onSelect={() => onSelectPlaces(place)}
              text={place.name}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default CleaningPlaces5;
