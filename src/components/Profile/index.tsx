import React from 'react';
import { styles } from './styles';
import {
View,
Image,
Text
} from 'react-native';
import {Photo} from '../../components/Photo';
import { useAuth } from '../../hooks/auth';
export function Profile(){
  const { user } = useAuth()
  return(
    <View style={styles.container}>

      <Photo urlImage={user.avatar}/>

    <View>
      <View style={styles.user}> 
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={[styles.username,{fontSize: user.firstName.length > 12 ? 18 : 24}]}>{user.firstName}</Text>
      </View>
      <Text style={styles.message}>Hoje é dia de vitória</Text>
    </View>


    </View>
  )
}