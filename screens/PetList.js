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
      title="Brunch this weekend?"
      secondaryText="I'll be in your neighborhood doing errands this…"
    />
    <ListItem
      title="Summer BBQ"
      secondaryText="Wish I could come, but I'm out of town this…"
    />
    <ListItem
      title="Oui Oui"
      secondaryText="Do you have Paris recommendations? Have you ever…"
    />
      </ScrollView>
  );
} 