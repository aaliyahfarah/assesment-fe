import { StyleSheet } from "react-native";

export const residentStyles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 10,
    marginHorizontal: 15,
  },
  item: {
    width: 140,
    height: 110,
    backgroundColor: "#1E3E62",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 20,
    marginHorizontal: 15,
    marginVertical: 20,
    color: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  value: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
  },
  valueWrapper: {
    marginTop: 5,
    paddingHorizontal: 5,
    alignItems: "flex-start",
    flex: 1,
  },
  icon: {
    fontSize: 25,
    color: "#FF6500",
  },
  iconWrapper: {
    alignItems: "center",
  },
  noData: {
    textAlign: "center",
    color: "rgb(153, 153, 153)",
    fontSize: 20,
    margin: 10,
    fontWeight: "bold",
  },
});
