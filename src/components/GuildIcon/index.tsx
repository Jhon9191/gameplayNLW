import React from 'react';
import {
  Image,
  Text
} from 'react-native';
import { styles } from './styles';

export function GuildIcon() {
  const uri = "https://logosmarcas.net/wp-content/uploads/2020/11/Discord-Emblema.jpg"
  return (
    <Image
      style={styles.image}
      source={{ uri }}
      resizeMode='cover'
    />
  )
}