import { StyleSheet } from 'react-native';

export const filmStyles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 20,
    backgroundColor: 'rgb(0, 0, 0)',
    flex: 1,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    marginHorizontal: 15,
  },
  item: {
    backgroundColor: "#1E3E62",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginHorizontal: 15,
    margin: 20,
    color: "#fff"
  },
  value: {
    fontSize: 16,
    color: "#fff",
    margin: 10,
  },
  noData: {
    textAlign: "center",
    color: "rgb(153, 153, 153)",
    fontSize: 20,
    margin: 10,
    fontWeight: "bold",
  },
});
