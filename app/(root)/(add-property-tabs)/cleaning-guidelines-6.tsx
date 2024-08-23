import * as ImagePicker from "expo-image-picker";
import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { propertyTypes } from "@/app/(root)/(add-property-tabs)/space-type-1";
import useAddPropertyStore from "@/store/useAddProperty";

interface InitialCleaningGuidelinesProps {
  pickImages: () => void;
}

interface ImageGridProps {
  guidelines: { image: ImagePicker.ImageInfo; description: string }[];
  pickImages: () => void;
  updateDescription: (index: number, description: string) => void;
}

const InitialCleaningGuidelines = ({
  pickImages,
}: InitialCleaningGuidelinesProps) => {
  const { spaceType } = useAddPropertyStore();
  return (
    <View>
      <Text className="text-2xl font-bold mt-6 mb-4">
        {propertyTypes.find((type) => type.id === spaceType)?.name} 청소
        가이드라인 추가하기
      </Text>
      <Text className="text-gray-500 mb-2">
        청소 가이드라인은 사진과 설명을 통해 클리너에게 보여집니다.
      </Text>
      <Text className="text-gray-500 mb-2">
        가이드라인은 최소 5장 이상의 사진과 설명을 입력해야합니다.
      </Text>
      <Text className="text-gray-500 mb-6">
        첫번째 사진이 숙소의 대표 사진으로 등록됩니다.
      </Text>

      <TouchableOpacity className="mb-4" onPress={pickImages}>
        <View className="flex-row px-4 justify-start items-center py-4 rounded-xl border border-secondary-400">
          <Image
            className="w-5 h-5 mr-4"
            source={require("@/assets/icons/common/plus.png")}
          />
          <Text className="text-lg font-Pretendard">사진 추가하기</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity className="mb-4">
        <View className="flex-row px-4 justify-start items-center py-4 rounded-xl border border-secondary-400">
          <Image
            className="w-5 h-5 mr-4"
            source={require("@/assets/icons/common/plus.png")}
          />
          <Text className="text-lg font-Pretendard">사진 새로 찍기</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const ImageGrid = ({
  guidelines,
  pickImages,
  updateDescription,
}: ImageGridProps) => {
  const screenWidth = Dimensions.get("window").width;
  const imageWidth = screenWidth - 48; // 48 is total horizontal padding
  const imageHeight = (imageWidth / 16) * 9; // 16:9 ratio

  return (
    <View className="mt-4">
      {/* Description and Add Button */}
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-base font-semibold">
          5장 이상의 사진을 선택하세요.
        </Text>
        <TouchableOpacity
          onPress={pickImages}
          className="flex-row items-center"
        >
          <Image
            className="w-5 h-5 mr-2"
            source={require("@/assets/icons/common/plus.png")}
          />
          <Text className="text-base text-primary-500">추가</Text>
        </TouchableOpacity>
      </View>

      {/* Images and Descriptions */}
      {guidelines.map((guideline, index) => (
        <View key={guideline.image.uri} className="mb-6">
          <View className="relative">
            <Image
              source={{ uri: guideline.image.uri }}
              style={{
                width: imageWidth,
                height: imageHeight,
                borderRadius: 8,
              }}
              resizeMode="cover"
            />
            {index === 0 && (
              <View className="absolute top-2 left-2 bg-white rounded-full px-2 py-1">
                <Text className="text-xs font-bold">커버 사진</Text>
              </View>
            )}
          </View>
          <TextInput
            value={guideline.description}
            onChangeText={(text) => updateDescription(index, text)}
            placeholder={`${index + 1}. 사진에 대한 설명을 입력하세요.`}
            className="border border-gray-300 rounded-md p-2 mt-2"
            multiline
          />
        </View>
      ))}

      {/* Add Image Button */}
      <TouchableOpacity onPress={pickImages} className="mb-6">
        <View
          className="border-2 border-dashed border-gray-300 rounded-lg justify-center items-center"
          style={{ width: imageWidth, height: imageHeight }}
        >
          <Image
            className="w-8 h-8 mb-2"
            source={require("@/assets/icons/common/plus.png")}
          />
          <Text className="text-sm text-gray-500">추가하기</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const CleaningGuidelines = () => {
  const {
    spaceType,
    cleaningGuidelines,
    setCleaningGuidelines,
    updateCleaningGuidelineDescription,
  } = useAddPropertyStore();

  const pickImages = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      aspect: [3, 4],
      quality: 1,
    });

    if (!result.canceled) {
      const newGuidelines = result.assets.map((asset) => ({
        image: asset,
        description: "",
      }));
      setCleaningGuidelines([...cleaningGuidelines, ...newGuidelines]);
    }
  };

  const updateDescription = (index: number, description: string) => {
    updateCleaningGuidelineDescription(index, description);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-6">
        {cleaningGuidelines.length === 0 ? (
          <InitialCleaningGuidelines pickImages={pickImages} />
        ) : (
          <ImageGrid
            guidelines={cleaningGuidelines}
            pickImages={pickImages}
            updateDescription={updateDescription}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CleaningGuidelines;
