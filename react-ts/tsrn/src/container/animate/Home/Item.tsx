import React from 'react';
import {StyleSheet, Dimensions, View, Text} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import {AnimateHomeScreenProps} from './AnimateHome';

const {width, height} = Dimensions.get('window');
const MIN_HEIGHT = 128;
export const MAX_HEIGHT = height / 2;

interface Item {
  title: string;
  subtitle: string;
  top: number;
  colors: (string | number)[];
  picture: number;
  navigationComponentName: string;
}

interface ItemProps {
  index: number;
  y: Animated.SharedValue<number>;
  item: Item;
  navigation: AnimateHomeScreenProps;
}

const Item = ({
  navigation,
  y,
  index,
  item: {title, subtitle, top, colors, picture, navigationComponentName},
}: ItemProps) => {
  const style = useAnimatedStyle(() => {
    return {
      height: interpolate(
        y.value,
        [(index - 1) * MAX_HEIGHT, index * MAX_HEIGHT],
        [MIN_HEIGHT, MAX_HEIGHT],
        Extrapolate.CLAMP,
      ),
    };
  });
  const titleStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      y.value,
      [(index - 1) * MAX_HEIGHT, index * MAX_HEIGHT],
      [0, 1],
      Extrapolate.CLAMP,
    );
    return {
      opacity,
    };
  });
  const pictureStyle = useAnimatedStyle(() => ({
    height: MAX_HEIGHT,
    top: interpolate(
      y.value,
      [(index - 1) * MAX_HEIGHT, index * MAX_HEIGHT],
      [-top, 0],
    ),
  }));

  const onPress = (next: string) => {
    navigation.navigate(next);
  };

  return (
    <LinearGradient colors={colors}>
      <TouchableWithoutFeedback
        onPress={() => onPress(navigationComponentName)}>
        <Animated.View style={[styles.container, style]}>
          <Animated.Image
            source={picture}
            style={[styles.picture, pictureStyle]}
          />
          <View style={styles.titleContainer}>
            <Text style={styles.subtitle}>{subtitle.toUpperCase()}</Text>
            <View style={styles.mainTitle}>
              <Animated.View style={titleStyle}>
                <Text style={styles.title}>{title.toUpperCase()}</Text>
              </Animated.View>
            </View>
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height: MIN_HEIGHT,
    justifyContent: 'flex-end',
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '500',
  },
  titleContainer: {
    maxHeight: MAX_HEIGHT * 0.61,
    justifyContent: 'center',
    flex: 1,
  },
  mainTitle: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    padding: 32,
    transform: [{translateY: 64}],
  },
  subtitle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Item;
