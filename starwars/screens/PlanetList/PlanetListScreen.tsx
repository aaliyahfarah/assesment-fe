import React, { useEffect, useState } from "react";
import { getPlanets } from "../../services/PlanetServices";
import { View, FlatList, ActivityIndicator, Text, StyleSheet } from "react-native";
import { Planet } from "../../types/Planet";
import { listStyles } from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome';

export const PlanetListScreen = () => {
  const [dataPlanets, setDataPlanets] = useState<Planet[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  useEffect(() => {
    fetchData(page);
  }, []);

  const fetchData = async (pageNumber: number) => {
    const data = await getPlanets(pageNumber);
    if (data?.results?.length > 0) {
      setDataPlanets(prev => [...prev, ...data.results]);
      setPage(pageNumber + 1);
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
      fetchData(page);
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
        )}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};


