import React, { useState } from 'react';
import {
  ImageBackground,
  Text,
  View,
  FlatList
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/theme';
import { Background } from '../../components/Background';
import { GuildIcon } from '../../components/GuildIcon';
import { CategorySelect } from '../../components/CategorySelect';
import { Header } from '../../components/Header';

export function AppointmentCreate() {

  const [category, setCategory] = useState('');

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  return (
    <Background>
      <Header
        title="Agenda partida"
      />

      <Text style={[
        styles.label,
        { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}
      >
        Categoria
      </Text>

      <CategorySelect
        hasCheckBox
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      <View style={styles.form}>
        <RectButton>
          <View style={styles.select}>

            {
              /*<View style={styles.image} />*/
              <GuildIcon />
            }

            <View style={styles.selectBody}>
              <Text style={styles.label}>
                Selecione um servidor
              </Text>
            </View>
            <Feather
              name="chevron-right"
              color={theme.colors.heading}
              size={18}
            />
          </View>
        </RectButton>
      </View>

    </Background>
  )
}

export default AppointmentCreate;