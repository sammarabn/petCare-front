import React, { useState } from 'react';
import { TextInput, Button, Text, VStack, Box } from "@react-native-material/core";
import { useNavigation } from '@react-navigation/native';
import { authorize, revoke, refresh } from 'react-native-app-auth';

const config = {
    issuer: 'https://accounts.google.com',
    clientId: '1028872597212-8a5a9sbo75rt7dnchrr3o33agkfj3shh.apps.googleusercontent.com',
    redirectUrl: 'http://localhost:3000',
    scopes: ['openid', 'profile', 'email'],
};

const handleLogin = async () => {
    try {
      const result = await authorize(config);
      console.log('Authorization Result:', result);
    } catch (error) {
      console.error('Authorization Error:', error);
    }
}

export default function SignIn({navigation}) {
    //
    const [userInfo, setUserInfo] = useState(null);
    const [request, response, promptAsync] = Google.useAuthRequest({
        androidClientId: '1028872597212-qrd9i1akuo8ihgvmvbs77hpi2a4lif1k.apps.googleusercontent.com'
    });

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
                <Button title="Login with Google" onPress={handleLogin} />
                <Text>Esqueceu sua senha?</Text>
            </VStack>
            <VStack m={50} spacing={10}>
                <Button title="Cadastre-se" spacing={100} color="#2EBC6B"
                onPress={() =>  navigation.navigate('Sign Up')}/>
            </VStack>
        </Box>
  );
} 