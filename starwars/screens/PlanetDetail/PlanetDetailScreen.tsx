import React, { useEffect, useState } from 'react';
import { ScrollView, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/navigationTypes';// ganti sesuai lokasi
import { getPlanetById } from '../../services/PlanetServices';
import { Planet } from '../../types/Planet';
import { detailStyles } from './styles';
import { ProfileComponent } from '../../components/PlanetDetail/Profile/Profile';
import { ResidentList } from '../../components/PlanetDetail/Residents/Residents';
import { FilmList } from '../../components/PlanetDetail/Films/Films';

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
        <ScrollView style={detailStyles.container}>
          <Text style={detailStyles.sectionTitle}>Profile</Text>
          <ProfileComponent planetData={planet} />
      
          <Text style={detailStyles.sectionTitle}>Residents</Text>
          <ResidentList residents={planet.residents} />
      
          <Text style={detailStyles.sectionTitle}>Films</Text>
          <FilmList films={planet.films} />

          
        </ScrollView>
      );
};