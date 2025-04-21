import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/navigationTypes';// ganti sesuai lokasi
import { getPlanetById } from '../../services/PlanetServices';
import { Planet } from '../../types/Planet';

type DetailRouteProp = RouteProp<RootStackParamList, 'PlanetDetail'>;

export const PlanetDetailScreen = () => {
    const route = useRoute<DetailRouteProp>();
    const { id } = route.params;
    const [planet, setPlanet] = useState<Planet | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPlanet = async () => {
            const data = await getPlanetById(parseInt(id));
            setPlanet(data);
            setLoading(false);
        };
        fetchPlanet();
    }, [id]);

    if (loading || !planet) {
        return <ActivityIndicator size="large" color="#000" />;
    }

    return (
        <View>
            <Text>{planet.name}</Text>
            <Text>Population: {planet.population}</Text>
            <Text>Climate: {planet.climate}</Text>
            <Text>Terrain: {planet.terrain}</Text>
        </View>
    );
};