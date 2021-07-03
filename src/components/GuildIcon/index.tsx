import React from 'react';
import {
  Image,
  Text
} from 'react-native';
import { styles } from './styles';

export function GuildIcon() {
  const uri = "https://w5fc.org/wp-content/uploads/2021/05/s9biyhs4lix61.jpg"
  return (
    <Image
      style={styles.image}
      source={{ uri }}
      resizeMode='cover'
    />
  )
}