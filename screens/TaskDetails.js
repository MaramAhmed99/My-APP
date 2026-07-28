import {
    StyleSheet,
    Text,
    View
} from "react-native";


export default function TaskDetails({route}) {


    const {task} = route.params;


    return (

        <View style={styles.container}>


            <Text style={styles.header}>
                Task Details
            </Text>



            <View style={styles.card}>


                <Text style={styles.label}>
                    Task Name
                </Text>


                <Text style={styles.title}>
                    {task.title}
                </Text>



                <Text style={styles.label}>
                    Description
                </Text>


                <Text style={styles.description}>
                    {task.description}
                </Text>



                <Text style={styles.label}>
                    Status
                </Text>


                <Text style={styles.status}>
                    Pending
                </Text>



                <Text style={styles.label}>
                    Priority
                </Text>


                <Text style={styles.priority}>
                    Medium
                </Text>


            </View>


        </View>

    );


}



const styles = StyleSheet.create({


    container: {

        flex:1,

        padding:20,

        backgroundColor:"#f5f5f5"

    },


    header: {

        fontSize:28,

        fontWeight:"bold",

        marginBottom:20

    },


    card: {

        backgroundColor:"white",

        padding:20,

        borderRadius:12

    },


    label: {

        fontSize:16,

        fontWeight:"bold",

        marginTop:15,

        color:"#555"

    },


    title: {

        fontSize:24,

        fontWeight:"bold",

        marginTop:5

    },


    description: {

        fontSize:18,

        marginTop:5

    },


    status: {

        fontSize:18,

        color:"orange"

    },


    priority: {

        fontSize:18,

        color:"blue"

    }


});