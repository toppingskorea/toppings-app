import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
import { MainNavigatorParamsType } from "~/navigation/MainNavigator";

interface Props {
  navigation: StackNavigationProp<MainNavigatorParamsType>;
}

export const HomeScreen = ({ navigation: { replace } }: Props) => {
  return (
    <SafeAreaView edges={["right", "top", "left"]} style={{ flex: 1 }}>
      <WebView
        source={{
          uri: "https://planet.toppings.co.kr"
        }}
      />
    </SafeAreaView>
  );
};
