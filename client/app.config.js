import 'dotenv/config';

export default {
  name: 'Rate Repositories',
  slug: 'rate-repository-app',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff'
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF'
    },
    package: 'com.nusretwazowski.rate-repository-app'
  },
  web: {
    favicon: './assets/favicon.png'
  },
  extra: {
    env: process.env.ENV,
    apollo: process.env.APOLLO_URI
  },
  expo: {
    extra: {
      eas: {
        projectId: 'e6e14f7a-2cab-433a-98ab-73c898567838'
      }
    }
  }
};
