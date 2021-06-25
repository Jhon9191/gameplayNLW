import React from 'react';
import {
  ScrollView, Text
} from 'react-native';
import { styles } from './styles';
import { categories } from '../../utils/categories';
export function CategorySelect() {
  return (
    <ScrollView style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map(category => (
        <Text>oi</Text>
      ))}
    </ScrollView>

  )
}