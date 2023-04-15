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
        justifyContent: 'center',
        gap: 40,
      }}>
     
      <Button
        key={'stats'}
        title="Stats"
        onPress={() => goTo('Stats')}
      />
       <Button
        key={'offense'}
        title="PlayBook"
        onPress={() => goTo('PlayBook')}
      />
    </View>
  );
}

export function StatsHome({navigation}) {
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
