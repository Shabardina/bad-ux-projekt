import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Välkommen till appen!</Text>
        </View>

        <View style={styles.body}>
            <Text style={styles.paragraph}>fdjhfsdfdjdjfdkdsfdfsnfdjdfsjfjdfsfdsdfsdsfhkjfdjfdkjf</Text>
        </View>
    </View>
  );
}
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 100,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    padding: 16,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
});