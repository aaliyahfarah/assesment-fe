import { StyleSheet } from 'react-native';

export const profileStyles = StyleSheet.create({
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
