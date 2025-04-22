import React, { useEffect, useState, useCallback } from "react";
import {
  ScrollView,
  Text,
  ActivityIndicator,
  View,
  TouchableOpacity,
} from "react-native";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/navigationTypes";
import { getPlanetById } from "../../services/PlanetServices";
import { Planet } from "../../types/Planet";
import { detailStyles } from "./styles";
import { ProfileComponent } from "../../components/PlanetDetail/Profile/Profile";
import { ResidentList } from "../../components/PlanetDetail/Residents/Residents";
import { FilmList } from "../../components/PlanetDetail/Films/Films";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

type DetailRouteProp = RouteProp<RootStackParamList, "PlanetDetail">;

export const PlanetDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<DetailRouteProp>();
  const { id } = route.params;

  const [planet, setPlanet] = useState<Planet | null>(null);
  const [isInWishlist, setIsInWishlist] = useState(false);

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

  useFocusEffect(
    useCallback(() => {
      const checkWishlistStatus = async () => {
        const wishlist = await AsyncStorage.getItem("wishlist");
        if (wishlist && planet) {
          const wishlistData = JSON.parse(wishlist);
          setIsInWishlist(
            wishlistData.some((item: Planet) => item.url === planet.url)
          );
        }
      };

      checkWishlistStatus();
    }, [planet])
  );

  const handleWishlistButtonClick = async () => {
    const wishlist = await AsyncStorage.getItem("wishlist");
    let wishlistData = wishlist ? JSON.parse(wishlist) : [];

    if (isInWishlist) {
      wishlistData = wishlistData.filter(
        (item: Planet) => item.url !== planet?.url
      );
    } else {
      wishlistData.push(planet!);
    }

    await AsyncStorage.setItem("wishlist", JSON.stringify(wishlistData));
    setIsInWishlist(!isInWishlist);
  };

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

      <View style={{ margin: 15, marginTop: 20 }}>
        {/* <Button
          style={ detailStyles.button }
          title={isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
          onPress={handleWishlistButtonClick}
        /> */}
        <TouchableOpacity
          style={detailStyles.button}
          onPress={handleWishlistButtonClick}
        >
          <Text style={detailStyles.buttontext}>
            {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
