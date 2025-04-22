import React, { useCallback } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  ActivityIndicator,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { useWishlist } from "../../store/Wishlist";
import { useFocusEffect } from "@react-navigation/native";
import { wishlistStyles } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/navigationTypes";

type WishlistScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "PlanetList">;
};

export const WishlistScreen: React.FC<WishlistScreenProps> = ({
  navigation,
}) => {
  const { wishlist, removeFromWishlist, loadWishlist } = useWishlist();

  useFocusEffect(
    useCallback(() => {
      loadWishlist();
    }, [])
  );

  if (wishlist.length === 0) {
    return <Text style={wishlistStyles.noData}>Your wishlist is empty</Text>;
  }

  return (
    <View style={wishlistStyles.container}>
      <FlatList
        data={wishlist}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              const id = item.url.split("/").filter(Boolean).pop();
              if (id) {
                navigation.navigate("PlanetDetail", { id });
              } else {
                console.log("Invalid ID");
              }
            }}
          >
            <View style={wishlistStyles.card}>
              <View style={wishlistStyles.infoWrapper}>
                <Text style={wishlistStyles.name}>{item.name}</Text>
                <Text style={wishlistStyles.detail}>
                  <Icon style={wishlistStyles.iconDetail} name="users" />
                  Population: {item.population}
                </Text>
                <Text style={wishlistStyles.detail}>
                  <Icon style={wishlistStyles.iconDetail} name="cloud" />
                  Climate: {item.climate}
                </Text>
              </View>

              <View style={wishlistStyles.buttonWrapper}>
                <Button
                  title="Remove"
                  onPress={() => removeFromWishlist(item)}
                />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
