import React, { useCallback, useState } from 'react';
import { View, Text, FlatList } from 'react-native'
import { styles } from './styles'
import { Profile } from '../../components/Profile';
import { Background } from '../../components/Background';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { ListDivider } from '../../components/ListDivider';
import { Appointment, AppointmentProps } from '../../components/Appointment'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Load } from '../../components/Load';
export function Home() {

    const navigation = useNavigation();
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(true);
    const [appointments, setAppointments] = useState<AppointmentProps[]>([]);

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    function handleAppointmentDetails() {
        navigation.navigate("AppointmentDetails")
    }

    function handleAppointmentCreate() {
        navigation.navigate("AppointmentCreate")
    }

    async function loadAppointments() {
        const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

        if (category) {
            setAppointments(storage.filter(item => item.category === category));
        } else {
            setAppointments(storage)
        }

        setLoading(false);
    }

    useFocusEffect(useCallback(() => {
        loadAppointments();
    }, [category]));

    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={handleAppointmentCreate} />
            </View>
            <View>
                <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                    hasCheckBox={false}
                />

                {
                    loading ? <Load/> :
                    <>
                        <ListHeader
                            title="Partidas agendadas"
                            subtitle='Total 6'
                        />

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
                            ItemSeparatorComponent={() => <ListDivider />}
                            contentContainerStyle={{ paddingBottom: 69 }}
                        />
                    </>
                }

            </View>
        </Background>
    )
}