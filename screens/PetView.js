import * as React from 'react';
import { Text, View } from 'react-native';
import { ListItem, IconButton } from "@react-native-material/core";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

function handleSex(sex){
  return sex === 'M'? 'Macho' : 'Femea';
}

function handleBirthDate(birthdate){
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
      <ListItem title={"Sexo: " + handleSex(data.sex)} trailing={<IconButton icon={props => <Icon name="pencil" {...props}/>} />}/>
      <ListItem title={"Data de Nascimento: " + handleBirthDate(data.birthdate)} trailing={<IconButton icon={props => <Icon name="pencil" {...props}/>} />}/>
      <ListItem title={"Tipo: " + handleType(data.type)} trailing={<IconButton icon={props => <Icon name="pencil" {...props}/>} />}/>
      <ListItem title={"Peso: " + data.weight + "Kg"} trailing={<IconButton icon={props => <Icon name="pencil" {...props}/>} />}/>
      <ListItem title={handleCastraded(data.castraded)} trailing={<IconButton icon={props => <Icon name="pencil" {...props}/>} />}/>
    </View>
  );
}

function PreviousSurgeriesScreen({route}) {
  const data = route.params

  return (
    <View>
      {
      data.previousSurgeries.map((surgery) => {
        return (<ListItem
          title={surgery}
          trailing={<IconButton icon={props => <Icon name="pencil" {...props}/>} />}/>)
      })
    }
    </View>
    
  );
}

function ConditionsScreen({route}) {
  const data = route.params;

  return (
    <View>
      {
      data.conditions.map((condition) => {
        return (<ListItem
          title={condition}
          trailing={<IconButton icon={props => <Icon name="pencil" {...props}/>} />}/>)
      })
    }
    </View>
  );
}

function MedicinesScreen({route}) {
  const data = route.params

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Este animal nao toma ou nao possui medicacao cadastrada.</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function PetView({ route }) {
  const data  = route.params;
  const petName = data.name;
  
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === petName) {
          iconName = 'dog-side';
        } else if (route.name === 'Cirurgias Anteriores') {
          iconName = 'blood-bag';
        } else if (route.name === 'Condicoes') {
          iconName = 'information';
        } else if(route.name === 'Medicamentos'){
          iconName = 'medical-bag';
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#2EBC6B',
      tabBarInactiveTintColor: 'gray',
    })}
    >
      <Tab.Screen name={petName} component={AboutScreen} initialParams={data} />
      <Tab.Screen name="Cirurgias Anteriores" initialParams={data} component={PreviousSurgeriesScreen} />
      <Tab.Screen name="Condicoes" initialParams={data} component={ConditionsScreen} />
      <Tab.Screen name="Medicamentos" initialParams={data} component={MedicinesScreen} />
    </Tab.Navigator>
  );
} 