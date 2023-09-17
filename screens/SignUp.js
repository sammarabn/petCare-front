import React, { useState } from 'react';
import { TextInput, Button, Text, VStack, Box } from "@react-native-material/core";
import DatePicker from 'react-native-datepicker';

export default function SignUp({navigation, route}) {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return (
        <Box>
            <VStack m={50} spacing={10}>
                <TextInput label="Nome" variant="standard" color="#2EBC6B"/>
                <TextInput label="Sobrenome" variant="standard" color="#2EBC6B"/>
                <TextInput label="Email" variant="standard" color="#2EBC6B"/>
                <DatePicker date={date} onDateChange={setDate} />
                <TextInput label="Peso" variant="standard" color="#2EBC6B"/>

                <TextInput secureTextEntry={true} label="Senha" variant="standard" color="#2EBC6B"/>
                <TextInput secureTextEntry={true} label="Confirmar Senha" variant="standard" color="#2EBC6B"/>
            </VStack>
        </Box>
  );
} 