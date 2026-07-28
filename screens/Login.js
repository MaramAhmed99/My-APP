import { useState } from "react";

import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";


import {
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth";


import app from "../firebase/config";


const auth = getAuth(app);



export default function Login({ navigation }) {


  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");



  async function login() {


    if(email === "" || password === ""){


      Alert.alert(
        "Error",
        "Please enter email and password"
      );


      return;

    }



    try {


      await signInWithEmailAndPassword(

        auth,

        email,

        password

      );


      navigation.navigate("Main");



    } catch(error) {


      Alert.alert(

        "Login Error",

        "Invalid email or password"

      );


    }


  }



  return (

    <View style={styles.container}>


      <Image

        source={require("../assets/images/logo.png")}

        style={styles.logo}

      />



      <Text style={styles.title}>
        Login
      </Text>





      <TextInput

        placeholder="Email"

        style={styles.input}

        value={email}

        onChangeText={setEmail}

        keyboardType="email-address"

      />





      <TextInput

        placeholder="Password"

        style={styles.input}

        value={password}

        onChangeText={setPassword}

        secureTextEntry

      />





      <TouchableOpacity

        style={styles.button}

        onPress={login}

      >


        <Text style={styles.btnText}>
          Login
        </Text>


      </TouchableOpacity>





      <TouchableOpacity

        onPress={() => navigation.navigate("Register")}

      >


        <Text style={styles.registerText}>

          Don't have an account? Register

        </Text>


      </TouchableOpacity>



    </View>

  );

}




const styles = StyleSheet.create({


  container: {

    flex: 1,

    justifyContent: "center",

    padding: 20

  },



  logo: {

    width: 120,

    height: 120,

    alignSelf: "center",

    marginBottom: 20

  },



  title: {

    fontSize: 30,

    fontFamily:"Poppins_700Bold",

    textAlign:"center",

    marginBottom:30

  },



  input: {

    borderWidth:1,

    borderColor:"#ccc",

    padding:12,

    borderRadius:8,

    marginBottom:15,

    fontFamily:"Poppins_400Regular"

  },



  button: {

    backgroundColor:"#4CAF50",

    padding:15,

    borderRadius:8

  },



  btnText: {

    color:"white",

    textAlign:"center",

    fontSize:18,

    fontFamily:"Poppins_700Bold"

  },



  registerText: {

    textAlign:"center",

    marginTop:20,

    color:"#4CAF50",

    fontSize:16,

    fontFamily:"Poppins_400Regular"

  }


});