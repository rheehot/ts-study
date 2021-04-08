import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

type GithubProfileInfoProps = {
  name: string;
  thumbnail: string;
  bio: string;
  blog: string;
};

function GithubProfileInfo({
  name,
  thumbnail,
  bio,
  blog,
}: GithubProfileInfoProps) {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.img} source={{uri: thumbnail}} />
        <View>
          <Text>{name}</Text>
          <Text>{bio}</Text>
          <View>{blog !== '' && <Text>{blog}</Text>}</View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 125,
    height: 125,
    borderRadius: 125,
    marginRight: 15,
  },
});

export default GithubProfileInfo;
