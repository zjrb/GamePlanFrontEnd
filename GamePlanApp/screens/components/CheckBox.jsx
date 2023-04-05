import {Pressable, StyleSheet, Text, View} from 'react-native';
import { useState } from 'react';

export default function CheckBox({checked, label, onPress}) {

  const [val, setVal] = useState(checked ? checked : false);

  const handlePress = () => {
    setVal(!val);
    if (onPress) {
      onPress(!val);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{label}</Text>

      <Pressable onPress={handlePress} hitSlop={10}>
        <View style={[styles.checkbox, val ? styles.checked : {}]}></View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  checkbox: {
    width: 15,
    height: 15,
    borderWidth: 2,
    borderColor: '#8298ad',
  },
  checked: {
    //#007AFF
    backgroundColor: '#86bbf0',
    borderColor: '#86bbf0',
  },
  title: {
    fontSize: 16,
    color: '#000',
    // fontWeight: '500',
  },
});
