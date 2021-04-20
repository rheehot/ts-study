import React from 'react';
import {StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import Item, {MAX_HEIGHT} from './Item';
import {items} from './Model';
import {RootStackParamList} from '../MainNavigator';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

export type HomeScreenProps = StackNavigationProp<RootStackParamList, 'Home'>;

type HomeProps = {
  navigation: HomeScreenProps;
};

const Home = ({navigation}: HomeProps) => {
  const y = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({contentOffset: {y: value}}) => {
      y.value = value;
    },
  });
  return (
    <Animated.ScrollView
      showsVerticalScrollIndicator={false}
      onScroll={onScroll}
      scrollEventThrottle={16}
      snapToInterval={MAX_HEIGHT}>
      <Animated.View style={styles.container}>
        {items.map((item, index) => (
          <Item
            key={index}
            item={item}
            y={y}
            navigation={navigation}
            index={index}
          />
        ))}
      </Animated.View>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: (items.length + 1) * MAX_HEIGHT,
  },
});
export default Home;
