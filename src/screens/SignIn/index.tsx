import React from 'react';
import { Text, View, Image, StatusBar } from 'react-native';


import ilustration from '../../assets/illustration.png';
import { style } from './styles';
import ButtonIcon from '../../components/ButtonIcon';

export function SignIn() {
    return (
    <View style={style.container}>

        <Image source={ilustration}
        style={style.image}
        resizeMode="stretch"/>

        <View style={style.content}>
            <Text style={style.title}>
                Conecte-se{`\n`}
                e organize {`\n`}
                suas jogatinas
            </Text>

            <Text style={style.subtitle}>
                Crie grupos para jogar seus games {`\n`}
                favoritos com seus amigos
            </Text>

        <ButtonIcon title="Entrar com Discord"
        activeOpacity={0.7}/>
        </View>


    </View>
  )
}
