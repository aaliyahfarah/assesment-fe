import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, ActivityIndicator } from 'react-native';
import { getFilmData } from '../../../services/FilmServices';
import { Film } from '../../../types/Film';
import { filmStyles } from './styles';

type FilmListProps = {
  films: string[];
};

export const FilmList = ({ films }: FilmListProps) => {
  const [filmData, setFilmData] = useState<Film[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetchFilm();
  }, [films]);

  const fetchFilm = async () => {
    try {
      const film = await getFilmData(films);
      setFilmData(film);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching resident:", error);
    }
  };

  if (isLoading) {
    return <ActivityIndicator size="large" color="#fff" />;
  }

  if (filmData.length === 0) {
    return (
      <View style={filmStyles.card}>
        <Text style={filmStyles.noData}>
          No data available
        </Text>
      </View>
    );
  }

  return (
    <View style={filmStyles.card}>
      <FlatList
      horizontal
      data={filmData}
      keyExtractor={(item) => item.url}
      renderItem={({ item }) => (
        <View style={filmStyles.item}>
          <Text style={filmStyles.value}>{item.title}</Text>
        </View>
      )}
      showsHorizontalScrollIndicator={true}
    />
    </View>
    
  );
};
