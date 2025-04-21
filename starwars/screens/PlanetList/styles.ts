import { StyleSheet } from 'react-native';

export const listStyles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 40,
    backgroundColor: 'rgb(250, 244, 255)',
    flex: 1,
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
    color: "rgb(70, 17, 112)",
    marginBottom: 5,
  },
  detail: {
    fontSize: 14,
    color: "#555",
    marginBottom:2,
  },
  iconDetail: {
    fontSize:12 ,
    color:"rgb(129, 129, 129)",
    marginRight: 5,
  },
  loadingFooter: {
    padding: 20,
    alignItems: 'center',
  },
});
