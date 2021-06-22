import React from 'react';
import { Text, Image, View, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import Discord from '../../assets/discord.png';
import {styles} from './styles';

//?: opcional
//: obrigatório

type props = TouchableOpacityProps &{
  title?: string
}

export default function ButtonIcon({ title , ...rest} : props) {
  return(
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={Discord} style={styles.icon}/>
      </View>
      <Text style={styles.title}> 
        {title}
      </Text>
    </TouchableOpacity>
  );
}