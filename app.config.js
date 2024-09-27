export default () => {
  return {
    expo: {
      name: 'clean-space',
      slug: 'clean-space',
      version: '1.0.0',
      orientation: 'portrait',
      icon: './assets/icons/icon.png',
      scheme: 'clean-space',
      userInterfaceStyle: 'automatic',
      splash: {
        image: './assets/icons/splash-icon.gif',
        resizeMode: 'contain',
        backgroundColor: '#ffffff'
      },
      ios: {
        supportsTablet: true,
        bundleIdentifier: 'com.cleanspace'
      },
      android: {
        adaptiveIcon: {
          foregroundImage: './assets/icons/adaptive-icon.png',
          backgroundColor: '#ffffff'
        },
        package: 'com.cleanspace'
      },
      web: {
        bundler: 'metro',
        output: 'static',
        favicon: './assets/icons/favicon.png'
      },
      plugins: [
        'expo-router',
        [
          'expo-build-properties',
          {
            android: {
              extraMavenRepos: ['https://devrepo.kakao.com/nexus/content/groups/public/'],
              newArchEnabled: true
            },
            ios: {
              newArchEnabled: true
            }
          }
        ],
        [
          '@react-native-kakao/core',
          {
            nativeAppKey: process.env.EXPO_PUBLIC_KAKAO_NATIVE_APP_KEY,
            android: {
              authCodeHandlerActivity: true
            },
            ios: {
              handleKakaoOpenUrl: true
            }
          }
        ],
        [
          'expo-image-picker',
          {
            photosPermission: 'The app accesses your photos to let you share them with your friends.'
          }
        ]
      ],
      experiments: {
        typedRoutes: true
      }
    }
  }
}
