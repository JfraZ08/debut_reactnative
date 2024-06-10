import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function ButtonComponent() {
  const [bande, setBande] = useState('');

  const res_bande = useMemo(() => {
    if (bande === 'blue') {
      return 'Relâche le bouton lorsque le compte à rebours affiche 4 à n\'importe quelle position';
    } 
    if (bande === 'yellow') {
      return 'Relâche le bouton lorsque le compte à rebours affiche 5 à n\'importe quelle position';
    } 
    if (bande === 'white') {
      return 'Relâche le bouton lorsque le compte à rebours affiche 1 à n\'importe quelle position';
    }
    return 'Sélectionnez une couleur';
  }, [bande]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Bande de couleur:</Text>
      <Picker
        style={styles.input}
        selectedValue={bande}
        onValueChange={(itemValue) => setBande(itemValue)}
      >
        <Picker.Item label="Sélectionnez une couleur" value="" />
        <Picker.Item label="Blue" value="blue" />
        <Picker.Item label="Yellow" value="yellow" />
        <Picker.Item label="White" value="white" />
      </Picker>
      <Text style={styles.res}>{res_bande}</Text>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 50,
    width: 200,
  },
  res: {
    width: 280,
    textAlign: 'center'
  }
});
