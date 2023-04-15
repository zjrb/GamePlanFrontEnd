import {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

export default function PlayBook({navigation}) {
  const [onlyFormation, setOnlyFormation] = useState('');
  const [runForm, setRunForm] = useState('');
  const [passForm, setPassForm] = useState('');
  const [runPlay, setRunPlay] = useState('');
  const [passPlay, setPassPlay] = useState('');

  async function addFormation() {
    try {
      const response = await fetch('http://localhost/offense/add_formation', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formation_name: onlyFormation,
        }),
      });
      console.log(response.status);
    } catch (error) {
      console.error(error);
    }
    setOnlyFormation('');
  }

  async function addRunPlay() {
    try {
      const response = await fetch('http://localhost/offense/add_run_play', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formation_name: runForm,
          play_name: runPlay,
        }),
      });
      console.log(response.status);
    } catch (error) {
      console.error(error);
    }
    setRunPlay('');
    setRunForm('');
  }

  async function addPassPlay() {
    try {
      const response = await fetch('http://localhost/offense/add_pass_play', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formation_name: passForm,
          play_name: passPlay,
        }),
      });
      console.log(response.status);
    } catch (error) {
      console.error(error);
    }
    setPassPlay('');
    setPassForm('');
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 40,
        paddingBottom: 100,
        paddingTop: 20,
      }}>
      <View
        style={{
          gap: 15,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Formation</Text>
        <TextInput
          placeholder="Formation"
          onChangeText={val => setOnlyFormation(val)}
          value={onlyFormation}
        />
        {onlyFormation && (
          <Button title="Add Formation" onPress={addFormation} />
        )}
      </View>

      <View
        style={{
          gap: 15,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Run Play</Text>
        <TextInput
          placeholder="Formation"
          onChangeText={val => setRunForm(val)}
          value={runForm}
        />
        <TextInput
          placeholder="Run Play"
          onChangeText={val => setRunPlay(val)}
          value={runPlay}
        />
        {runPlay && runForm && (
          <Button title="Add Run Play" onPress={addRunPlay} />
        )}
      </View>

      <View
        style={{
          gap: 15,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Pass Play</Text>
        <TextInput
          placeholder="Formation"
          onChangeText={val => setPassForm(val)}
          value={passForm}
        />
        <TextInput
          placeholder="Pass Play"
          onChangeText={val => setPassPlay(val)}
          value={passPlay}
        />
        {passPlay && passForm && (
          <Button title="Add Pass Play" onPress={addPassPlay} />
        )}
      </View>
    </View>
  );
}
