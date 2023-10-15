import React, { useState } from 'react';
import { AppBar, IconButton, HStack, ListItem } from "@react-native-material/core";
import { StatusBar, ScrollView } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function PetList() {
    return (
      <ScrollView>
        <StatusBar backgroundColor="#2EBC6B"/>
      <AppBar
      title="Bem-vindo, Fulano."
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
    <ListItem
      title="Ignis"
      secondaryText="Gato"
    />
    <ListItem
      title="Celeste"
      secondaryText="Gato"
    />
    <ListItem
      title="Eevee"
      secondaryText="Gato"
    />
    <ListItem
      title="Nino"
      secondaryText="Gato"
    />
    <ListItem
      title="Pretinha"
      secondaryText="Cachorro"
    />
      </ScrollView>
  );
} 