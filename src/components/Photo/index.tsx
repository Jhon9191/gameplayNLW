import React from 'react';
import { styles } from './styles';
import {LinearGradient} from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';
import {
Image,
} from 'react-native';

type Props = {
  urlImage: string;
}

export function Photo({urlImage}:Props){
  const { secondary50, secondary70, heading } = theme.colors;
  return(
    <LinearGradient 
    colors={[secondary50, secondary70]}
    style={styles.container}>
      <Image source={{uri: urlImage}}
      style={styles.avatar}/>
    </LinearGradient>
  )
}