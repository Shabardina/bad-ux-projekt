import LoginForm from "@/components/LoginForm";
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: 'white', dark: 'white' }}
      headerImage={
        <Image
          source={require('@/assets/images/banner.png')}
          style={styles.banner}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <LoginForm />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  banner: {
    height: 210,
    width: 350,
    bottom: -20,
    left: 0,
    position: 'absolute',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
