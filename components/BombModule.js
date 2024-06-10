import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const BombModule = () => {
  const [step, setStep] = useState(1);
  const [screenNumber, setScreenNumber] = useState(1);
  const [instruction, setInstruction] = useState('');

  // Définition des instructions pour chaque étape
  const instructions = {
    1: `Si l'écran affiche ${screenNumber}, appuyer sur le bouton en deuxième position.`,
    2: `Si l'écran affiche ${screenNumber}, appuyer sur le bouton portant le chiffre "4".`,
    3: `Si l'écran affiche ${screenNumber}, appuyer sur le bouton ayant le même chiffre qu'à l'étape 2.`,
    4: `Si l'écran affiche ${screenNumber}, appuyer sur le bouton à la même position qu'à l'étape 1.`,
    5: `Si l'écran affiche ${screenNumber}, appuyer sur le bouton ayant le même chiffre qu'à l'étape 1.`,
  };

  // Générer un nouveau numéro d'écran à chaque changement de step
  useEffect(() => {
    setScreenNumber(Math.floor(Math.random() * 4) + 1);
  }, [step]);

  // Mettre à jour l'instruction à chaque changement de step ou de numéro d'écran
  useEffect(() => {
    setInstruction(instructions[step]);
  }, [step, screenNumber]);

  // Fonction appelée lorsqu'un bouton est pressé
  const handleButtonPress = (buttonNumber) => {
    const expectedButtonNumber = getExpectedButtonNumber(step, screenNumber);

    // Vérifie si le bouton pressé correspond à celui attendu
    if (buttonNumber === expectedButtonNumber) {
      if (step === 5) {
        // Si c'est la dernière étape, affiche un message de succès et réinitialise le module
        alert('Félicitations, la bombe est désamorcée !');
        setStep(1);
      } else {
        // Passe à l'étape suivante
        setStep(step + 1);
      }
    } else {
      // Si le bouton pressé est incorrect, revient à l'étape 1
      alert('Erreur : Le bouton pressé est incorrect. Revenez à l\'étape 1.');
      setStep(1);
    }
  };

  // Fonction pour obtenir le numéro de bouton attendu pour une étape donnée
  function getExpectedButtonNumber(step, screenNumber) {
    switch (step) {
      case 1:
        return 2;
      case 2:
        return 4;
      case 3:
        return screenNumber; // Même que l'écran affiché à l'étape 2
      case 4:
        return 1; // Même que l'étape 1
      case 5:
        return screenNumber; // Même que l'étape 1
      default:
        return 0;
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.instruction}>{instruction}</Text>
      <View style={styles.buttonsContainer}>
        {[1, 2, 3, 4].map((buttonNumber) => (
          <TouchableOpacity
            key={buttonNumber}
            style={styles.button}
            onPress={() => handleButtonPress(buttonNumber)}
          >
            <Text>{buttonNumber}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instruction: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    padding: 10,
    marginHorizontal: 5,
  }
});

export default BombModule;
