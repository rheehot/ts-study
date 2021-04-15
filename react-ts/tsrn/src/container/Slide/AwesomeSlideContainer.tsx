import React, {useRef} from 'react';
import {
  StyleSheet,
  Animated,
  Dimensions,
  Platform,
  View,
  TouchableOpacity,
} from 'react-native';
import {items} from './Model';
import Story from './Story';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../animate/AnimateNavigator';
import AntDesign from 'react-native-vector-icons/AntDesign';

type AwesomeSlideScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AwesomeSlideContainer'
>;

type AwesomeSlideContainerProps = {
  navigation: AwesomeSlideScreenNavigationProp;
};

//define animation variable
const {width} = Dimensions.get('window');
const perspective = width;
const angle = Math.atan(perspective / (width / 2));
const ratio = Platform.OS === 'ios' ? 2 : 1.2;

function AwesomeSlideContainer({navigation}: AwesomeSlideContainerProps) {
  const scrollX = useRef(new Animated.Value(0));

  function getStyle(index: number) {
    const offset = index * width;
    const inputRange = [offset - width, offset + width];

    const translateX = scrollX.current.interpolate({
      inputRange,
      outputRange: [width / ratio, -width / ratio],
      extrapolate: 'clamp',
    });
    const rotateY = scrollX.current.interpolate({
      inputRange,
      outputRange: [`${angle}rad`, `-${angle}rad`],
      extrapolate: 'clamp',
    });

    const translateX1 = scrollX.current.interpolate({
      inputRange,
      outputRange: [width / 2, -width / 2],
      extrapolate: 'clamp',
    });

    const extra = width / ratio / Math.cos(angle / 2) - width / ratio;
    const translateX2 = scrollX.current.interpolate({
      inputRange,
      outputRange: [-extra, extra],
      extrapolate: 'clamp',
    });

    return {
      ...StyleSheet.absoluteFillObject,
      transform: [
        {perspective},
        {translateX},
        {rotateY},
        {translateX: translateX1},
        {translateX: translateX2},
      ],
    };
  }

  function getMaskStyle(index: number) {
    const offset = index * width;
    const inputRange = [offset - width, offset, offset + width];
    const opacity = scrollX.current.interpolate({
      inputRange,
      outputRange: [0.75, 0, 0.75],
      extrapolate: 'clamp',
    });
    return {
      backgroundColor: 'black',
      ...StyleSheet.absoluteFillObject,
      opacity,
    };
  }

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack} style={styles.navigationButton}>
        <AntDesign name="arrowleft" size={25} color="#fff" />
      </TouchableOpacity>
      {items.map((story, i) => (
        <Animated.View style={getStyle(i)} key={story.id}>
          <Story story={story} />
          <Animated.View style={getMaskStyle(i)} />
        </Animated.View>
      ))}
      <Animated.ScrollView
        ref={scrollX}
        style={StyleSheet.absoluteFillObject}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToInterval={width}
        contentContainerStyle={{width: width * items.length}}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX.current}}}],
          {
            useNativeDriver: true,
          },
        )}
        decelerationRate={0.99}
        horizontal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  navigationButton: {
    position: 'absolute',
    width: 50,
    height: 50,
    top: 55,
    left: 20,
    zIndex: 999,
  },
});

export default AwesomeSlideContainer;
