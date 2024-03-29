import React, { useState } from 'react';
import { TextInput, Button, Text, VStack, Box } from "@react-native-material/core";
import { useNavigation } from '@react-navigation/native';
import api from '../services/api'

export default function SignIn() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(){
        const body = {
            email: email,
            password: password
        }

        api.post("/login", body).then(response => {
            navigation.navigate('PetList', response  ); // Pass data as a parameter
        }).catch(err => console.log(err))
    }

    // axios post com body senha e login
    // then response,s alva o token
    // navigate 
    return (
        <Box mt={100}>
            <VStack m={40} spacing={10}>
                <Text variant="h2" style={{ margin: 40 }} color="#2EBC6B">PetCare</Text>
            </VStack>
            <VStack m={50} spacing={10}>
                <TextInput label="Email" variant="standard" color="#2EBC6B" onChangeText={text => setEmail(text)} value={email}/>
                <TextInput secureTextEntry={true} label="Senha" variant="standard" color="#2EBC6B"  onChangeText={text => setPassword(text)} value={password}/>
                <Button title="Login" color="#2EBC6B" onPress={handleLogin}/>
                <Text>Esqueceu sua senha?</Text>
            </VStack>
            <VStack m={50} spacing={10}>
                <Button title="Cadastre-se" spacing={100} color="#2EBC6B"
                onPress={() =>  navigation.navigate('Sign Up')}/>
            </VStack>
        </Box>
  );
} 