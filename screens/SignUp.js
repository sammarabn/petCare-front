import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { TextInput, Button, Text, VStack, Box, Divider } from "@react-native-material/core";
import DateTimePicker  from '@react-native-community/datetimepicker';

export default function SignUp({navigation, route}) {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    return (
        <Box>
            <VStack m={50} spacing={10}>
                <TextInput label="Nome" variant="standard" color="#2EBC6B"/>
                <TextInput label="Sobrenome" variant="standard" color="#2EBC6B"/>
                <TextInput label="Email" variant="standard" color="#2EBC6B"/>
                
                <Text variant="h6" >Dados do Pet</Text>
                <TextInput label="Nome" variant="standard" color="#2EBC6B"/>
                <SafeAreaView>
                    <Button onPress={showDatepicker} title="Data de Nascimento" />
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            onChange={onChange}
                        />
                    )}
                </SafeAreaView>
                 
                <TextInput 
                    label="Peso" 
                    variant="standard"
                    color="#2EBC6B"
                    keyboardType='number-pad'
                    helperText='Em Kg'
                />

                <TextInput secureTextEntry={true} label="Senha" variant="standard" color="#2EBC6B"/>
                <TextInput secureTextEntry={true} label="Confirmar Senha" variant="standard" color="#2EBC6B"/>
            </VStack>
        </Box>
  );
} 