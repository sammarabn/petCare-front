import { Routes, Route, NativeRouter} from "react-router-native";
import SignIn from './components/SignIn/SignIn';

function App() {
  return (
     <NativeRouter>
       <Routes> 
            <Route>
              <Route exact path='/' element={<SignIn/>}/>
            </Route>
       </Routes>
     </NativeRouter>
  );
}

export default App;