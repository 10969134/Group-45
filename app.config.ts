import { ExpoConfig } from "expo/config";

// In SDK 46 and lower, use the following import instead:
// import { ExpoConfig } from '@expo/config-types';

const config: ExpoConfig = {
  name: "QuizApp",
  slug: "QuizApp",
  extra: {
    eas: {
      projectId: "655c0523-941a-4859-99c8-2a54e6c3c400",
    },
  },
  owner: "manueldev04",
  updates: {
    url: "https://u.expo.dev/655c0523-941a-4859-99c8-2a54e6c3c400",
  },
  runtimeVersion: {
    policy: "sdkVersion",
  },
};

export default config;
