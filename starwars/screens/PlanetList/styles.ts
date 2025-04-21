import { StyleSheet } from 'react-native';

export const listStyles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'rgb(0, 0, 0)',
    flex: 1,
  },
  item: {
    backgroundColor: "#1E3E62",
    borderRadius: 10,
    padding: 10,
    paddingLeft: 30,
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
    color: "#FF6500",
    marginBottom: 5,
  },
  detail: {
    fontSize: 14,
    color: "rgb(226, 226, 226)",
    marginBottom:2,
  },
  iconDetail: {
    fontSize:12 ,
    color:"rgb(129, 129, 129)",
    marginRight: 5,
    marginLeft: 5,
  },
  loadingFooter: {
    padding: 20,
    alignItems: 'center',
  },
});
