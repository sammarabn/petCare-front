import React, { useState } from 'react';
import { TextInput, Button, Text, VStack, Box } from "@react-native-material/core";
import { useNavigation } from '@react-navigation/native';

export default function SignIn({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Box mt={100}>
            <VStack m={40} spacing={10}>
                <Text variant="h2" style={{ margin: 40 }} color="#2EBC6B">PetCare</Text>
            </VStack>
            <VStack m={50} spacing={10}>
                <TextInput label="Email" variant="standard" color="#2EBC6B"/>
                <TextInput secureTextEntry={true} label="Senha" variant="standard" color="#2EBC6B"/>
                <Button title="Login" color="#2EBC6B"/>
                <Text>Esqueceu sua senha?</Text>
            </VStack>
            <VStack m={50} spacing={10}>
                <Button title="Cadastre-se" spacing={100} color="#2EBC6B"
                onPress={() =>  navigation.navigate('Sign Up')}/>
            </VStack>
        </Box>
  );
} 