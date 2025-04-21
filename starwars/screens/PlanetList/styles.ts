import { StyleSheet } from 'react-native';

export const listStyles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 40,
    backgroundColor: 'rgb(250, 244, 255)',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  item: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    marginHorizontal: 15,
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "rgb(70, 17, 112)"
  },
  detail: {
    fontSize: 14,
    color: "#555",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
  loadingFooter: {
    padding: 20,
    alignItems: 'center',
  },
});
