import { createStackNavigator } from "react-navigation";
import { Splash, Home } from "screens";

const AppNavigator = createStackNavigator(
  {
    Splash: { screen: Splash },
    Home: { screen: Home }
  },
  {
    headerMode: "none"
  }
);
export default AppNavigator;
