import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import CheckBox from './components/CheckBox';

export default function Writer({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}>
      <Button title="Offense" onPress={() => navigation.navigate('Offense')} />
      <Button title="Defense" onPress={() => navigation.navigate('Defense')} />
    </View>
  );
}

export function FormalPlayInput({navigation, route}) {
  const [isCaught, setIsCaught] = useState(false);
  const [play, setPlay] = useState({Caught: false});
  const {playType, formation, playname} = route.params;

  function addPlay() {
    console.log(JSON.stringify({...route.params, ...play}));
    navigation.navigate('Offense');
  }

  const editPlay = (field, val) => {
    let copy = {...play};
    copy[field] = val;
    setPlay(copy);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        gap: 15,
      }}>
      <Button title="Add Play" onPress={addPlay} />

      <TextInput
        // style={{
        //   height: 40,
        //   borderWidth: 1,
        //   borderRadius: 4,
        //   paddingHorizontal: 20,
        //   paddingVertical: 5,
        // }}
        placeholder="Yds"
        onChangeText={num => editPlay('Yds', num)}
        defaultValue={''}
      />

      <CheckBox
        checked={isCaught}
        label="Caught"
        onPress={() => {
          setIsCaught(!isCaught);
          editPlay('Caught', !isCaught);
        }}
      />

      <TextInput
        placeholder="Player"
        onChangeText={val => editPlay('Player', val)}
        defaultValue={''}
      />

      <TextInput
        placeholder="YAC"
        onChangeText={num => editPlay('YAC', num)}
        defaultValue={''}
      />
    </View>
  );
}
