import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

type GithubUsernameFormProps = {
  onSubmitUsername: (username: string) => void;
};

function GithubUsernameForm({onSubmitUsername}: GithubUsernameFormProps) {
  const [input, setInput] = useState('');

  const onPress = () => {
    onSubmitUsername(input);
    setInput('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Github 계정명을 입력하세요."
        onChangeText={(text: string) => setInput(text)}
      />
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.btnTxt}>확인</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 30,
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  input: {
    width: 250,
    borderWidth: 1,
    borderColor: '#339af0',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  btn: {
    marginLeft: 20,
    borderColor: '#000',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#339af0',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  btnTxt: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default GithubUsernameForm;
