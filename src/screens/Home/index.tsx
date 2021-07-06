import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native'
import { styles } from './styles'
import { Profile } from '../../components/Profile';
import { Background } from '../../components/Background';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { ListDivider } from '../../components/ListDivider';
import { Appointment } from '../../components/Appointment'
import { useNavigation } from '@react-navigation/native';
export function Home() {

    const navigation = useNavigation();
    const [category, setCategory] = useState('');

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '2',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    function handleAppointmentDetails(){
        navigation.navigate("AppointmentDetails")
    }

    function handleAppointmentCreate(){
        navigation.navigate("AppointmentCreate")
    }

    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={handleAppointmentCreate}/>
            </View>
            <View>
                <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                    hasCheckBox={false}
                />
                <View style={styles.content}>
                    <ListHeader
                        title="Partidas agendadas"
                        subtitle='Total 6'
                    />
                </View>

                <FlatList
                    style={styles.matches}
                    showsHorizontalScrollIndicator={false}
                    data={appointments}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Appointment data={item} 
                            onPress={handleAppointmentDetails}
                        />
                    )}
                    ItemSeparatorComponent={()=><ListDivider/>}
                    contentContainerStyle={{paddingBottom:69}}
                />

            </View>
        </Background>
    )
}