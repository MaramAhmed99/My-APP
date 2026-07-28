import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator";

import { useFonts } from "expo-font";

import {
  Poppins_400Regular,
  Poppins_700Bold
} from "@expo-google-fonts/poppins";

import {
  ActivityIndicator,
  View
} from "react-native";

import TaskProvider from "./context/TaskContext";


export default function App() {


  const [fontsLoaded] = useFonts({

    Poppins_400Regular,

    Poppins_700Bold,

  });



  if (!fontsLoaded) {

    return (

      <View

        style={{

          flex: 1,

          justifyContent: "center",

          alignItems: "center",

        }}

      >

        <ActivityIndicator

          size="large"

          color="#4CAF50"

        />

      </View>

    );

  }



  return (

    <TaskProvider>

      <NavigationContainer>

        <StackNavigator />

      </NavigationContainer>

    </TaskProvider>

  );

}