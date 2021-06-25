import React from 'react';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';
import {
  Image,
} from 'react-native';

type Props = {
  urlImage: string;
}

export function Photo({ urlImage }: Props) {
  const { secondary80, secondary100, heading } = theme.colors;
  return (
    <LinearGradient
      colors={[secondary80, secondary100]}
      style={styles.container}>
      <Image source={{ uri: urlImage }}
        style={styles.avatar} />
    </LinearGradient>
  )
}