import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { TextInput, Button, Text, VStack, Box, Divider, HStack, Switch } from "@react-native-material/core";
import DateTimePicker  from '@react-native-community/datetimepicker';
import {
    RoundedCheckbox,
    PureRoundedCheckbox,
  } from "react-native-rounded-checkbox";
import DropDownPicker from 'react-native-dropdown-picker';

export default function SignUp({navigation, route}) {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Felino', value: 'FELINE'},
        {label: 'Canino', value: 'CANINE'},
        {label: 'Outro', value: 'OTHER'},
    ]);
    const [castraded, setCastraded] = useState(true);
    const [sex, setSex] = useState('F');
    const sexM = false;
    const sexF = true;
    
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const onChangeSex = (selectedSex) => {
        sexF = selectedSex === 'F'? true: false;
        sexM = !sexF;
        setSex(selectedSex);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    return (
        <ScrollView>
            <VStack m={50} spacing={10}>
                <TextInput label="Nome" variant="standard" color="#2EBC6B"/>
                <TextInput label="Sobrenome" variant="standard" color="#2EBC6B"/>
                <TextInput label="Email" variant="standard" color="#2EBC6B"/>
                <TextInput label="Confirmar Email" variant="standard" color="#2EBC6B"/>
                <TextInput 
                    label="Telefone"
                    variant="standard"
                    color="#2EBC6B"
                    keyboardType='number-pad'/>
                
                <Text variant="h6" >Dados do Pet</Text>
                <TextInput label="Nome" variant="standard" color="#2EBC6B"/>

                <View style={{ zIndex : 5 }}>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                    />
                </View>

                <SafeAreaView>
                    <Button onPress={showDatepicker} title="Data de Nascimento" color="#2EBC6B" tintColor="#FFFFFF"/>
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

                <HStack>
                    <PureRoundedCheckbox checkedColor="#2EBC6B" onPress={onChangeSex('F')}/>
                    <PureRoundedCheckbox checkedColor="#2EBC6B" onPress={onChangeSex('M')}/>
                </HStack>

                <TextInput 
                    label="Peso" 
                    variant="standard"
                    color="#2EBC6B"
                    keyboardType='number-pad'
                    helperText='Em Kg'
                />

                <HStack spacing={170}>
                    <Text>Castrado?</Text>
                    <Switch value={castraded} onValueChange={() => setCastraded(!castraded)} thumbColor={"#2EBC6B"}/>
                </HStack>

                <TextInput secureTextEntry={true} label="Senha" variant="standard" color="#2EBC6B"/>
                <TextInput secureTextEntry={true} label="Confirmar Senha" variant="standard" color="#2EBC6B"/>
            </VStack>
        </ScrollView>
  );
} 