import React from 'react';
import { Image, StyleSheet } from 'react-native';
// @ts-ignore
import Onboarding from 'react-native-onboarding-swiper';

const SimpleOnboarding = () => (
  <Onboarding
    onDone={() => console.log('done')}
  
    pages={[
      {
        backgroundColor: 'black',
        image: 
          <Image 
            source={require('../assets/images/slide1.png')} 
            style={styles.image}
          />,
        title: 'Onboarding',
        subtitle: 'Share your secrets with us!',
        showSkip: true,
      },
      {
        backgroundColor: 'black',
        image: 
          <Image 
            source={require('../assets/images/slide1.png')}
            style={styles.image}
          />,
        title: 'Onboarding',
        subtitle: 'Provide your sensitive data!',
        showSkip: true,
      },
      {
        backgroundColor: 'black',
        image: 
          <Image 
            source={require('../assets/images/slide1.png')} 
            style={styles.image}
          />,
        title: 'Onboarding',
        color: "black",
        subtitle: "Beautiful, isn't it?",
        showSkip: true,
      },
    ]}
  />
);

const styles = StyleSheet.create({
    image: {
    marginTop: -60, 
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  });

export default SimpleOnboarding;

