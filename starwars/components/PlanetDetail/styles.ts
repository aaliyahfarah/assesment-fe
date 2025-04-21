import { StyleSheet } from 'react-native';

export const profileStyles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 20,
    backgroundColor: 'rgb(0, 0, 0)',
    flex: 1,
  },
  sectionTitle: {
    marginHorizontal: 15,
    fontSize: 20,
    fontWeight: "bold",
    color: "#FF6500",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    marginHorizontal: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  label: {
    fontWeight: '600',
    fontSize: 16,
    color: '#444',
  },
  value: {
    fontSize: 16,
    color: '#666',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});