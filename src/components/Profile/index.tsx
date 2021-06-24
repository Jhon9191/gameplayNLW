import React from 'react';
import { styles } from './styles';
import {
View,
Image,
Text
} from 'react-native';
import {Photo} from '../../components/Photo';
export function Profile(){
  return(
    <View style={styles.container}>

      <Photo urlImage="https://github.com/Jhon9191.png"/>

    <View>
      <View style={styles.user}> 
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.username}>João</Text>
      </View>
      <Text style={styles.message}>Hoje é dia de vitória</Text>
    </View>


    </View>
  )
}