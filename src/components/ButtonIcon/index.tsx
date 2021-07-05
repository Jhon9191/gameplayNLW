import React from 'react';
import { Text, Image, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import Discord from '../../assets/discord.png';
import { styles } from './styles';

//?: opcional
//: obrigatório

type props = RectButtonProps & {
  title?: string
}

export function ButtonIcon({ title, ...rest }: props) {
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={Discord} style={styles.icon} />
      </View>
      <Text style={styles.title}>
        {title}
      </Text>
    </RectButton>
  );
}