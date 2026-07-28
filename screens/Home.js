import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";

import { useContext } from "react";

import TaskItem from "../components/TaskItem";

import { TaskContext } from "../context/TaskContext";


export default function Home({ navigation }) {


  const {

    tasks,

    deleteTask

  } = useContext(TaskContext);



  return (

    <View style={styles.container}>


      <Text style={styles.title}>
        My Tasks
      </Text>



      <Pressable

        style={styles.addButton}

        onPress={() => navigation.navigate("AddTask")}

      >

        <Text style={styles.addText}>
          + Add Task
        </Text>


      </Pressable>




      <FlatList

        data={tasks}

        keyExtractor={(item) => item.key}


        renderItem={({ item }) => (


          <TaskItem

            task={item}


            onDelete={() => deleteTask(item.key)}


            onPress={() =>

              navigation.navigate(
                "TaskDetails",
                {
                  task: item
                }
              )

            }


          />


        )}


      />


    </View>

  );

}




const styles = StyleSheet.create({


  container: {

    flex: 1,

    padding: 20,

    backgroundColor: "#78d091"

  },


  title: {

    fontSize: 30,

    fontWeight: "bold",

    marginBottom: 20

  },


  addButton: {

    backgroundColor: "#41a745",

    padding: 12,

    borderRadius: 8,

    marginBottom: 20

  },


  addText: {

    color: "white",

    fontSize: 18,
    fontFamily:"Poppins_700Bold",


    textAlign: "center"

  }


});