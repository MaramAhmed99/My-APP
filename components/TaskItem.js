
import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    View
} from "react-native";


const TaskItem = ({ task, onDelete, onPress }) => {


  return (


    <Pressable

      onPress={onPress}

      style={styles.container}

    >



      <Image

        style={styles.img}

        source={{
          uri:
          "https://cdn-icons-png.flaticon.com/512/3208/3208729.png"
        }}

      />




      <View style={styles.info}>


        <Text style={styles.title}>

          {task.title}

        </Text>



        <Text style={styles.description}>

          {task.description}

        </Text>


      </View>




      <Pressable

        style={styles.deleteButton}

        onPress={() => onDelete(task.key)}

      >

        <Text style={styles.deleteText}>
          Delete
        </Text>


      </Pressable>




    </Pressable>


  );

};



const styles = StyleSheet.create({


  container: {

    backgroundColor: "white",

    padding: 15,

    borderRadius: 12,

    marginBottom: 15,

    flexDirection: "row",

    alignItems: "center",

    elevation: 3

  },


  img: {

    width: 50,

    height: 50,

    borderRadius: 25,

    marginRight: 12

  },


  info: {

    flex: 1

  },


  title: {

    fontSize: 18,

    fontWeight: "bold",

    marginBottom: 5

  },


  description: {

    color: "#666",

    fontSize: 14

  },


  deleteButton: {

    backgroundColor: "#e53935",

    paddingVertical: 8,

    paddingHorizontal: 12,

    borderRadius: 8

  },


  deleteText: {

    color: "white",

    fontWeight: "bold"

  }


});


export default TaskItem;