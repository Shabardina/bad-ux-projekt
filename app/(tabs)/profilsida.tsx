import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Profil</Text>
        </View>

        <View style={styles.body}>
            <Text style={styles.paragraph}>Här kan du se din profil 🙎‍♀️
              Du kan redigera din profil bara om du har katter hemma ≽^•⩊•^≼ 
              Vem gillar inte katter?</Text>
        </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    height: 150,
    backgroundColor: 'black',
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
    color: 'white',

  },
});