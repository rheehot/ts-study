import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addDiff, decrease, increase} from '../../modules/Counter/counter';
import {RootState} from '../../modules/index';

type CounterButtonProps = {
  innerText: string;
  onPress: () => void;
};

const CounterButton = ({innerText, onPress}: CounterButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{innerText}</Text>
    </TouchableOpacity>
  );
};

function CounterContainer() {
  const {count} = useSelector((state: RootState) => state.counter);
  const [input, setInput] = useState(0);
  const dispatch = useDispatch();

  const increaseCount = () => {
    dispatch(increase());
  };

  const decreaseCount = () => {
    dispatch(decrease());
  };

  const addDiffCount = () => {
    dispatch(addDiff(input));
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.count}>{count}</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.TextInputGuide}>얼마나 더할까?</Text>
          <TextInput
            style={styles.textInput}
            placeholder="+?"
            onChangeText={(val: string) => setInput(+val)}
          />
        </View>
        <View style={styles.buttonGroup}>
          <CounterButton innerText="+1" onPress={increaseCount} />
          <CounterButton innerText="-1" onPress={decreaseCount} />
          <CounterButton innerText={`+${input}`} onPress={addDiffCount} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextInputGuide: {
    fontSize: 20,
  },

  textInput: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,

    borderColor: '#868e96',
    width: 100,
    textAlign: 'center',
    marginLeft: 30,
  },

  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  button: {
    padding: 15,
    marginHorizontal: 30,
    borderRadius: 5,
    backgroundColor: '#4c6ef5',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  },
});

export default CounterContainer;
