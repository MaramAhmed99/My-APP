import { useContext, useState } from "react";

import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

import { TaskContext } from "../context/TaskContext";


export default function AddTask({ navigation }) {


  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");



  const { addTask } = useContext(TaskContext);




  function handleAddTask() {


    if (title === "" || description === "") {


      Alert.alert(
        "Error",
        "Please enter task title and description"
      );


      return;

    }



    addTask(
      title,
      description
    );



    setTitle("");

    setDescription("");



    navigation.navigate("Main");


  }



  return (


    <View style={styles.container}>


      <Text style={styles.title}>
        Add New Task
      </Text>




      <TextInput

        placeholder="Task Title"

        style={styles.input}

        value={title}

        onChangeText={setTitle}

      />




      <TextInput

        placeholder="Task Description"

        style={styles.input}

        value={description}

        onChangeText={setDescription}

      />





      <Pressable

        style={styles.button}

        onPress={handleAddTask}

      >


        <Text style={styles.buttonText}>
          Add Task
        </Text>


      </Pressable>



    </View>

  );

}




const styles = StyleSheet.create({


  container: {

    flex: 1,

    padding: 20,

    justifyContent: "center"

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



  buttonText: {

    color: "white",

    textAlign: "center",

    fontSize: 18,

    fontWeight: "bold"

  }


});