import { StackNavigationProp } from "@react-navigation/stack";
import LottieView from "lottie-react-native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { MainNavigatorParamsType } from "~/navigation/MainNavigator";
import splash from "~/assets/json/splash.json";

interface SplashScreenProp {
  navigation: StackNavigationProp<MainNavigatorParamsType>;
}

export const SplashScreen = ({ navigation: { replace } }: SplashScreenProp) => {
  const onSplashFinish = () => {
    replace("Home");
  };

  return (
    <View style={styles.root}>
      <LottieView
        source={splash}
        autoPlay
        loop={false}
        duration={2000}
        style={{ height: 374, backgroundColor: "red" }}
        onAnimationFinish={onSplashFinish}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 34
  }
});
