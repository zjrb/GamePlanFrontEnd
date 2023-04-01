import {Button, StyleSheet, Text, View} from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
      }}>
      <Button
        title="Input Gameplay"
        onPress={() => navigation.navigate('Inputer')}
      />
      <Button
        title="Coach"
        onPress={() => navigation.navigate("Coach's Dash")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: 'lightblue',
  },
});
