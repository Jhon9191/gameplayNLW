import React from 'react';
import { Text, View, TextInput, Image, StatusBar } from 'react-native';


import ilustration from '../../assets/illustration.png';
import { style } from './styles';

export function SignIn() {
    return (
    <View style={style.container}>
  
        <StatusBar barStyle="light-content"
        backgroundColor="transparent"
        translucent
        />

        <Image source={ilustration}
        style={style.image}
        resizeMode="stretch"/>

        <View style={style.content}>
            <Text style={style.title}>
                Organize {`\n`}
                suas jogatinas {`\n`}
                facilmente
            </Text>

            <Text style={style.subtitle}>
                Crie grupos para jogar seus games {`\n`}
                favoritos com seus amigos
            </Text>
      
        </View>


    </View>
  )
}
