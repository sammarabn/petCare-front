import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function AboutScreen() {
  return (
    <View>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function PetView() {
    return (

            <Tab.Navigator>
                <Tab.Screen name="Sobre" component={AboutScreen} />
                <Tab.Screen name="Medicacoes" component={SettingsScreen} />
            </Tab.Navigator>
  );
} 