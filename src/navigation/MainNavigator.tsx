import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationOptions
} from "@react-navigation/stack";
import { HomeScreen } from "~/screens/HomeScreen";
import { SplashScreen } from "~/screens/SplashScreen";

export type MainNavigatorParamsType = {
  Home: undefined;
  Splash: undefined;
};

const Stack = createStackNavigator<MainNavigatorParamsType>();

const screenOptions: StackNavigationOptions = {
  presentation: "transparentModal"
};

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={() => ({
          headerShown: false,
          backgroundColor: "blue"
        })}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={screenOptions}
        />
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={screenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
