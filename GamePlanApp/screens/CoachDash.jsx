import {Button, Text, View} from 'react-native';

export default function CoachDash({navigation}) {
  function goTo(val) {
    navigation.navigate(val);
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}>
      <Button
        key={'offense'}
        title="Offense"
        onPress={() => goTo('Offensive Rundown')}
        style={{
          width: '80%',
          border: 2,
          backgroundColor: 'lightgrey',
          borderRadius: 5,
        }}
      />
      <Button
        key={'defense'}
        title="Defense"
        onPress={() => goTo('Defensive Rundown')}
        style={{
          width: '80%',
          border: 2,
          backgroundColor: 'lightgrey',
          borderRadius: 5,
        }}
      />
    </View>
  );
}
