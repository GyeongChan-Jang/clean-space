export default () => {
  return {
    expo: {
      name: "clean-space",
      slug: "clean-space",
      version: "1.0.0",
      orientation: "portrait",
      icon: "./assets/images/icon.png",
      scheme: "clean-space",
      userInterfaceStyle: "automatic",
      splash: {
        image: "./assets/images/splash.png",
        resizeMode: "contain",
        backgroundColor: "#ffffff",
      },
      ios: {
        supportsTablet: true,
        bundleIdentifier: "com.cleanspace",
      },
      android: {
        adaptiveIcon: {
          foregroundImage: "./assets/images/adaptive-icon.png",
          backgroundColor: "#ffffff",
        },
        package: "com.cleanspace",
      },
      web: {
        bundler: "metro",
        output: "static",
        favicon: "./assets/images/favicon.png",
      },
      plugins: [
        "expo-router",
        [
          "expo-build-properties",
          {
            android: {
              extraMavenRepos: [
                "https://devrepo.kakao.com/nexus/content/groups/public/",
              ],
              newArchEnabled: true,
            },
            ios: {
              newArchEnabled: true,
            },
          },
        ],
        [
          "@react-native-kakao/core",
          {
            nativeAppKey: process.env.EXPO_PUBLIC_KAKAO_NATIVE_APP_KEY,
            android: {
              authCodeHandlerActivity: true,
            },
            ios: {
              handleKakaoOpenUrl: true,
            },
          },
        ],
      ],
      experiments: {
        typedRoutes: true,
      },
    },
  };
};
