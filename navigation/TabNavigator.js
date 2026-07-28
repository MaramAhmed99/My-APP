import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {

  return (

    <Tab.Navigator

      screenOptions={({ route }) => ({

        headerShown: false,

        tabBarIcon: ({ color, size }) => {

          let iconName;

          if (route.name === "Home")
            iconName = "home";

          else if (route.name === "Profile")
            iconName = "person";

          else
            iconName = "settings";

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );

        }

      })}

    >

      <Tab.Screen
        name="Home"
        component={Home}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
      />

    </Tab.Navigator>

  );

}