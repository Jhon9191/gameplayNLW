import React from 'react';
import { styles } from './styles';
import {
View,
Image,
Text
} from 'react-native';

export function Profile(){
  return(
    <View style={styles.container}>
      <View style={styles.user}> 
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.username}>João</Text>
      </View>

      <Text style={styles.message}>Hoje é dia de vitória</Text>

    </View>
  )
}