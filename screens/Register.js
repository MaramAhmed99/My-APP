import { useState } from "react";

import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import {
  createUserWithEmailAndPassword
} from "firebase/auth";

import {
  getAuth
} from "firebase/auth";

import app from "../firebase/config";


const auth = getAuth(app);



export default function Register({ navigation }) {


  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");



  async function register() {


    if(name === "" || email === "" || password === ""){


      Alert.alert(
        "Error",
        "Please fill all fields"
      );


      return;

    }



    try {


      await createUserWithEmailAndPassword(

        auth,

        email,

        password

      );



      Alert.alert(
        "Success",
        "Account created successfully"
      );



      navigation.navigate("Main");



    } catch(error) {


      Alert.alert(
        "Register Error",
        error.message
      );


    }


  }





  return (


    <View style={styles.container}>


      <Text style={styles.title}>
        Create Account
      </Text>




      <TextInput

        placeholder="Name"

        style={styles.input}

        value={name}

        onChangeText={setName}

      />




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

        onPress={register}

      >


        <Text style={styles.btnText}>
          Register
        </Text>


      </TouchableOpacity>





      <TouchableOpacity

        onPress={() => navigation.navigate("Login")}

      >

        <Text style={styles.loginText}>
          Already have an account? Login
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



  title: {

    fontSize: 30,

    fontWeight: "bold",

    textAlign: "center",
    fontFamily:"Poppins_700Bold",


    marginBottom: 30

  },



  input: {

    borderWidth: 1,

    borderColor: "#ccc",

    padding: 12,

    borderRadius: 8,

    marginBottom: 15

  },



  button: {

    backgroundColor: "#4CAF50",

    padding: 15,

    borderRadius: 8

  },



  btnText: {

    color: "white",

    textAlign: "center",

    fontSize: 18

  },



  loginText: {

    textAlign: "center",

    marginTop: 20,

    color: "#4CAF50",

    fontSize: 16

  }


});