import React, { useState } from 'react';
import { TextInput, Button, Text } from "@react-native-material/core";
import { View } from 'react-native';


const styles = require("./SignStyle");

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style ={styles.container}>
            <TextInput label="Email" variant="standard" color="#2EBC6B"/>
            <TextInput label="Senha" variant="standard" color="#2EBC6B"/>
            <Button title="Login" color="#2EBC6B"/>
            <Text>Esqueceu sua senha?</Text>
            <Button title="Cadastre-se" color="#2EBC6B"/>
        </View>
  );
} 