import React, { useEffect, useState } from "react";
import { FlatList, Text, View, ActivityIndicator } from "react-native";
import { getResidentData } from "../../../services/ResidentServices";
import { Resident } from "../../../types/Resident";
import { residentStyles } from "./styles";
import { FontAwesome } from "@expo/vector-icons";

type ResidentListProps = {
  residents: string[];
};

export const ResidentList = ({ residents }: ResidentListProps) => {
  const [residentData, setResidentData] = useState<Resident[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchResident();
  }, [residents]);

  const fetchResident = async () => {
    try {
      const resident = await getResidentData(residents);
      setResidentData(resident);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching resident:", error);
    }
  };

  if (isLoading) {
    return <ActivityIndicator size="large" color="#fff" />;
  }

  if (residentData.length === 0) {
    return (
      <View style={residentStyles.card}>
        <Text style={residentStyles.noData}>
          No data available
        </Text>
      </View>
    );
  }

  return (
    <View style={residentStyles.card}>
      <FlatList
        horizontal
        data={residentData}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => (
          <View style={residentStyles.item}>
            <View style={residentStyles.iconWrapper}>
              <FontAwesome name="user" style={residentStyles.icon} />
            </View>
            <View style={residentStyles.valueWrapper}>
              <Text style={residentStyles.value} numberOfLines={2}>
                {item.name}
              </Text>
            </View>
          </View>
        )}
        showsHorizontalScrollIndicator={true}
      />
    </View>
  );
};
