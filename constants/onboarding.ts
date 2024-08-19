import onboarding1 from "@/assets/images/onboarding1.jpg";
import onboarding2 from "@/assets/images/onboarding2.jpg";
import onboarding3 from "@/assets/images/onboarding3.jpg";

const images = {
  onboarding1,
  onboarding2,
  onboarding3,
};
const onboarding = [
  {
    id: 1,
    title: "숙소 청소, 더 쉽고 빠르게",
    description:
      "에어비엔비 호스트와 클리너를 연결해 드립니다. 깨끗한 숙소 관리의 시작, 여기에서 시작하세요.",
    image: images.onboarding1,
  },
  {
    id: 2,
    title: "신뢰할 수 있는 클리너 매칭",
    description:
      "검증된 클리너들과 연결해 드립니다. 높은 청소 품질과 안전한 서비스를 경험하세요.",
    image: images.onboarding2,
  },
  {
    id: 3,
    title: "유연한 예약, 편리한 관리",
    description:
      "원하는 시간에 청소 예약, 실시간 진행 상황 확인, 리뷰 관리까지. 모든 것이 앱 하나로 가능합니다.",
    image: images.onboarding3,
  },
];

export { onboarding, images };
