import { CleaningAmenity, CleaningPlaces } from '@/types/property'

const cleaningList: CleaningPlaces[] = [
  {
    id: 'living_room',
    name: '거실',
    image: require('@/assets/icons/places/living-room.png')
  },
  {
    id: 'bed_room',
    name: '침실',
    image: require('@/assets/icons/places/bedroom.png')
  },
  {
    id: 'bedding',
    name: '침구 교체',
    image: require('@/assets/icons/places/bedding.png')
  },
  {
    id: 'working_space',
    name: '업무 시설',
    image: require('@/assets/icons/places/working-space.png')
  },
  {
    id: 'kitchen',
    name: '주방',
    image: require('@/assets/icons/places/kitchen.png')
  },
  {
    id: 'dish_washing',
    name: '설거지',
    image: require('@/assets/icons/places/dish-washing.png')
  },
  {
    id: 'refrigerator',
    name: '냉장고',
    image: require('@/assets/icons/places/refrigerator.png')
  },
  {
    id: 'bathroom',
    name: '화장실',
    image: require('@/assets/icons/places/bathroom.png')
  },
  {
    id: 'terrace',
    name: '테라스',
    image: require('@/assets/icons/places/terrace.png')
  },
  {
    id: 'dressing_room',
    name: '드레스룸(옷장)',
    image: require('@/assets/icons/places/dressing-room.png')
  },
  {
    id: 'garbage',
    name: '쓰레기 및 분리수거',
    image: require('@/assets/icons/places/garbage.png')
  },
  {
    id: 'laundry_dry',
    name: '세탁 및 건조',
    image: require('@/assets/icons/amenities/washing-machine.png')
  },
  {
    id: 'amenity',
    name: '어메니티 관리',
    image: require('@/assets/icons/places/amenities.png')
  }
] as const

const amenityList: CleaningAmenity[] = [
  {
    id: 'cleaning_tools',
    name: '청소도구',
    image: require('@/assets/icons/amenities/cleaning-tools.png')
  },
  {
    id: 'air_conditioner',
    name: '에어컨',
    image: require('@/assets/icons/amenities/air-conditioning.png')
  },
  {
    id: 'heating',
    name: '난방',
    image: require('@/assets/icons/amenities/heater.png')
  },
  {
    id: 'elevator',
    name: '엘리베이터',
    image: require('@/assets/icons/amenities/elevator.png')
  },
  {
    id: 'wifi',
    name: '와이파이',
    image: require('@/assets/icons/amenities/wifi.png')
  },
  {
    id: 'parking',
    name: '주차',
    image: require('@/assets/icons/amenities/parking.png')
  },
  {
    id: 'laundry',
    name: '빨래방',
    image: require('@/assets/icons/amenities/washing-machine.png')
  }
] as const

export { cleaningList, amenityList }
