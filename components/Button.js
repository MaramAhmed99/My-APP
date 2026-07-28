import {
    StyleSheet,
    Text,
    TouchableOpacity
} from "react-native";


export default function Button({title,onPress}){


return(

<TouchableOpacity
style={styles.button}
onPress={onPress}
>

<Text style={styles.text}>
{title}
</Text>

</TouchableOpacity>

);

}



const styles=StyleSheet.create({

button:{
backgroundColor:"#4CAF50",
padding:15,
borderRadius:8,
alignItems:"center",
marginTop:10
},


text:{
color:"white",
fontSize:18,
fontWeight:"bold"
}

});