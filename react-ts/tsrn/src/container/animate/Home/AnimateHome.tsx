import React from 'react';
import {StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import Item, {MAX_HEIGHT} from './Item';
import {items} from './Model';
import {RootStackParamList} from '../AnimateNavigator';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

export type AnimateHomeScreenProps = StackNavigationProp<
  RootStackParamList,
  'AnimateHome'
>;

type Props = {
  navigation: AnimateHomeScreenProps;
};

const AnimateHome = ({navigation}: Props) => {
  const y = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({contentOffset: {y: value}}) => {
      y.value = value;
    },
  });
  return (
    <>
      <Animated.ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
        snapToInterval={MAX_HEIGHT}>
        <Animated.View style={styles.container}>
          {items.map((item, index) => (
            <Item
              navigation={navigation}
              item={item}
              key={index}
              y={y}
              index={index}
            />
          ))}
        </Animated.View>
      </Animated.ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: (items.length + 1) * MAX_HEIGHT,
    backgroundColor: '#fff',
  },
});
export default AnimateHome;
