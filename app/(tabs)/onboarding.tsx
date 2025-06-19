import { useRouter } from 'expo-router';
import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const COLORS = { primary: '#282534', white: '#fff', black: 'black' };

const slides = [
  {
    id: '1',
    image: require('../assets/images/banner.png'),
    title: 'Onboarding',
    subtitle: 'Du kan chatta med vänner i vår app!',
  },
  {
    id: '2',
    image: require('../assets/images/slide.png'),
    title: 'Onboarding',
    subtitle: 'Dela dina känsliga uppgifter med oss! ',
  },
  {
    id: '3',
    image: require('../assets/images/slide0.png'),
    title: 'Onboarding',
    subtitle: 'Det är så enkelt: du får kommunikation med vänner, vi får att som du har!',
  },
];

const Slide = ({ item }: { item: typeof slides[0] }) => {
  return (
    <View style={{ width, flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 250, }}>
      
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        <Image
        source={item.image}
        style={{ height: '150%', width: '100%', resizeMode: 'contain', marginTop: 40 }}
      />
    </View>
  );
};

export default function OnboardingScreen() {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef<FlatList>(null);
  const router = useRouter();

  const updateCurrentSlideIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({ offset });
      setCurrentSlideIndex(nextSlideIndex);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current?.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}
      >
        {/* Dots */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex === index && {
                  backgroundColor: COLORS.white,
                  width: 25,
                },
              ]}
            />
          ))}
        </View>

        {/* Buttons */}
        <View style={{ marginBottom: 60 }}>
          {currentSlideIndex === slides.length - 1 ? (
            <View style={{ height: 50 }}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => router.replace('/landningssida')} 
              >
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                  GET STARTED
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.btn,
                  {
                    borderColor: COLORS.white,
                    borderWidth: 1,
                    backgroundColor: 'transparent',
                  },
                ]}
                onPress={skip}
              >
                <Text style={{ fontWeight: 'bold', fontSize: 15, color: COLORS.white }}>
                  SKIP
                </Text>
              </TouchableOpacity>
              <View style={{ width: 15 }} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.btn}
              >
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>NEXT</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <StatusBar backgroundColor={COLORS.primary} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ flexGrow: 1 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    color: COLORS.white,
    fontSize: 18,
    marginTop: 10,
    maxWidth: '70%',
    textAlign: 'center',
    lineHeight: 23,
  },
  title: {
    color: COLORS.white,
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
