import * as React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  TextInput,
  Platform,
  Dimensions,
} from 'react-native';

type Story = {
  id: string;
  source: number;
};

type StoryProps = {
  story: Story;
};

const {width, height} = Dimensions.get('window');

function Story({story}: Story) {
  const {id, source} = story;
  console.log(id, source);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image style={styles.image} {...{source}} />
      </View>
      <View style={styles.footer}>
        <Feather name="camera" color="white" size={28} />
        <TextInput style={styles.input} />
        <Feather name="message-circle" color="white" size={28} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width,
    height,
    borderRadius: 5,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  input: {
    borderWidth: 2,
    borderColor: 'white',
    height: 28,
    width: 250,
    borderRadius: Platform.OS === 'android' ? 0 : 10,
  },
});

export default Story;
