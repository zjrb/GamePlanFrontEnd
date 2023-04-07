import {ScrollView, StyleSheet, Text, View} from 'react-native';

export default function ORundown() {
  const status = {
    posession: 'On Offense',
    down: '2 down',
    fieldPosition: 'Your 35 yd line',
  };

  const suggestion = [
    {play: 'Draw', formation: 'Single Back'},
    {play: 'Slants', formation: 'Colorado'},
  ];

  const planned = [{play: 'Zig-Zag', formation: 'Spread'}];

  const bestPlays = [
    {
      play: 'TE Cross',
      formation: 'Shotgun',
      totalYds: 50,
      times: 3,
      with: [27, 13],
      onDown: [1, 1, 3],
      avgYds: 25,
    },
  ];

  const bestPlayers = [
    {
      num: 14,
      name: 'Beach',
      position: 'receiver',
      onPlays: ['TE Cross', 'Slants'],
      yds: 40,
    },
    {
      num: 20,
      name: 'Spencer',
      position: 'Running Back',
      onPlays: ['Draw'],
      yds: 15,
    },
  ];

  const bestDefensivePlayers = [
    {
      num: 95,
      position: 'Defensive End',
      tackles: 3,
      sacs: 1,
    },
  ];

  const weakSpots = [{positions: 'O line', cuz: 'Pressure'}];

  const drives = [
    [
      {play: 'TE Cross', formation: 'Colorado', yds: 4},
      {play: 'Slants', formation: 'Single Back', yds: 2},
      {play: 'A Gap', formation: 'I', yds: 5},
    ],
    [
      {play: 'Read Option', formation: 'Shotgun', yds: 4},
      {play: 'Sweep', formation: 'Trips', yds: 17},
    ],
  ];

  const defensivePatterns = [{on: 3, and: 'long', play: 'Blitz'}];

  const offensivePatterns = [{on: 3, and: 'short', play: 'Hooks Cross'}];

  return (
    <ScrollView>
      <View
        style={{
          paddingTop: 15,
          alignItems: 'center',
          paddingBottom: 50,
        }}>
        <View style={styles.statusContainer}>
          <Text>Status:</Text>
          <View style={styles.statusBox}>
            {Object.keys(status).map(key => (
              <Text>{status[key]}</Text>
            ))}
          </View>
        </View>

        {/* <View style={{gap: 10, alignItems: 'center'}}> */}
        <View
          style={{
            borderColor: '#fa4e3e',
            marginTop: 30,
            marginBottom: 10,
          }}>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#fa4e3e',
              paddingLeft: 7,
              paddingRight: 7,
              paddingBottom: 3,
            }}>
            <Text
              style={{
                color: '#fa4e3e',
              }}>
              Radar
            </Text>
          </View>
        </View>

        <View style={{gap: 25, alignItems: 'center'}}>
          <View style={[styles.statusContainer, {marginTop: 10}]}>
            <Text style={styles.blue}>Suggestion:</Text>
            <View style={[styles.statusBox, {gap: 15}]}>
              {suggestion.map(p => (
                <Text>{`${p.formation} - ${p.play}`}</Text>
              ))}
            </View>
          </View>

          <View style={[styles.statusContainer, {marginBottom: 15}]}>
            <Text style={styles.blue}>Planned:</Text>
            <View style={[styles.statusBox, {gap: 15}]}>
              {planned.map(p => (
                <Text>{`${p.formation} - ${p.play}`}</Text>
              ))}
            </View>
          </View>

          <View style={[styles.statusContainer, {alignItems: 'flex-start'}]}>
            <Text style={styles.blue}>Best Plays:</Text>
            <View style={[styles.statusBox, {gap: 15}]}>
              {bestPlays.map(p => (
                <View style={{gap: 5}}>
                  <Text>{`${p.formation} - ${p.play}`}</Text>
                  <Text>{`avg: ${p.avgYds} | total: ${p.totalYds} yds`}</Text>
                  <Text>{`ran ${p.times} times`}</Text>
                  <Text>{`on downs${p.onDown.map(d => ' ' + d)}`}</Text>
                  <Text>{`with #'s${p.with.map(n => ' ' + n)}`}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={[styles.statusContainer, {alignItems: 'flex-start'}]}>
            <Text style={styles.blue}>Best Players:</Text>
            <View style={[styles.statusBox, {gap: 20}]}>
              {bestPlayers.map(p => (
                <View key={p.num} style={{gap: 5}}>
                  <Text>{`#${p.num} ${p.name ? p.name : ''} ${
                    p.position ? p.position : ''
                  }`}</Text>
                  {p.yds && <Text>{`yardage: ${p.yds}`}</Text>}
                  <Text>{`on plays${p.onPlays.map(p => ' ' + p)}`}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={[styles.statusContainer, {alignItems: 'flex-start'}]}>
            <Text style={styles.blue}>Best D Players:</Text>
            <View style={[styles.statusBox, {gap: 20}]}>
              {bestDefensivePlayers.map(p => (
                <View key={p.num} style={{gap: 5}}>
                  <Text>{`#${p.num} ${p.name ? p.name : ''} ${
                    p.position ? p.position : ''
                  }`}</Text>
                  {p.tackles && <Text>{`tackles: ${p.tackles}`}</Text>}
                  {p.sacs && <Text>{`tackles: ${p.sacs}`}</Text>}
                </View>
              ))}
            </View>
          </View>

          <View style={[styles.statusContainer]}>
            <Text style={styles.blue}>Weak Spots:</Text>
            <View style={[styles.statusBox, {gap: 20}]}>
              {weakSpots.map(w => (
                <>
                  <Text>{`${w.positions} cuz of ${w.cuz}`}</Text>
                </>
              ))}
            </View>
          </View>

          <View style={[styles.statusContainer, {alignItems: 'flex-start'}]}>
            <Text style={styles.blue}>Your Patterns:</Text>
            <View style={[styles.statusBox, {gap: 20}]}>
              {offensivePatterns.map(o => (
                <>
                  <Text>{`on ${o.on} and ${o.and}, ${o.play}`}</Text>
                </>
              ))}
            </View>
          </View>

          <View style={[styles.statusContainer, {alignItems: 'flex-start'}]}>
            <Text style={styles.blue}>Defensive Patterns:</Text>
            <View style={[styles.statusBox, {gap: 20}]}>
              {defensivePatterns.map(d => (
                <>
                  <Text>{`on ${d.on} and ${d.and}, ${d.play}`}</Text>
                </>
              ))}
            </View>
          </View>

          <View style={{gap: 15, alignItems: 'center'}}>
            <Text style={styles.blue}>Drives</Text>
            {drives.map(d => (
              <View style={styles.drive}>
                {d.map(p => (
                  <Text>{`${p.play} ${p.formation} - ${p.yds} yds`}</Text>
                ))}
              </View>
            ))}
          </View>
        </View>
      </View>
      {/* </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  statusContainer: {
    gap: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusBox: {
    gap: 5,
  },
  blue: {
    color: '#347aeb',
  },
  drive: {
    gap: 5,
    alignItems: 'center'
  },
});
