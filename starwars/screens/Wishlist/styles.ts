import { StyleSheet } from "react-native";

export const wishlistStyles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "rgb(255, 255, 255)",
    flex: 1,
  },
  noData: {
    textAlign: "center",
    color: "rgb(153, 153, 153)",
    fontSize: 20,
    margin: 10,
    fontWeight: "bold",
  },
  card: {
    flexDirection: 'row',
    backgroundColor: "#fff",
    borderColor: "#1E3E62",
    borderWidth: 1, 
    borderRadius: 5,
    padding: 10,
    paddingLeft: 30,
    marginBottom: 15,
    marginHorizontal: 15,
  },  
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF6500",
    marginBottom: 5,
  },
  detail: {
    fontSize: 14,
    color: "rgb(0, 0, 0)",
    marginBottom:2,
  },
  iconDetail: {
    fontSize:12 ,
    color:"rgb(129, 129, 129)",
    marginRight: 5,
    marginLeft: 5,
  },
  infoWrapper: {
    flex: 1, 
  },
  buttonWrapper: {
    marginLeft: 10,
    alignSelf: 'center',
  },
});
