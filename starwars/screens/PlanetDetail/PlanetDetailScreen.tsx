import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/navigationTypes';// ganti sesuai lokasi
import { getPlanetById } from '../../services/PlanetServices';
import { Planet } from '../../types/Planet';
import { detailStyles } from './styles';
import { ProfileComponent } from '../../components/PlanetDetail/Profile';

type DetailRouteProp = RouteProp<RootStackParamList, 'PlanetDetail'>;

export const PlanetDetailScreen = () => {
    const navigation = useNavigation();
    const route = useRoute<DetailRouteProp>();
    const { id } = route.params;
    const [planet, setPlanet] = useState<Planet | null>(null);

    useEffect(() => {
        const fetchPlanet = async () => {
            const data = await getPlanetById(parseInt(id));
            setPlanet(data);
            navigation.setOptions({
                headerTitle: data.name,
            });
        };

        fetchPlanet();
    }, [id]);

    if (!planet) {
        return <ActivityIndicator size="large" color="#000" />;
    }

    return (
        <View style={detailStyles.container}>
            <Text style={detailStyles.sectionTitle}>Profile</Text>

            <ProfileComponent planetData={planet}/>

            


        </View>
    );
};