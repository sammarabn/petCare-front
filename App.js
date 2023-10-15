import { Routes, Route } from "react-router-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignIn from './screens/SignIn';
import PetList from './screens/PetList';
import SignUp from './screens/SignUp';
import PetView from './screens/PetView';

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={SignIn} options={{headerShown: false}}/>
        {/*<Stack.Screen name="Sign Up" component={SignUp}/>
        <Stack.Screen name="PetList" component={PetList} options={{headerShown: false}}/>
  <Stack.Screen name="PetView" component={PetView} options={{headerShown: false}}/>*/}
      </Stack.Navigator>
    </NavigationContainer>
)}

export default App;