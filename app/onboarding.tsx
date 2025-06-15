import React from 'react';
import { Image } from 'react-native';
// @ts-ignore
import Onboarding from 'react-native-onboarding-swiper';

const Simple = () => (
  <Onboarding
    onDone={() => console.log('done')}
    pages={[
      {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/images/slide1.png')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
        showSkip: false,
      },
      {
        backgroundColor: '#fe6e58',
        image: <Image source={require('../assets/images/slide2.png')} />,
        title: 'The Title',
        subtitle: 'This is the subtitle that sumplements the title.',
        showSkip: false,
      },
      {
        backgroundColor: '#999',
        image: <Image source={require('../assets/images/slide3.png')} />,
        title: 'Triangle',
        subtitle: "Beautiful, isn't it?",
        showSkip: false,
      },
    ]}
  />
);

export default Simple;