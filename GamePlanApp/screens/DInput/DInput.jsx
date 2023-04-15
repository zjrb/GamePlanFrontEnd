import {View, Text, Button} from 'react-native';

export function Coverage({navigation}) {
  const coverages = ['Cover 2', 'Cover 3', 'Man', 'Flats', 'Spy'];

  const onPlayPick = c => {
    console.log(c);
    navigation.navigate('Blitz', {
      coverage: c,
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
      {coverages.map((c, i) => (
        <Button
          key={i}
          title={c}
          onPress={() => onPlayPick(c)}
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

export function Blitz({navigation, route}) {
  const blitzs = ['None', 'Outside', 'Middle', 'Corner', 'Safety'];

  const onPlayPick = b => {
    console.log(b);
    navigation.navigate('Line Scheme', {
      blitz: b,
      ...route.params,
    });
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 25,
      }}>
      {blitzs.map((b, i) => (
        <Button
          key={i}
          title={b}
          onPress={() => onPlayPick(b)}
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

export function LineScheme({navigation, route}) {
  const schemes = ['None', 'Twist', 'Cross'];

  const onPlayPick = s => {
    console.log(s);
    navigation.navigate('O Ran', {
      lineScheme: s,
      ...route.params,
    });
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 25,
      }}>
      {schemes.map((p, i) => (
        <Button
          key={i}
          title={p}
          onPress={() => onPlayPick(p)}
          style={[
            {
              width: '80%',
              border: 2,
              backgroundColor: 'lightgrey',
              borderRadius: 5,
            },
            p === 'None' ? {color: '#8a9bb8'} : {},
          ]}
        />
      ))}
    </View>
  );
}

export function ORan({navigation, route}) {
  const playTypes = ['Pass', 'Run'];

  const onPlayPick = play => {
    console.log(play);
    navigation.navigate('In', {
      playType: play,
      ...route.params,
    });
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        // gap: 10,
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

export function In ({navigation, route}) {
  // const { playType } = route.params;

  const formations = [
    'Trips',
    'Shotgun',
    'I',
    'Wedge',
    'Single Back',
    'Double Back',
  ];

  const onFormationPick = formation => {
    console.log(formation);
    navigation.navigate('Record Play', {
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
        gap: 15,
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
