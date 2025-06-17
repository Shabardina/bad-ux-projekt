import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Välkommen till appen!</Text>
        </View>

        <View style={styles.body}>
            <Text style={styles.paragraph}>👋Hej! Du kan använda appen för att chatta med vänner, dela bilder, 
              meddelanden, dokument och annan information. Du kan känna dig trygg eftersom all din data sparas
              direkt i appen och hela världen kan få tillgång till den. Säkerhet är viktigt för oss!🔒🔑</Text>
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