import React, { useEffect, useState } from "react";
import { getPlanets } from "../../services/PlanetServices";
import { View, FlatList, ActivityIndicator, Text, TouchableOpacity } from "react-native";
import { Planet } from "../../types/Planet";
import { listStyles } from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "../../navigation/navigationTypes";

type PlanetListScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'PlanetList'>;
};

export const PlanetListScreen: React.FC<PlanetListScreenProps> = ({ navigation }) => {
  const [dataPlanets, setDataPlanets] = useState<Planet[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  useEffect(() => {
    loadPlanet(page);
  }, []);

  const loadPlanet = async (currentPage: number) => {
    const data = await getPlanets(currentPage);
    if (data?.results?.length > 0) {
      setDataPlanets(prev => [...prev, ...data.results]);
      setPage(currentPage + 1);
      setHasMore(!!data.next);
    } else {
      setHasMore(false);
    }
    setIsLoading(false);
    setIsFetchingMore(false);
  };

  const handleLoadMore = () => {
    if (!isFetchingMore && hasMore) {
      setIsFetchingMore(true);
      loadPlanet(page);
    }
  };

  const renderFooter = () => {
    if (!isFetchingMore) return null;
    return <ActivityIndicator size="small" color="#000" />;
  };

  if (isLoading) {
    return <ActivityIndicator size="large" color="#000" />;
  }

  return (
    <View style={listStyles.container}>
      <FlatList
        data={dataPlanets}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              const id = item.url.split('/').filter(Boolean).pop();
              if (id) {
                navigation.navigate('PlanetDetail', { id });
              } else {
                console.log('Invalid ID');
              }
            }}
          >
            <View style={listStyles.item}>
              <Text style={listStyles.name}>{item.name}</Text>
              <Text style={listStyles.detail}>
                <Icon style={listStyles.iconDetail} name="users" />
                Population: {item.population}
              </Text>
              <Text style={listStyles.detail}>
                <Icon style={listStyles.iconDetail} name="cloud" />
                Climate: {item.climate}</Text>
            </View>
          </TouchableOpacity>
        )}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};


