import React, {useState} from 'react';
import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
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
  const [incomplete, setIncomplete] = useState(false);
  const [sacked, setSacked] = useState(false);
  const [play, setPlay] = useState({caught: false});

  const {playType, formation, playName} = route.params;

  function addPlay() {
    if (play.caught) {
      delete play.Incomplete;
    }
    console.log(JSON.stringify({...route.params, ...play}));
    navigation.navigate('Offense');
  }

  const editPlay = (field, val) => {
    let copy = {...play};
    copy[field] = val;
    setPlay(copy);
  };

  const downs = [1, 2, 3, 4];
  const [down, setDown] = useState(0);

  const Pass = playType === 'Pass';

  const Run = playType === 'Run';

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          gap: 15,
          paddingBottom: 100,
          paddingTop: 20,
        }}>
        <Text>{`${playType}  |  ${formation}  |  ${playName}`}</Text>

        <Button title="Add Play" onPress={addPlay} />

        <TextInput
          placeholder="Yds"
          onChangeText={num => editPlay('yds', num)}
          defaultValue={''}
        />

        {Pass && (
          <CheckBox
            checked={isCaught}
            label="Caught"
            onPress={val => {
              setIsCaught(val);
              editPlay('caught', val);
            }}
          />
        )}

        {isCaught && (
          <TextInput
            placeholder="Player"
            onChangeText={val => editPlay('player', val)}
            defaultValue={''}
          />
        )}

        {Run && (
          <TextInput
            placeholder="Ball Carrier"
            onChangeText={val => editPlay('ballCarrier', val)}
            defaultValue={''}
          />
        )}

        {isCaught && (
          <TextInput
            placeholder="YAC"
            onChangeText={num => editPlay('YAC', num)}
            defaultValue={''}
          />
        )}

        <View style={styles.downs}>
          <Text>Down:</Text>
          {downs.map(d => (
            <Pressable
              hitSlop={3}
              onPressIn={() => {
                editPlay('down', d);
                setDown(d);
              }}
              // style={pressed => (pressed ? {color: '#86bbf0'} : {})}
            >
              <Text style={d === down ? {color: '#86bbf0'} : {}}>{d}</Text>
            </Pressable>
          ))}
        </View>

        <CheckBox
          label="First Down"
          onPress={val => editPlay('firstDown', val)}
        />

        <TextInput
          placeholder="Ended on yd line"
          onChangeText={num => editPlay('ydLine', num)}
          defaultValue={''}
        />

        {Pass && !isCaught && (
          <CheckBox
            label="Incomplete"
            onPress={val => {
              editPlay('incomplete', val);
              setIncomplete(val);
            }}
          />
        )}

        {incomplete && (
          <View
            style={{
              paddingLeft: 55,
              gap: 10,
              alignItems: 'center',
              paddingBottom: 5,
            }}>
            <CheckBox
              label="Bad Pass"
              onPress={val => {
                editPlay('badPass', val);
                setIncomplete(val);
              }}
            />
            <CheckBox
              label="Dropped"
              onPress={val => {
                editPlay('drop', val);
                setIncomplete(val);
              }}
            />
          </View>
        )}

        {Pass && !isCaught && (
          <TextInput
            placeholder="Intended Target"
            onChangeText={val => editPlay('intendedTarget', val)}
            defaultValue={''}
          />
        )}

        <CheckBox label="TD" onPress={val => editPlay('TD', val)} />

        <CheckBox label="Fumble" onPress={val => editPlay('fumble', val)} />

        {!isCaught && (
          <CheckBox
            label="Sacked"
            onPress={val => {
              editPlay('sacked', val);
              setSacked(val);
            }}
          />
        )}

        {sacked && !isCaught && (
          <TextInput
            placeholder="Sacced by"
            onChangeText={num => editPlay('saccer', num)}
            defaultValue={''}
          />
        )}

        {Pass && (
          <CheckBox
            label="Scrambled"
            onPress={val => editPlay('scrambled', val)}
          />
        )}

        {Pass && !sacked && (
          <CheckBox
            label="Pressure"
            onPress={val => editPlay('pressure', val)}
          />
        )}

        {Pass && (
          <TextInput
            placeholder="Coverage"
            onChangeText={val => editPlay('coverage', val)}
            defaultValue={''}
          />
        )}

        <CheckBox label="Blitz" onPress={val => editPlay('blitz', val)} />

        <TextInput
          placeholder="Personel"
          onChangeText={val => editPlay('personel', val)}
          defaultValue={''}
        />

        <CheckBox
          label="Add to radar"
          onPress={val => editPlay('addToRadar', val)}
        />

        <CheckBox label="flagPlay" onPress={val => editPlay('flagPlay', val)} />

        <TextInput
          placeholder="Notes"
          onChangeText={val => editPlay('notes', val)}
          defaultValue={''}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  downs: {
    flexDirection: 'row',
    gap: 10,
  },
});
