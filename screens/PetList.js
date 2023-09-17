import React, { useState } from 'react';
import { IconComponentProvider, Icon, VStack, ListItem, AppBar } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const MenuIncon = () => (
    <>
      <Icon name="menu" size={24} color="#2EBC6B"/>
    </>
  );
  

export default function PetList() {
    return (
            <VStack spacing={15} divider={true}>
                <AppBar title="Bem-vindo, Fulano" />;
                <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                    <MenuIncon/>
                </IconComponentProvider>
                <ListItem
                    title="Ignis"
                    secondaryText="Gato"
                />
                <ListItem
                    title="Celeste"
                    secondaryText="Gato"
                />
            </VStack>
    
  );
} 