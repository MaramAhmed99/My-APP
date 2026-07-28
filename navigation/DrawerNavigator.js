import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem
} from "@react-navigation/drawer";


import {
  StyleSheet,
  Text,
  View
} from "react-native";


import TabNavigator from "./TabNavigator";


import {
  Ionicons
} from "@expo/vector-icons";


const Drawer = createDrawerNavigator();



// تصميم محتوى القائمة
function CustomDrawerContent(props){


  return(


    <DrawerContentScrollView {...props}>


      <View style={styles.header}>


        <Ionicons

          name="checkmark-circle"

          size={60}

          color="#4CAF50"

        />


        <Text style={styles.appName}>
          Task Manager
        </Text>


        <Text style={styles.subtitle}>
          Organize your daily tasks
        </Text>


      </View>




      <DrawerItem

        label="Home"

        icon={({color,size})=>(

          <Ionicons

            name="home"

            color={color}

            size={size}

          />

        )}

        onPress={()=>{

          props.navigation.navigate(
            "Task Manager",
            {
              screen:"Home"
            }
          );

        }}

      />





      <DrawerItem

        label="Profile"

        icon={({color,size})=>(

          <Ionicons

            name="person"

            color={color}

            size={size}

          />

        )}

        onPress={()=>{

          props.navigation.navigate(
            "Task Manager",
            {
              screen:"Profile"
            }
          );

        }}

      />






      <DrawerItem

        label="Settings"

        icon={({color,size})=>(

          <Ionicons

            name="settings"

            color={color}

            size={size}

          />

        )}

        onPress={()=>{

          props.navigation.navigate(
            "Task Manager",
            {
              screen:"Settings"
            }
          );

        }}

      />






      <DrawerItem

        label="About App"

        icon={({color,size})=>(

          <Ionicons

            name="information-circle"

            color={color}

            size={size}

          />

        )}

        onPress={()=>{}}

      />





      <DrawerItem

        label="Logout"

        icon={({color,size})=>(

          <Ionicons

            name="log-out"

            color="red"

            size={size}

          />

        )}

        onPress={()=>{

          props.navigation.reset({

            index:0,

            routes:[

              {
                name:"Login"
              }

            ]

          });

        }}

      />



    </DrawerContentScrollView>


  );

}




export default function DrawerNavigator(){


return(


<Drawer.Navigator


drawerContent={(props)=>(

<CustomDrawerContent {...props}/>

)}


>


<Drawer.Screen

name="Task Manager"

component={TabNavigator}

options={{

title:"Task Manager"

}}

/>


</Drawer.Navigator>


);


}





const styles = StyleSheet.create({


header:{


padding:20,

alignItems:"center",

borderBottomWidth:1,

borderBottomColor:"#ddd",

marginBottom:10


},


appName:{


fontSize:22,

fontWeight:"bold",

marginTop:10


},


subtitle:{


color:"#666",

marginTop:5


}


});