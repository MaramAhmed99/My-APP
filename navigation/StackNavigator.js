import {
  createNativeStackNavigator
} from "@react-navigation/native-stack";


import AddTask from "../screens/AddTask";
import Login from "../screens/Login";
import Register from "../screens/Register";
import TaskDetails from "../screens/TaskDetails";
import DrawerNavigator from "./DrawerNavigator";


const Stack = createNativeStackNavigator();



export default function StackNavigator(){


return(

<Stack.Navigator>


<Stack.Screen

name="Login"

component={Login}

options={{

headerShown:false

}}

/>



<Stack.Screen

name="Register"

component={Register}

options={{

headerShown:false

}}

/>




<Stack.Screen

name="Main"

component={DrawerNavigator}

/>




<Stack.Screen

name="TaskDetails"

component={TaskDetails}

options={{

title:"Task Details"

}}

/>




<Stack.Screen

name="AddTask"

component={AddTask}

options={{

title:"Add Task"

}}

/>



</Stack.Navigator>


);


}