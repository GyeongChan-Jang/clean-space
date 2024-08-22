import Postcode from "@actbase/react-daum-postcode";
import { OnCompleteParams } from "@actbase/react-daum-postcode/lib/types";
import { Ionicons } from "@expo/vector-icons";
import BottomSheet from "@gorhom/bottom-sheet";
import axios from "axios";
import React, { useMemo, useRef } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import useAddPropertyStore from "@/store/useAddProperty";
import { AddPropertyAddress } from "@/types/property";

const SpaceLocation = () => {
  const { spaceLocation, setSpaceLocation } = useAddPropertyStore();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  const handleComplete = async (data: OnCompleteParams) => {
    const fullAddress =
      data.address + (data.buildingName ? ` (${data.buildingName})` : "");

    const newLocation: AddPropertyAddress = {
      ...spaceLocation,
      address: fullAddress,
      roadAddress: data.roadAddress,
      zoneCode: data.zonecode.toString(),
      sido: data.sido,
      sigungu: data.sigungu,
      sigunguCode: data.sigunguCode,
      bcode: data.bcode,
    };

    setSpaceLocation(newLocation);
    bottomSheetRef.current?.close();
    await getCoordinates(fullAddress, newLocation);
  };

  const getCoordinates = async (
    address: string,
    newLocation: AddPropertyAddress,
  ) => {
    try {
      const response = await axios.get(
        `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(address)}`,
        {
          headers: {
            Authorization: `KakaoAK ${process.env.EXPO_PUBLIC_KAKAO_REST_API_KEY}`,
          },
        },
      );

      if (response.data.documents.length > 0) {
        const { x, y } = response.data.documents[0].address;
        const updatedLocation = {
          ...newLocation,
          coordinates: {
            latitude: parseFloat(y),
            longitude: parseFloat(x),
          },
        };
        setSpaceLocation(updatedLocation);
      } else {
        console.log("No results found for the given address");
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6">
        <Text className="text-3xl font-bold mt-6 mb-4">
          숙소 위치는 어디인가요?
        </Text>
        <Text className="text-lg text-gray-600 mb-6">
          정확한 주소를 입력해 주세요. 이 정보는 예약이 확정된 게스트에게만
          공개됩니다.
        </Text>

        <View className="mb-6">
          <Text className="text-xl font-PretendardBold mb-2">주소</Text>
          <TouchableOpacity
            onPress={() => bottomSheetRef.current?.expand()}
            className="flex-row items-center border border-gray-300 rounded-lg p-3"
          >
            <Ionicons name="search-outline" size={24} color="#4b5563" />
            <Text
              className={`ml-3 flex-1 ${spaceLocation.address ? "text-black" : "text-gray-400"} text-lg`}
            >
              {spaceLocation.address || "주소를 검색하세요"}
            </Text>
          </TouchableOpacity>
        </View>

        {spaceLocation.address && (
          <View className="mb-6">
            <Text className="text-xl font-PretendardBold mb-2">상세 주소</Text>
            <TextInput
              value={spaceLocation.addressDetail}
              onChangeText={(text) =>
                setSpaceLocation({ ...spaceLocation, addressDetail: text })
              }
              placeholder="상세 주소를 입력하세요"
              className="border border-gray-300 rounded-lg p-3 text-lg"
            />
          </View>
        )}

        {spaceLocation.address && (
          <View className="mt-2">
            <Text className="text-xl font-PretendardBold mb-2">
              입력한 주소
            </Text>
            <View className="bg-gray-100 rounded-lg p-4">
              <Text className="text-lg">{spaceLocation.address}</Text>
              {spaceLocation.addressDetail && (
                <Text className="text-lg mt-2">
                  {spaceLocation.addressDetail}
                </Text>
              )}
            </View>
          </View>
        )}
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        // onChange={handleSheetChanges}
        enablePanDownToClose={true}
      >
        <Postcode
          style={{ flex: 1 }}
          jsOptions={{ animation: true, useBannerLink: false }}
          onSelected={handleComplete}
          onError={(error) => console.error(error)}
        />
      </BottomSheet>
    </SafeAreaView>
  );
};

export default SpaceLocation;
