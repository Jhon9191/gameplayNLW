import React from 'react';
import { Text, View, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import ilustration from '../../assets/illustration.png';
import { style } from './styles';
import ButtonIcon from '../../components/ButtonIcon';

export function SignIn() {
    const navigate = useNavigation();
    return (
        <View style={style.container}>

            <Image source={ilustration}
                style={style.image}
                resizeMode="stretch" />

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

                <ButtonIcon title="Entrar com Discord" onPress={() => navigate.navigate("Home")} />
            </View>


        </View>
    )
}
