import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation, useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function handleSex(sex){
  return sex === 'M'? 'Macho' : 'Femea';
}

function handleBirthDate(birthdate){
  console.log(typeof birthdate);
  let data = birthdate.split('-');
  let year = data[0];
  let month = data[1];
  let day = data[2].split('T')[0];

  return day + " " + selectMonth(month) + " " + year;
}

function selectMonth(month){
  switch(month){
    case '01':
      return 'Janeiro';
      break;
    case '02':
      return 'Fevereiro';
      break;
    case '03':
      return 'Marco';
      break;
    case '04':
      return 'Abril';
      break;
    case '05':
      return 'Maio';
      break;
    case '06':
      return 'Junho';
      break;
    case '07':
      return 'Julho';
      break;
    case '08':
      return 'Agosto';
      break;
    case '09':
      return 'Setembro';
      break;
    case '10':
      return 'Outubro';
      break;
    case '11':
      return 'Novembro';
      break;
    case '12':
      return 'Dezembro';
      break;
  }
}

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

function handleCastraded(castraded){
  return castraded? 'E castrado' : 'Nao e castrado'
}

function AboutScreen({route}) {
  const data = route.params
  return (
    <View>
      <Text>Sexo: {handleSex(data.sex)}</Text>
      <Text>Data de Nascimento: {handleBirthDate(data.birthdate)}</Text>
      <Text>Tipo: {handleType(data.type)}</Text>
      <Text>Peso: {data.weight}Kg</Text>
      <Text>{handleCastraded(data.castraded)}</Text>
    </View>
  );
}

function PreviousSurgeriesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function PetView({ route }) {
  const data  = route.params;
  const petName = data.name;
  
  return (
    <Tab.Navigator>
      <Tab.Screen name={petName} component={AboutScreen} initialParams={data}/>
      <Tab.Screen name="Medicacoes" component={PreviousSurgeriesScreen} />
    </Tab.Navigator>
  );
} 