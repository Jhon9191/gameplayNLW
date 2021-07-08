import React, { useState } from 'react';
import { useEffect } from 'react';
import {
    View,
    FlatList
} from 'react-native';
import { Guild } from '../../components/Guild';
import { GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
import { Load } from '../../components/Load';
import { api } from '../../services/api';
import { styles } from './styles';

type Props = {
    handleGuildSelect: (Guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect }: Props) {

    const [guilds, setGuilds] = useState<GuildProps[]>([])
    const [loading, setLoading] = useState(true);

    async function fetchGuilds() {
        const response = await api.get('/users/@me/guilds');
        setGuilds(response.data);
        setLoading(false);
        console.log(response)
    }

    useEffect(() => {
        fetchGuilds();
    }, []);

    return (
        <View style={styles.container}>
            {
                loading ? <Load /> :
                    <FlatList
                        data={guilds}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Guild data={item}
                                onPress={() => handleGuildSelect(item)}
                            />
                        )}
                        ListHeaderComponent={() => <ListDivider isCentered />}
                        ItemSeparatorComponent={() => <ListDivider isCentered />}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
                        style={styles.guilds}
                    />}
        </View>
    );
}

export default Guilds;