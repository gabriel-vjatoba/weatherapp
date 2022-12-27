import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import SecondPage from "../screens/SecondPage";


const Stack = createNativeStackNavigator()

export default function Routes(){
    return(
        <Stack.Navigator>
            
            <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}
            />    

            <Stack.Screen
                name="SecondPage"
                component={SecondPage}
                options={{headerShown: false}}
            />
            
        </Stack.Navigator>
    );
}