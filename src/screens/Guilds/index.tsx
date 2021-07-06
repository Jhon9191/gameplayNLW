import React from 'react';
import { 
View, 
FlatList
} from 'react-native';
import { Guild } from '../../components/Guild';
import { GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
import { styles } from './styles';

type Props = {
    handleGuildSelect: (Guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect } : Props){

    const guilds = [
        {
            id: "1",
            name: "Lendários",
            icon: "image.png",
            owner: true
        },
        {
            id: "2",
            name: "MEC",
            icon: "image.png",
            owner: true
        },
        {
            id: "3",
            name: "FLEC",
            icon: "image.png",
            owner: true
        },
        {
            id: "4",
            name: "ROW",
            icon: "image.png",
            owner: true
        }
    ]

  return (
      <View style={styles.container}>
          <FlatList
           data={guilds}
           keyExtractor={item => item.id}
           renderItem={({ item }) => (
                <Guild data={item}
                onPress={()=>handleGuildSelect(item)}
                />
           )}
           ListHeaderComponent={()=> <ListDivider isCentered/>}
           ItemSeparatorComponent={()=> <ListDivider isCentered/>}
           showsVerticalScrollIndicator={false}
           contentContainerStyle={{paddingBottom:68, paddingTop: 103}}
           style={styles.guilds}
          />
      </View>
  );
}

export default Guilds;