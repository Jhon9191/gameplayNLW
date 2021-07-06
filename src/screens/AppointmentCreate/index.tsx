import React, { useState } from 'react';
import {
  ImageBackground,
  Text,
  View,
  FlatList,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/theme';
import { Background } from '../../components/Background';
import { GuildIcon } from '../../components/GuildIcon';
import { CategorySelect } from '../../components/CategorySelect';
import { Header } from '../../components/Header';
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { ModalView } from '../../components/ModalView';
import Guilds from '../Guilds';
import { GuildProps } from '../../components/Appointment';

export function AppointmentCreate() {

  const [category, setCategory] = useState('');
  const [openGuildsModa, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  function handleOpenGuilds() {
    setOpenGuildsModal(true);
  }

  function handleCloseGuilds() {
    setOpenGuildsModal(false);
  }

  function handleGuildSelect(guildSelect: GuildProps) {
    setGuild(guildSelect);
    setOpenGuildsModal(false);
  }

  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView>

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
          <RectButton onPress={handleOpenGuilds}>
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

          <View style={styles.field}>
            <View>
              <Text style={styles.label}>
                Dia e mês
              </Text>

              <View style={styles.colum}>
                <SmallInput maxLength={2} />
                <Text style={styles.divider}>
                  /
                </Text>
                <SmallInput maxLength={2} />
              </View>
            </View>

            <View>
              <Text style={styles.label}>
                Hora e minuto
              </Text>

              <View style={styles.colum}>
                <SmallInput maxLength={2} />
                <Text style={styles.divider}>
                  :
                </Text>
                <SmallInput maxLength={2} />
              </View>
            </View>
          </View>

          <View style={[styles.field, { marginBottom: 12 }]}>
            <Text style={styles.label}>
              Descrição
            </Text>
            <Text style={styles.caracteresLimit}>
              Max 100 caracteres
            </Text>
          </View>

          <TextArea
            multiline
            maxLength={100}
            numberOfLines={5}
            autoCorrect={false}
          />
          <View style={styles.footer}>
            <Button
              title="Agendar"
            />
          </View>
        </View>
      </ScrollView>
      <ModalView
        visible={openGuildsModa}
        closeModal={handleCloseGuilds}
      >
        <Guilds/>
      </ModalView>
    </KeyboardAvoidingView>
  )
}

export default AppointmentCreate;