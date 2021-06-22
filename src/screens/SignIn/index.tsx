import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';

import { style } from './styles';

export function SignIn() {

    const [ text, setText ] = useState<string>("");

    return (
    <View style={style.container}>
      <Text>Cocosão</Text>

      <TextInput style={style.input} onChangeText={(text : string) => setText(text)}/>
      <Text> Você digitou: {text}</Text>
    </View>
  )
}
