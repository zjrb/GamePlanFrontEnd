import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';


export function Offense({navigation}) {
  const playTypes = [
    'Pass', 'Run', 'Option',
  ];

  const onPlayPick = play => {
    console.log(play);
    navigation.navigate('O Formations', {
      playType: play
    });
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
      }}>
      {playTypes.map((p, i) => (
        <Button
          key={i}
          title={p}
          onPress={() => onPlayPick(p)}
          style={{
            width: '80%',
            border: 2,
            backgroundColor: 'lightgrey',
            borderRadius: 5,
          }}
        />
      ))}
    </View>
  );
}

export function OffenseFormation({navigation, route}) {

  // const { playType } = route.params;

  const formations = [
    'Trips',
    'Pistol',
    'I',
    'Pro Set',
    'Single Back',
    'Shotgun',
    'Wildcat',
  ];

  const onFormationPick = formation => {
    console.log(formation);
    navigation.navigate('Pick O Play', {
      ...route.params,
      formation: formation,
    });
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
      }}>
      {formations.map((f, i) => (
        <Button
          key={i}
          title={f}
          onPress={() => onFormationPick(f)}
          style={{
            width: '80%',
            border: 2,
            backgroundColor: 'lightgrey',
            borderRadius: 5,
          }}
        />
      ))}
    </View>
  );


}

export function OffensePlays({navigation, route}) {

  // const {playType, formation} = route.params;

  const plays = [
    'Slants',
    'QB Sneak',
    'California',
    'Screen',
    'Draw',
    'Criss-Cross',
    'Alabama',
    'Fade Posts',
    'TE Cross',
    'Hook Cross',
  ];

  const onPlayPick = play => {
    console.log(play);
    navigation.navigate('Play Input', {
      ...route.params,
      playname: play,
    });
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
      }}>
      {plays.map((p, i) => (
        <Button
          key={i}
          title={p}
          onPress={() => onPlayPick(p)}
          style={{
            width: '80%',
            border: 2,
            backgroundColor: 'lightgrey',
            borderRadius: 5,
          }}
        />
      ))}
    </ScrollView>
  );
}