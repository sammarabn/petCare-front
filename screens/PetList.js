import React, { useState } from 'react';
import { AppBar, IconButton, HStack, ListItem } from "@react-native-material/core";
import { StatusBar, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useLocation } from 'react-router-native';
var jwtDecode = require('jwt-decode');

export default function PetList({ route }) {
  const navigation = useNavigation();
  const { data } = route.params;
  var token = data.token;
  const decoded = jwtDecode(token);

  function handleType(type){
    let typePet;

    if(type === 'FELINE'){
      typePet = 'FELINO'
    }else if(type === 'CANINE'){
      typePet = 'CANINO'
    }else{
      typePet = 'OUTRO'
    }
    return typePet
  }

  function handlePetData(pet){
    navigation.navigate('PetView', pet)
  }

    return (
      <ScrollView>
        <StatusBar backgroundColor="#2EBC6B"/>
      <AppBar
      title={'Bem-vindo, ' + decoded.name}
      leading={props => (
        <IconButton icon={props => <Icon name="menu" {...props} />} {...props} />
      )}
      trailing={props => (
        <HStack>
          <IconButton
            icon={props => <Icon name="magnify" {...props} />}
            {...props}
          />
        </HStack>
      )}
      color="#2EBC6B"
    />
    {
      decoded.pets.map((pets) => {
        return (<ListItem
          title={pets.name}
          secondaryText={handleType(pets.type)}
          button onPress={() => {handlePetData(pets)}}/>);
      })
    }
    
      </ScrollView>
  );
} 